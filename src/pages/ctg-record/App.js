import React, { Component } from 'react';
import { Layout } from "antd";
import r from "@lianmed/request";
import { event } from '@lianmed/utils';
import moment from "moment";
import { parse, stringify } from 'qs';
import request from "../../common/request";
import { auth, getUrlParam } from '../../common/utils';

// import 'antd/dist/antd.css';
import SiderMenu from "./containers/SiderMenu";
import Header from './containers/Header';
import Content from './containers/Content';
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
      pregnancy: {}
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
    const ACCOUNT = window.CONFIG.account;
    request
      .post("/authenticate", {
        username: ACCOUNT.username,
        password: ACCOUNT.password
      })
      .then(function(response) {
        const access_token = "Bearer " + response.data.id_token;
        sessionStorage.setItem("ACCESS_TOKEN", access_token);
        auth.set(response.data.id_token);
        // _this.setState({ isLoading: false });

        r.config({
          Authorization: access_token,
          prefix: window.CONFIG.baseURL
        });
      })
      .catch(function(error) {
        console.log("api/authenticate", error);
      });
  }

  // TODO 11.12 档案列表请求方式
  fetchList = () => {
    this.setState({ isLoading: true });
    const _this = this;
    const { selected } = this.state;
    // 加载档案列表
    const url_params = window.location.search.substr(1);
    const params = getUrlParam();
    let query = '';
    Object.keys(params).forEach(function(key, index) {
      const value = params[key];
      if (index === 0) {
        query += `${key}=${encodeURIComponent(value)}`;
      } else {
        query += `&${key}=${encodeURIComponent(value)}`;
      }
    });
    // const paramsStr = stringify(params);
    // console.log('88888999999', query);

    request
      .get(`/prenatal-visits-encrypt?${query}`)
      .then(function(response) {
        // handle success
        const dataSource = response.data;
        if (response && response.data) {
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
          _this.setState({
            dataSource: newData,
            pregnancy: newData[0].pregnancy,
            selected: select,
            // isLoading: false,
          });
        }
        setTimeout(() => {
          _this.setState({ isLoading: false });
        }, 600);
      })
      .catch(function(error) {
        // handle error
        console.log('/prenatal-visitspage-encrypt', error);
      });
  };

  setItem = item => {
    this.setState({ selected: item });
  };

  render() {
    const { isLoading, selected, dataSource, pregnancy } = this.state;
    if (isLoading) {
      return <PageLoading />;
    }
    return (
      <Layout className={styles['app-wrapper']}>
        <Layout.Header className={styles['app-header']}>
          <Header dataSource={pregnancy} />
        </Layout.Header>
        <Layout>
          <Layout.Sider width={260} className={styles['app-sider']}>
            <SiderMenu setItem={this.setItem} selected={selected} dataSource={dataSource} />
          </Layout.Sider>
          <Layout.Content className={styles['app-content']}>
            <Content selected={selected} />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
