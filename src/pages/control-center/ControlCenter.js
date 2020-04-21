import React, { Component } from 'react';
import { Switch, Descriptions, Badge } from 'antd';
import CustomTable from './CustomTable';
import { getUrlParam, auth, account } from '../../common/utils';
import request from '../../common/request';

import styles from './index.less';

class ControlCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processing: true,
      data: [],
    };
  }

  componentDidMount() {
    const _this = this;
    const access_token = auth.get();
    if (access_token) {
      // 如果存在LIAN_MED_ACCESS_TOKEN则不重新做用户验证
      this.fetchStatus();
      this.fetchPlans();
    } else {
      const url_params = getUrlParam();
      account.set(url_params);
      return request
        .post('/encryptedauthenticate', {
          username: url_params.auth_user,
          token: url_params.auth_token,
          password: url_params.auth_password,
        })
        .then(function(response) {
          const access_token = response.data.id_token;
          auth.set(access_token);
          // 验证成功后
          _this.fetchStatus();
          _this.fetchPlans();
        })
        .catch(function(error) {
          console.info('/encryptedauthenticate', error);
        });
    }
  }

  fetchStatus() {
    console.log('fetch status')
    const _this = this;
    request
      .get('/scheduler')
      .then(function(response) {
        const d = response.data;
        _this.setState({ processing: d.flag });
      })
      .catch(function(error) {
        console.log('/scheduler', error);
      });
  }

  fetchPlans() {
    console.log('fetch plans');
    const _this = this;
    request
      .get('/runningPlans')
      .then(function(response) {
        const d = response.data;
        _this.setState({ data: d });
      })
      .catch(function(error) {});
  }

  toggleScheduler(action = 'start') {
    const _this = this;
    request
      .get(`/scheduler/${action}`)
      .then(function(response) {
        const d = response.data;
        // _this.setState({ processing: d.flag });
        _this.setState({ processing: !_this.state.processing });
      })
      .catch(function(error) {});
  }

  onClick = (checked, e) => {
    if (checked) {
      this.toggleScheduler('start');
    } else {
      this.toggleScheduler('stop');
    }
  };

  render() {
    const { processing, data } = this.state;
    return (
      <div className={styles.container}>
        <Descriptions title="调度器" layout="vertical" bordered>
          <Descriptions.Item label="状态" span={3}>
            <Badge
              status={processing ? 'processing' : 'default'}
              text={processing ? '运行中' : '停止'}
              style={{ width: '78px' }}
            />
            <Switch
              checkedChildren="开"
              unCheckedChildren="关"
              checked={processing}
              onClick={this.onClick}
            />
          </Descriptions.Item>
          <Descriptions.Item label="当前运行的任务" span={3}>
            <CustomTable rowKey="id" dataSource={data} size="small" />
          </Descriptions.Item>
        </Descriptions>
      </div>
    );
  }
}

export default ControlCenter;
