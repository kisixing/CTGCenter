import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Input, Select, Button } from 'antd';
import request from "@lianmed/request";

class RearchForm extends Component<any, any> {
  state = {
    options: []
  };

  handleSearch = e => {
    e.preventDefault();
    const { form, onSearch } = this.props;
    form.validateFields((err, values) => {
      if (err) {
        return console.info('error');
      }
      onSearch(values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  fetchOptions = () => {
    request.get(`/wards`).then(d => this.setState({ options: d }))
  };

  render () {
    const { options } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form className="ant-advanced-search-form" layout="inline" onSubmit={this.handleSearch}>
        <Form.Item label="设备编号">
          {getFieldDecorator('deviceno')(<Input allowClear placeholder="输入设备编号" />)}
        </Form.Item>
        <Form.Item label="ERP">
          {getFieldDecorator('erp')(<Input allowClear placeholder="输入ERP" />)}
        </Form.Item>
        <Form.Item label="病区号">
          {getFieldDecorator('areano')(
            <Select allowClear style={{ width: '180px' }} onFocus={this.fetchOptions}>
              {options.map(_ => {
                return (
                  <Select.Option value={_.wardId} key={_.wardId}>
                    {_.wardName}
                  </Select.Option>
                );
              })}
            </Select>,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
            重置
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(RearchForm);
