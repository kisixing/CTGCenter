import React, { Component } from 'react';
import { Layout } from 'antd';
import r from '@lianmed/request';
import moment from 'moment';
import SiderMenu from './SiderMenu';
import Content from './Content';
import request from '../../common/request';
import { getUrlParam, auth } from '../../common/utils';
import styles from './App.less';


class App extends Component {
  index = 1;
  state = {
    secondsElapsed: 0,
    dataSource: [],
    selected: {},
  };

  componentDidMount() {
    r.config({
      Authorization: auth.get(),
      prefix: window.CONFIG.baseURL,
    });
    const _this = this;
    request
      .post('/authenticate', {
        username: 'admin',
        password: 'admin',
      })
      .then(function(response) {
        const access_token = response.data.id_token;
        auth.set(access_token);
        r.config({
          Authorization: access_token,
          prefix: window.CONFIG.baseURL,
        });
        _this.fetch();
      })
      .catch(function(error) {
        console.log('api/authenticate', error);
      });

    this.interval = setInterval(() => this.fetch(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  // 定时器

  // 请求数据列表
  fetch = () => {
    const _this = this;
    const areaNO = getUrlParam('diagnosisCode');
    const visitDate = moment().format('YYYY-MM-DD');
    request
      .get('/prenatal-visits', {
        params: {
          'visiDate.greaterOrEqalThan': visitDate,
          'diagnosis.specified': false,
          'diagnosisCode.equals': areaNO,
        },
      })
      .then(function(response) {
        const dataSource = response.data;
        if (dataSource.length > 0) {
          _this.setState({
            dataSource,
          });
          if (_this.index === 1) {
            _this.setState({ selected: dataSource[0] });
          }
          ++_this.index;
        }
      })
      .catch(function(error) {});
  };

  setItem = item => {
    this.setState({ selected: item });
  };

  clearSelect = () => {
    this.setState({ selected: {} });
  }

  render() {
    const { dataSource, selected } = this.state;
    return (
      <Layout>
        <Layout.Header className={styles.header}>胎儿监护未处理档案</Layout.Header>
        <Layout style={{ height: '100%' }}>
          <Layout.Sider width={328} className={styles.sider}>
            <SiderMenu setItem={this.setItem} dataSource={dataSource} selected={selected} />
          </Layout.Sider>
          <Layout.Content className={styles.content}>
            <Content selected={selected} fetch={this.fetch} clearSelect={this.clearSelect} />
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
