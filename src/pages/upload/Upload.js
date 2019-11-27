/**
 *"name": "1.0.1",
 *"description": "test",
 *"type": "ctg-suit",
 *"uri": "1.0.1",
 *"createTime": "2019-11-08 00:01:00",
 *"enable": null
 */
import React, { Component } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import qs from 'qs';
import request from '../../common/request';
import OSSUpload from './OSSUpload';
import styles from './index.less';

class Upload extends Component {
  state = {
    loading: false,
  };

  reset = () => {
    this.props.form.resetFields();
  }

  submit = () => {
    const { validateFields, resetFields } = this.props.form;
    validateFields((err, values) => {
      if (err) {
        return console.log('Received values of form: ', values);
      }
      this.setState({ loading: true });
      const fd = new FormData();
      const data = Object.entries(values)
        .filter(([k, v]) => !!v)
        .reduce((a, [k, v]) => {
          if (k === 'file') {
            v = v[0].originFileObj;
          }
          a.append(k, v);
          return a;
        }, fd);
      console.log('upload data', values, data);

      request({
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: data,
        url: '/upload',
        timeout: 1000 * 60* 60,
      })
        .then(response => {
          const { statusText } = response;
          if (statusText === 'Created') {
            message.info('上传成功');
            this.setState({ loading: false });
            resetFields();
          }
        })
        .catch(error => {
          console.log('/upload', error);
          message.info('上传失败，请重新上传');
          this.setState({ loading: false });
        });
    });
  }

  render() {
    const { loading } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 10 },
      },
    };
    return (
      <div className={styles.container}>
        <div className={styles.title}>文件上传</div>
        <Form {...formItemLayout} layout="horizontal" className={styles.form}>
          <Form.Item label="版本号">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: '请输入版本号!' }],
            })(<Input placeholder="请输入版本号" />)}
          </Form.Item>
          <Form.Item label="安装包类型">
            {getFieldDecorator('type', {
              rules: [{ required: true, message: '请选择上传文件类型!' }],
            })(
              <Select placeholder="请选择上传文件类型">
                <Select.Option value="ctg-suit">ctg-suit</Select.Option>
                <Select.Option value="pda">pda</Select.Option>
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="URI">
            {getFieldDecorator('uri', {
              rules: [{ required: true, message: '请输入上传路径!' }],
            })(<Input placeholder="请输入上传路径" />)}
          </Form.Item>
          <Form.Item label="简述">
            {getFieldDecorator('description', {
              rules: [{ required: true, message: '请输入简单的描述！' }],
            })(<Input.TextArea rows={4} placeholder="请输入简单的描述..." />)}
          </Form.Item>
          <Form.Item label="选择文件">
            {getFieldDecorator('file', {
              rules: [{ required: true, message: '请选择上传文件！' }],
            })(<OSSUpload />)}
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button type="primary" onClick={this.submit} loading={loading}>
              上传
            </Button>
            <Button onClick={this.reset}>取消</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Upload);


