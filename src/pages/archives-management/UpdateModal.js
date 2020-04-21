/**
 * 建档
 */
import React from 'react';
import moment from 'moment';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Modal, Input, Row, Col, DatePicker, InputNumber, Button, Table, message } from 'antd';
import { stringify } from 'qs';
import request from '../../common/request';

const columns = [
  {
    title: '床号',
    dataIndex: 'bedNO',
    key: 'bedNO',
    align: 'center',
    width: '33.33%',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    width: '33.33%',
  },
  {
    title: '住院号',
    dataIndex: 'inpatientNO',
    key: 'inpatientNO',
    align: 'center',
    width: '33.33%',
  },
];
const width = 200;

const CreateRecordModal = Form.create({
  name: 'update_form',
})(
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        errorText: '',
        disabled: false,
        pregnancyList: [],
        isSubmit: false,
        selected: {}
      };
    }

    componentDidMount() {
      const { form, type, dataSource } = this.props;
      const pregnancy = dataSource.pregnancy || {};
      if (type === 'edit') {
        form.setFieldsValue({
          // gestationalWeek: gestationalWeek,
          age: pregnancy.age,
          bedNO: pregnancy.bedNO,
          inpatientNO: pregnancy.inpatientNO,
          parity: pregnancy.parity,
          gravidity: pregnancy.gravidity,
          name: pregnancy.name,
        });
      }
    }

    reset = () => {
      // 清空form表单数据、输入框状态变为可输入状态
      this.props.form.resetFields();
      this.setState({ disabled: false });
    };

    selectRow = record => {
      this.props.form.setFieldsValue(record);
      this.setState({ selected: record, disabled: true });
    };

    search = (bedNO, inpatientNO, name) => {
      const _this = this;
      const { form } = this.props;
      form.validateFields((err, values) => {
        if (!err) {
          const params = {
            'recordstate.equals': 10,
            'areaNO.equals': undefined,
            'bedNO.equals': values.bedNO ? values.bedNO : undefined, // 床号
            'inpatientNO.equals': values.inpatientNO ? values.inpatientNO : undefined, // 住院号
            'name.equals': values.name ? values.name : undefined,
          };
          request.get(`/pregnanciespage/?${stringify(params)}`).then(res => {
            const data = res.data;
            if (data) {
              if (!data.length) {
                _this.setState({ errorText: '没有这个孕册，请新建孕册。' });
              } else if (data.length === 1) {
                _this.setState({
                  selected: data[0],
                  disabled: true,
                  isSubmit: true,
                });
                // 搜索结果只有一个，默认赋值
                form.setFieldsValue(data[0]);
              } else {
                _this.setState({ pregnancyList: data, isSubmit: true });
              }
            }
          });
        }
      });
    };

    handleOk = () => {
      const { onOk, onCancel, form, dataSource } = this.props;
      const { selected } = this.state;
      if (!selected.id) {
        return message.info('未选择重新绑定的孕妇信息，请选择。');
      }
      form.validateFields((err, values) => {
        if (!err) {
          const params = {
            ...dataSource,
            pregnancy: {
              id: selected.id,
            },
          };
          onOk(params);
          // form.resetFields();
          onCancel();
        }
      });
    };

    // 不能输入非汉字效验  效验不能输入非空字符串
    validateNoChinese = (rule, value, callback) => {
      const reg = /^[^\u4e00-\u9fa5]+$/g;
      const regEmpty = /^\s*$/g;
      if (value && !reg.test(value)) {
        callback('书写格式错误，床号不能为中文');
      } else if (value && regEmpty.test(value)) {
        callback('床号不能为空');
      } else {
        callback();
      }
    };

    // 孕次 产次合理性检验
    validateMaxMin = (rule, value, callback) => {
      const reg = /^99$|^(\d|[1-9]\d)$/;
      const { field } = rule;

      if (value && !reg.test(value)) {
        callback('请输入不小于0的整数');
      }
      if (field === 'gravidity') {
        // 孕次
        const target = this.props.form.getFieldValue('parity');
        if (value < target && target) {
          callback('孕次小于产次，请检查数据合理性');
        }
      }
      if (field === 'parity') {
        // 产次
        const target = this.props.form.getFieldValue('gravidity');
        if (value > target && target) {
          callback('产次大于孕次，请检查数据合理性');
        }
      }
      callback();
    };

    render() {
      const { pregnancyList, disabled, errorText, isSubmit } = this.state;
      const { visible, onCancel, type, form } = this.props;
      const { getFieldDecorator } = form;

      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

      return (
        <Modal
          centered
          destroyOnClose
          width={800}
          visible={visible}
          title={type === 'edit' ? '编辑（更改绑定）' : '详情'}
          okText="创建"
          cancelText="取消"
          onCancel={onCancel}
          onOk={this.handleOk}
          footer={null}
        >
          <Form layout="horizontal" style={{ paddingRight: '48px' }} {...formItemLayout}>
            <Row gutter={24}>
              <Col span={12}>
                <Form.Item label={<span className="required">床号</span>}>
                  {getFieldDecorator('bedNO', {
                    rules: [
                      { required: false, message: '请填写孕妇床号!' },
                      { max: 6, message: '床号的最大长度为6' },
                      { validator: this.validateNoChinese },
                    ],
                    getValueFromEvent: event => event.target.value.replace(/\s+/g, ''),
                  })(
                    <Input
                      autoFocus
                      disabled={disabled}
                      placeholder="输入床号..."
                      style={{ width }}
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={<span className="required">姓名</span>}>
                  {getFieldDecorator('name', {
                    rules: [
                      { required: false, message: '请填写孕妇姓名!' },
                      { max: 32, message: '姓名的最大长度为32' },
                    ],
                    getValueFromEvent: event => event.target.value.trim(),
                  })(<Input disabled={disabled} placeholder="输入孕妇姓名..." style={{ width }} />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={<span className="required">住院号</span>}>
                  {getFieldDecorator('inpatientNO', {
                    rules: [
                      { required: false, message: '请填写孕妇住院号!' },
                      { max: 12, message: '住院号的最大长度为12' },
                      { validator: this.validateNoChinese },
                    ],
                    getValueFromEvent: event => event.target.value.replace(/\s+/g, ''),
                  })(<Input disabled={disabled} placeholder="输入住院号..." style={{ width }} />)}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="孕妇年龄">
                  {getFieldDecorator('age', {
                    rules: [
                      { required: false, message: '请填写孕妇住年龄!' },
                      // { validator: validateAge },
                    ],
                  })(
                    <InputNumber
                      min={1}
                      max={99}
                      disabled={disabled}
                      placeholder="输入孕妇年龄..."
                      style={{ width }}
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="孕次">
                  {getFieldDecorator('gravidity', {
                    rules: [
                      { required: false, message: '请输入孕次!' },
                      { validator: this.validateMaxMin },
                    ],
                  })(
                    <InputNumber
                      min={1}
                      max={99}
                      disabled={disabled}
                      placeholder="请输入孕次..."
                      style={{ width }}
                    />,
                  )}
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="产次">
                  {getFieldDecorator('parity', {
                    rules: [
                      { required: false, message: '请输入产次!' },
                      { validator: this.validateMaxMin },
                    ],
                  })(
                    <InputNumber
                      min={0}
                      max={99}
                      disabled={disabled}
                      placeholder="请输入产次..."
                      style={{ width }}
                    />,
                  )}
                </Form.Item>
              </Col>
              <span style={{ position: 'absolute', left: '24px', bottom: '-24px', color: '#f00' }}>
                {errorText}
              </span>
            </Row>
            <Row style={{ textAlign: 'center', marginBottom: '16px' }}>
              <Button style={{ margin: '0 12px' }} onClick={this.reset}>
                重置
              </Button>
              <Button
                style={{ margin: '0 12px' }}
                type="primary"
                disabled={disabled}
                onClick={this.search}
              >
                调入
              </Button>
              <Button
                style={{ margin: '0 12px' }}
                type="primary"
                disabled={!isSubmit}
                onClick={this.handleOk}
              >
                确认
              </Button>
            </Row>
          </Form>
          {pregnancyList.length > 1 && (
            <div>
              {/* <p>请选择孕册信息</p> */}
              <Table
                bordered
                size="small"
                scroll={{ y: 228 }}
                pagination={false}
                columns={columns}
                dataSource={pregnancyList}
                onRow={record => {
                  return {
                    onClick: event => this.selectRow(record), // 点击行
                  };
                }}
              />
            </div>
          )}
        </Modal>
      );
    }
  },
);

export default CreateRecordModal;
