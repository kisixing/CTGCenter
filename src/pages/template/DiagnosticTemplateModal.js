import React, { Component } from 'react';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Modal, Input, Button } from 'antd';

class DiagnosticTemplateModal extends Component {
  constructor(props) {
    super(props);
    this.inputElement = React.createRef();
  }

  // 获取焦点位置
  getFocusPosition = () => {
    const target = this.inputElement.current;
    const { selectionStart } = target.textAreaRef;
  }

  // 插入【】标记
  insert = () => {
    const { form } = this.props;
    const target = this.inputElement.current;

    // console.log('8888888', target, target.value, target.selectionStart);

    const { value, selectionStart } = target;
    // 截两段
    const str1 = value.slice(0, selectionStart);
    const str2 = value.slice(selectionStart);
    // 插入【】字符
    const str = str1 + '【】' + str2;
    // reset rc-form
    form.setFieldsValue({ content: str });
    target.focus();
  };

  render() {
    const { title, visible, onCancel, onOk, form, loading } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 },
      },
    };

    return (
      <Modal
        centered
        destroyOnClose
        title={title}
        visible={visible}
        onOk={onOk}
        onCancel={onCancel}
        footer={null}
        maskClosable={false}
      >
        <Form {...formItemLayout}>
          <Form.Item label="标题">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入标题!' }],
            })(<Input placeholder="请输入标题" />)}
          </Form.Item>
          <Form.Item label="规则" style={{ marginBottom: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>文本第一个插入的‘【】’代表观察时长</span>
              <Button size="small" style={{ float: 'right' }} onClick={this.insert}>
                插入【】
              </Button>
            </div>
          </Form.Item>
          <Form.Item label="内容">
            {getFieldDecorator('content', {
              rules: [{ required: true, message: '请输入模板内容!' }],
            })(<textarea ref={this.inputElement} rows={4} placeholder="请输入模板内容" style={{ width: '100%' }} />)}
          </Form.Item>
          <div style={{ textAlign: 'center' }}>
            <Button style={{ marginRight: '12px' }} onClick={onCancel}>
              取消
            </Button>
            <Button type="primary" loading={loading} onClick={onOk}>
              确定
            </Button>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(DiagnosticTemplateModal);
