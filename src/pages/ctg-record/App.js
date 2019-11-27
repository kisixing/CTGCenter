import React, { Component } from 'react';
import { Layout } from "antd";
import r from "@lianmed/request";
import moment from "moment";
import request from "../../common/request";
import { auth } from '../../common/utils';

import 'antd/dist/antd.css';
import SiderMenu from "./containers/SiderMenu";
import Header from './containers/Header';
import Content from './containers/Content';
import PageLoading from './components/PageLoading';
import styles from './App.less';

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
    if (!auth.get()) {
      this.fetchAuth();
    }
    this.fetchList();
    // 组件专有request
    r.config({
      Authorization: auth.get(),
      prefix: window.CONFIG.baseURL,
    });
  }

  fetchAuth = () => {
    const _this = this;
    const ACCOUNT = window.CONFIG.account;
    request
      .post("/authenticate", {
        username: ACCOUNT.username,
        password: ACCOUNT.password
      })
      .then(function(response) {
        const access_token = "Bearer " + response.data.id_token;
        sessionStorage.setItem("ACCESS_TOKEN", access_token);
        _this.setState({ isLoading: false });

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
    const _this = this;
    // 加载档案列表
    request({
      method: 'get',
      headers: { Authorization: '' },
      // url: `/prenatal-visits-encrypt?${url_params}`
      url: '/prenatal-visitspage',
    })
      .then(function(response) {
        // handle success
        const dataSource = response.data;
        const newData = dataSource.map(e => {
          return {
            ...e,
            visitTime: e.visitTime && moment(e.visitTime).format('YY/MM/DD HH:mm'),
          };
        });
        _this.setState({
          dataSource: newData,
          pregnancy: newData[0].pregnancy,
          isLoading: false,
        });
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
            <SiderMenu setItem={this.setItem} dataSource={dataSource} />
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
