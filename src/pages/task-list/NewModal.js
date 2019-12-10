import React, { Component } from 'react';
import { Modal, Form, Input, Select, DatePicker } from 'antd';
import moment from 'moment';
import request from '../../common/request';
import { isJSON } from '../../common/store';
import styles from './index.less';

const { Option } = Select;

export class NewModal extends Component {
  state = {
    targetObject: [],
    targetMethod: [],
    triggerType: 'RIGHTNOW',
    targetParams: [],
  };

  componentDidMount() {
    this.fetchOptions();
  }

  fetchOptions = () => {
    // 请求select option选项
    const _this = this;
    request
      .get('/tasks')
      .then(function(response) {
        let d = response.data;
        if (isJSON(d)) {
          let dd = [];
          Object.keys(d).forEach(e => {
            dd.push(d[e]);
          });
          d = dd;
        }
        const { initialValue } = _this.props;
        if (initialValue) {
          const { targetObject, targetMethod, triggerType } = initialValue;
          const s = d.filter(e => e.name === targetObject)[0];
          _this.setState({ targetMethod: s.methods, triggerType });
        }
        _this.setState({ targetObject: d });
      })
      .catch(function(error) {});
  };

  onSelect = (v, o) => {
    const { targetObject } = this.state;
    const { form } = this.props;
    const s = targetObject.filter(e => e.name === v)[0];
    const targetMethod = s.methods;
    this.setState({ targetMethod });
    form.setFieldsValue({ targetMethod: '', description: '' });
  };

  onSelect2 = (v, o) => {
    const { targetMethod } = this.state;
    const { form } = this.props;
    const s = targetMethod.filter(e => e.name === v)[0];
    form.setFieldsValue({ description: s.description });
    // 确定参数
    this.setState({ targetParams: s.params });
  };

  onSelect3 = (v, o) => {
    this.setState({ triggerType: v });
  };

  renderTriggerType = () => {
    const { triggerType } = this.state;
    const { getFieldDecorator } = this.props.form;
    if (triggerType === 'DELAY') {
      return (
        <Form.Item label="触发时间">
          {getFieldDecorator('fireTime', {
            rules: [{ required: true, message: '请指定执行时间!' }],
          })(
            <DatePicker
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={this.disabledDate}
              disabledTime={this.disabledDateTime}
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />,
          )}
        </Form.Item>
      );
    } else if (triggerType === 'REGULAR') {
      return (
        <Form.Item label="cron表达式">
          {getFieldDecorator('cronExpression', {
            rules: [{ required: true, message: '请正确填写一个cron表达式!' }],
          })(<Input type="text" />)}
        </Form.Item>
      );
    } else {
      return null;
    }
  };

  disabledDate = current => {
    return current && current < moment().endOf('day');
  };

  disabledDateTime = () => {
    return {
      disabledHours: () => this.range(0, 24).splice(4, 20),
      disabledMinutes: () => this.range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  };

  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  // 任务参数
  renderTargetParams = (targetParams, form) => {
    let dom = null;
    if (targetParams.length) {
      dom = targetParams.map((item, index) => {
        return (
          <Form.Item key={index} label={item.name}>
            {form.getFieldDecorator(`targetParams${index + 1}`, {
              initialValue: '',
            })(<Input placeholder="请输入参数" />)}
          </Form.Item>
        );
      });
    }
    return dom;
  };

  render() {
    const { targetObject, targetMethod, triggerType, targetParams } = this.state;
    const { onCancel, onOk, form, visible, initialValue } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <Modal
        destroyOnClose={true}
        visible={visible}
        title={`${initialValue ? '编辑' : '新建'}任务`}
        okText="提交"
        cancelText="取消"
        width="680px"
        onCancel={onCancel}
        onOk={onOk}
      >
        <Form {...formItemLayout} className={styles.form} onSubmit={this.onOk}>
          {getFieldDecorator('id')(<Input type="hidden" />)}
          <Form.Item label="任务名称">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入一个任务名称!' }],
            })(<Input type="text" />)}
          </Form.Item>
          <Form.Item label="任务对象">
            {getFieldDecorator('targetObject', {
              rules: [{ required: true, message: '请选择一个任务对象!' }],
            })(
              <Select onSelect={this.onSelect}>
                {targetObject &&
                  targetObject.map(item => <Option key={item.name}>{item.alias}</Option>)}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="任务方法">
            {getFieldDecorator('targetMethod', {
              rules: [{ required: true, message: '请选择一个任务方法!' }],
            })(
              <Select onSelect={this.onSelect2}>
                {targetMethod &&
                  targetMethod.map(item => <Option key={item.name}>{item.alias}</Option>)}
              </Select>,
            )}
          </Form.Item>
          {this.renderTargetParams(targetParams, form)}
          <Form.Item label="任务描述">
            {getFieldDecorator('description', {
              initialValue: '',
            })(<Input.TextArea />)}
          </Form.Item>
          <Form.Item label="触发器类型">
            {getFieldDecorator('triggerType', {
              rules: [{ required: true, message: '请选择一个任务方法!' }],
            })(
              <Select onSelect={this.onSelect3}>
                <Option value="RIGHTNOW">立即执行</Option>
                <Option value="DELAY">定点执行</Option>
                <Option value="REGULAR">周期执行</Option>
              </Select>,
            )}
          </Form.Item>
          {/* {this.renderTriggerType()} */}
          {triggerType === 'DELAY' ? (
            <Form.Item label="触发时间">
              {getFieldDecorator('fireTime', {
                rules: [{ required: true, message: '请指定执行时间!' }],
              })(
                <DatePicker
                  format="YYYY-MM-DD HH:mm:ss"
                  // disabledDate={this.disabledDate}
                  // disabledTime={this.disabledDateTime}
                  showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                  placeholder="选择触发时间"
                />,
              )}
            </Form.Item>
          ) : null}
          {triggerType === 'REGULAR' ? (
            <Form.Item label="cron表达式">
              {getFieldDecorator('cronExpression', {
                rules: [{ required: true, message: '请正确填写一个cron表达式!' }],
              })(<Input type="text" />)}
            </Form.Item>
          ) : null}
          <Form.Item label="异常处理策略">
            {getFieldDecorator('strategy', {
              rules: [{ required: true, message: '请选择一个异常处理策略!' }],
              initialValue: '',
            })(
              <Select>
                <Option value="BREAK">中止</Option>
                <Option value="GOON">继续</Option>
              </Select>,
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(NewModal)
