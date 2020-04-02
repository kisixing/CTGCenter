/**
 *"name": "1.0.1",
 *"description": "test",
 *"type": "ctg-suit",
 *"uri": "1.0.1",
 *"createTime": "2019-11-08 00:01:00",
 *"enable": null
 */
import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Input, Select, Checkbox, Button, message, AutoComplete } from 'antd';
import qs from 'qs';
import request from '../../common/request';
import OSSUpload from './OSSUpload';
import styles from './index.less';

const dataSource = ['ctg-suit', 'pda', 'device-fw', 'device-setting', 'f3' ];

class Upload extends Component {
  state = {
    loading: false,
    historyList: {
      'ctg-suit': [],
      'pda': []
    }
  };

  componentDidMount() {
    this.fetchHistoryVersion();
  }

  reset = () => {
    this.props.form.resetFields();
  }

  // 获取历史版本列表
  fetchHistoryVersion = () => {
    const _this = this;
    const { historyList } = this.state;
    request
      .get('/versions')
      .then(function(response) {
        const d = response.data;
        for (let i = 0; i < d.length; i++) {
          const element = d[i];
          if (element.type === 'ctg-suit') {
            historyList['ctg-suit'].push(element);
          }
          if (element.type === 'pda') {
            historyList['pda'].push(element);
          }
        }
        // 分版本
        // console.log('object', d, historyList);
        _this.setState({ historyList });
      })
      .catch(function(error) {});
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
    const { loading, historyList } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className={styles.container}>
        <div className={styles.title}>文件上传</div>
        <div style={{ display: 'flex' }}>
          <Form {...formItemLayout} layout="horizontal" className={styles.form}>
            <Form.Item label="版本号">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入版本号!' }],
              })(<Input placeholder="请输入版本号" />)}
            </Form.Item>
            {/* <Form.Item label="安装包类型">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '请选择上传文件类型!' }],
              })(
                <Select placeholder="请选择上传文件类型">
                  <Select.Option value="ctg-suit">ctg-suit</Select.Option>
                  <Select.Option value="pda">pda</Select.Option>
                  <Select.Option value="device-fw">device-fw</Select.Option>
                  <Select.Option value="device-setting">device-setting</Select.Option>
                </Select>,
              )}
            </Form.Item> */}
            <Form.Item label="安装包类型">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '请选择上传文件类型!' }],
              })(<AutoComplete placeholder="请选择上传文件类型" dataSource={dataSource} />)}
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
              <div style={{ position: 'relative' }}>
                <div style={{ display: 'inline-block' }}>
                  {getFieldDecorator('file', {
                    rules: [{ required: true, message: '请选择上传文件！' }],
                  })(<OSSUpload />)}
                </div>
                <div style={{ position: 'absolute', top: 0, marginLeft: '186px' }}>
                  {getFieldDecorator('enable', {
                    valuePropName: 'checked',
                  })(<Checkbox>强制升级</Checkbox>)}
                </div>
              </div>
            </Form.Item>
            <Form.Item label=" " colon={false}>
              <Button type="primary" onClick={this.submit} loading={loading}>
                上传
              </Button>
              <Button onClick={this.reset}>取消</Button>
            </Form.Item>
          </Form>
          <div className={styles.list}>
            <p className={styles.title}>上传历史版本</p>
            <div className={styles.content}>
              <div>
                <p>suit-ctg</p>
                <ul>
                  {historyList['ctg-suit'].map(e => (
                    <li key={e.id}>{e.name}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p>pda</p>
                <ul>
                  {historyList['pda'].map(e => (
                    <li key={e.id}>{e.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(Upload);


