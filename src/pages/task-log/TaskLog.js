import React, { Component } from 'react';
import { Switch, Descriptions, Badge } from 'antd';
import CustomTable from './CustomTable';
import { getUrlParam, account, auth } from '../../common/utils';
import request from '../../common/request';
import styles from './index.less';

class TaskLog extends Component {
  state = {};

  componentDidMount() {
    const _this = this;
    const access_token = auth.get();
    if (access_token) {
      // 如果存在LIAN_MED_ACCESS_TOKEN则不重新做用户验证
      _this.fetchPlanLogs();
    } else {
      const params = getUrlParam();
      account.set(params);
      return request
        .post('/authenticate', {
          username: params.auth_user,
          token: params.auth_token,
          password: params.auth_password,
        })
        .then(function(response) {
          const access_token = response.data.id_token;
          auth.set(access_token);
          // 验证成功后
          _this.fetchPlanLogs();
        })
        .catch(function(error) {
          console.info('/authenticate', error);
        });
    }
  }

  fetchPlanLogs(id) {
    const _this = this;
    const api = id ? `plan-logs/&{id}` : 'plan-logs';
    request
      .get(api)
      .then(function(response) {
        const d = response.data;
        console.log('object', d)
        _this.setState({ data: d });
      })
      .catch(function(error) {});
  };

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.title}>任务日志</div>
        <CustomTable dataSource={data} />
      </div>
    );
  }
}

export default TaskLog;
