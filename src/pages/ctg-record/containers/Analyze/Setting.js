import React, { Component } from 'react';
import { Form, Radio } from "antd";
import styles from "./index.module.less";

class Setting extends Component {
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        <Form.Item label="NST">
          {getFieldDecorator("NST", {
            rules: [{ required: true, message: "请选择NST!" }]
          })(
            <Radio.Group>
              <Radio value={1}>有反应</Radio>
              <Radio value={2}>无反应</Radio>
              <Radio value={3}>正弦型</Radio>
              <Radio value={4}>不满意</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="CST/OCT">
          {getFieldDecorator("CST/OCT", {
            rules: [{ required: true, message: "请选择CST/OCT!" }]
          })(
            <Radio.Group>
              <Radio value={1}>阴性</Radio>
              <Radio value={2}>阳性</Radio>
              <Radio value={3}>可以</Radio>
              <Radio value={4}>不满意</Radio>
            </Radio.Group>
          )}
        </Form.Item>
        <Form.Item label="短变异（毫秒）">
          {getFieldDecorator("variation", {
            rules: [{ required: true, message: "请选择短变异!" }]
          })(
            <Radio.Group>
              <Radio value={1}>平滑</Radio>
              <Radio value={2}>小波浪</Radio>
              <Radio value={3}>中波浪</Radio>
              <Radio value={4}>大波浪</Radio>
              <Radio value={5}>正弦型</Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create()(Setting);
