import React, { Component } from 'react';
import { Form, Row, Col, Input, Select, Button, Icon } from 'antd';
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
        <Row gutter={2}>
          <Col span={6}>
            <Form.Item label="设备号">
              {getFieldDecorator('deviceno', {
                rules: [
                  {
                    required: false,
                    message: '输入设备号!',
                  },
                ],
              })(<Input allowClear placeholder="设备号" />)}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="病区号">
              {getFieldDecorator('areano', {
                rules: [
                  {
                    required: false,
                    message: '输入病区号!',
                  },
                ],
              })(
                <Select allowClear style={{ width: '180px' }} onFocus={this.fetchOptions}>
                  {
                    options.map(_ => {
                      return (
                        <Select.Option value={_.wardId} key={_.wardId}>
                          {_.wardName}
                        </Select.Option >
                      )
                    })
                  }
                </Select>
                )}
            </Form.Item>
          </Col>
          <Col span={4} style={{ padding: '4px' }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              重置
            </Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

export default Form.create()(RearchForm);
