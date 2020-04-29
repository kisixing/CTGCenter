import React, { Component } from 'react';
import { Layout, Modal } from 'antd';
import r from "@lianmed/request";
import { event } from '@lianmed/utils';
import moment from "moment";
// import { parse, stringify } from 'qs';
import request from "../../common/request";
import { auth, getUrlParam, compile } from '../../common/utils';

// import 'antd/dist/antd.css';
import SiderMenu from "./containers/SiderMenu";
import Header from './containers/Header';
import Content from './containers/Content';
import ReportContent from './containers/ReportContent';
import PageLoading from './components/PageLoading';
import styles from './App.less';

const AUTH_TOKEN = auth.get();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      selected: {},
      dataSource: [],
      pregnancy: {},
      activeKey: 'archive',
      empId: '',
    };
  }

  componentDidMount() {
    // TODO 设置固定账户密码，静默登录
    this.fetchList();
    if (!AUTH_TOKEN) {
      this.fetchAuth();
    }
    // 组件专有request
    r.config({
      Authorization: AUTH_TOKEN,
      prefix: window.CONFIG.baseURL,
    });

    event.on('signed', this.fetchList);
  }

  fetchAuth = () => {
    const ACCOUNT = { username: compile('admin'), password: compile('admin') };
    request
      .post('/encryptedauthenticate', {
        username: ACCOUNT.username,
        password: ACCOUNT.password,
      })
      .then(function(response) {
        const access_token = 'Bearer ' + response.data.id_token;
        sessionStorage.setItem('ACCESS_TOKEN', access_token);
        auth.set(response.data.id_token);
        // _this.setState({ isLoading: false });

        r.config({
          Authorization: access_token,
          prefix: window.CONFIG.baseURL,
        });
      })
      .catch(function(error) {
        console.log('api/encryptedauthenticate', error);
      });
  };

  // TODO 11.12 档案列表请求方式
  fetchList = (loader = true) => {
    let data = [];
    if (!loader) this.setState({ isLoading: true });
    const _this = this;
    const { selected } = this.state;
    // 加载档案列表
    const url_params = window.location.search.substr(1);
    const params = getUrlParam();
    // TODO
    this.setState({ empId: params.empId });
    let query = '';
    Object.keys(params).forEach(function(key, index) {
      const value = params[key];
      if (index === 0) {
        query += `${key}=${encodeURIComponent(value)}`;
      } else {
        query += `&${key}=${encodeURIComponent(value)}`;
      }
    });

    request
      .get(`/prenatal-visits-encrypt?${query}`)
      .then(function(response) {
        // handle success
        const dataSource = response.data;
        if (response && dataSource && dataSource.length) {
          const newData = dataSource.map(e => {
            return {
              ...e,
              visitTime: e.visitTime && moment(e.visitTime).format('YY/MM/DD HH:mm'),
            };
          });
          // 初始化，区第一个item, 其他根据已经选择的selected更新
          let select = {};
          if (!selected.id) {
            select = newData[0];
          } else {
            select = newData.filter(e => e.id === selected.id)[0];
          }
          data = newData
          _this.setState({
            dataSource: newData,
            pregnancy: newData[0].pregnancy,
            selected: select,
            isLoading: false,
          });
        } else {
          // 返回错误或返回空，弹框提示
          _this.setState({ isLoading: false });
          Modal.warning({
            centered: true,
            okText: '确定',
            title: '提示',
            content: '该孕妇无任何档案，请稍后再试...',
          });
        }
      })
      .catch(function(error) {
        // handle error
        console.log('/prenatal-visitspage-encrypt', error);
      });
      return data;
  };

  setItem = item => {
    this.setState({ selected: item });
  };

  // tabs标签卡切换
  tabChange = key => {
    this.setState({ activeKey: key });
  };

  render() {
    const { isLoading, selected, dataSource, pregnancy, activeKey, empId } = this.state;
    // console.log('loading -->', isLoading)
    if (isLoading) {
      return <PageLoading />;
    }
    return (
      <Layout className={styles['app-wrapper']}>
        <Layout.Header className={styles['app-header']}>
          <Header dataSource={pregnancy} activeKey={activeKey} onChange={this.tabChange} />
        </Layout.Header>

        {activeKey === 'archive' ? (
          <Layout style={{ height: '100%' }}>
            <Layout.Sider width={260} className={styles['app-sider']}>
              <SiderMenu setItem={this.setItem} selected={selected} dataSource={dataSource} />
            </Layout.Sider>
            <Layout.Content className={styles['app-content']}>
              <Content selected={selected} empId={empId} />
            </Layout.Content>
          </Layout>
        ) : (
          <ReportContent dataSource={dataSource} fetchList={this.fetchList} />
        )}
      </Layout>
    );
  }
}

export default App;
