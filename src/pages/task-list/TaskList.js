import React, { Component } from 'react';
import { Button, Badge, message } from 'antd';
import CustomTable from './CustomTable';
import NewModal from './NewModal';
import { getUrlParam, account, auth } from '../../common/utils';
import request from '../../common/request';
import styles from './index.less';

class TaskLog extends Component {
  state = {
    visible: false,
    data: [],
    record: null, // 选择的行数据
  };

  componentDidMount() {
    const _this = this;
    const access_token = auth.get();
    if (access_token) {
      // 如果存在LIAN_MED_ACCESS_TOKEN则不重新做用户验证
      _this.fetchPlans();
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
          _this.fetchPlans();
        })
        .catch(function(error) {
          console.info('/authenticate', error);
        });
    }
  }

  fetchPlans(id) {
    const _this = this;
    const api = id ? `/plans/${id}` : 'plans';
    request
      .get(api)
      .then(function(response) {
        const d = response.data;
        console.log('object', d);
        _this.setState({ data: d });
      })
      .catch(function(error) {});
  }

  show = () => {
    this.setState({ record: null, visible: true });
  };

  onCancel = () => {
    this.setState({ visible: false });
  };

  // 新建任务
  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      if (values.fireTime) {
        values.fireTime = values.fireTime.format('YYYY-MM-DD HH:mm:ss');
      }
      if (values.id) {
        this.update(values);
      } else {
        this.add(values);
      }
      // console.log('Received values of form: ', JSON.stringify(values));
      form.resetFields();
    });
  };

  add = data => {
    const _this = this;
    request
      .post('/plans', data)
      .then(response => {
        const d = response.data;
        if (d && d.id) {
          message.info('新增任务成功！');
          _this.setState({ visible: false });
          // 重新刷新列表
          _this.fetchPlans();
        } else {
          message.error('新增任务失败！');
        }
        // console.log('add-->', response);
      })
      .catch(error => {});
  };

  update = data => {
    const _this = this;
    request
      .put('/plans', data)
      .then(response => {
        // console.log('update-->', response);
        const d = response.data;
        if (d && d.id) {
          message.info('修改任务成功！');
          _this.setState({ visible: false });
          // 重新刷新列表
          _this.fetchPlans();
        } else {
          message.error('修改任务失败！');
        }
      })
      .catch(error => {});
  };

  // 调度
  schedule = id => {
    const _this = this;
    request
      .get(`/plans/${id}/schedule`)
      .then(response => {
        const { statusText, data } = response;
        if (statusText === 'OK') {
          _this.fetchPlans()
        }
        console.log(`/plans/${id}/schedule -->`, response);
      })
      .catch(error => {});
  };
  // 停止调度
  unschedule = id => {
    const _this = this;
    request
      .get(`/plans/${id}/unschedule`)
      .then(response => {
        const { statusText, data } = response;
        if (statusText === 'OK') {
          _this.fetchPlans();
        }
        console.log(`/plans/${id}/unschedule -->`, data);
      })
      .catch(error => {});
  };

  // 删除
  deleted = id => {
    const _this = this;
    request
      .delete(`plans/${id}`)
      .then(response => {
        const d = response.data;
        console.log(`plans/${id}-->`, d);
        if (d.id) {
          _this.fetchPlans()
        }
      })
      .catch(error => {});
  };

  // 编辑
  edit = record => {
    this.setState({
      visible: true,
      record,
    });
  };

  render() {
    const { visible, data, record } = this.state;
    const tableProps = {
      dataSource: data,
      schedule: this.schedule,
      unschedule: this.unschedule,
      edit: this.edit,
      deleted: this.deleted,
    };
    return (
      <div className={styles.container}>
        <div className={styles.title}>任务列表</div>
        <div className={styles.tableHeader}>
          <Button type="primary" icon="plus" onClick={this.show}>
            新增任务
          </Button>
          {visible ? (
            <NewModal
              wrappedComponentRef={form => (this.formRef = form)}
              visible={visible}
              onOk={this.handleCreate}
              onCancel={this.onCancel}
              initialValue={record}
            />
          ) : null}
        </div>
        <CustomTable {...tableProps} />
      </div>
    );
  }
}

export default TaskLog;
