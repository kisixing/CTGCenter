import React, { Component } from 'react';
import moment from 'moment';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Input, Select, DatePicker, Button } from 'antd';
// import { compile, uncompile } from '../../common/utils';

import styles from './FieldForm.less';
moment.locale('zh-cn');

// 默认时间
const ENDTIME = moment();
const STARTTIME = moment().subtract(7, 'd');

@Form.create()
class FieldForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { form } = this.props;
    form.setFieldsValue({
      startTime: STARTTIME,
      endTime: ENDTIME,
      type: 'all'
    });
  }

  // // 检索
  // handleSubmit = e => {
  //   e.preventDefault();
  //   const { dispatch, form, pagination } = this.props;
  //   const { size, page } = pagination;
  //   form.validateFields((err, values) => {
  //     if (!err) {
  //       // let sTime = STARTTIME.format('YYYY-MM-DD');
  //       // let eTime = ENDTIME.format('YYYY-MM-DD');
  //       let sTime = undefined;
  //       let eTime = undefined;
  //       let { startTime, endTime } = values;
  //       if (startTime) {
  //         sTime = moment(startTime).format('YYYY-MM-DD');
  //       }
  //       if (endTime) {
  //         eTime = moment(endTime).format('YYYY-MM-DD');
  //       }
  //       // TODO
  //       dispatch({
  //         type: 'archives/fetchRecords',
  //         payload: {
  //           // 'pregnancyId.equals': pregnancyId,
  //           'visitDate.greaterOrEqualThan': sTime,
  //           'visitDate.lessOrEqualThan': eTime,
  //           size,
  //           page: 0,
  //         },
  //       });
  //       dispatch({
  //         type: 'archives/fetchCount',
  //         payload: {
  //           // 'pregnancyId.equals': pregnancyId,
  //           'visitDate.greaterOrEqualThan': sTime,
  //           'visitDate.lessOrEqualThan': eTime,
  //         },
  //       });
  //       // 检索与分页器相关关
  //       dispatch({
  //         type: 'archives/updateState',
  //         payload: {
  //           pagination: {
  //             size,
  //             page: 0,
  //           },
  //         },
  //       });
  //     }
  //   });
  // };

  // 重置表单
  handleReset = () => {
    this.props.form.resetFields();
  };

  render() {
    const {
      form: { getFieldDecorator },
      handleSearch,
    } = this.props;
    return (
      <Form layout="inline" className={styles.form}>
        <Row>
          <Col span={4}>
            <Form.Item label="开始日期">
              {getFieldDecorator('startTime')(
                <DatePicker allowClear format="YYYY-MM-DD" placeholder="请选择开始日期" />,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="结束日期">
              {getFieldDecorator('endTime')(
                <DatePicker allowClear format="YYYY-MM-DD" placeholder="请选择结束日期" />,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="是否绑定">
              {getFieldDecorator('type')(
                <Select style={{ width: 120 }}>
                  <Select.Option value="true">已绑定</Select.Option>
                  <Select.Option value="false">未绑定</Select.Option>
                  <Select.Option value="all">全部</Select.Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="档案号">
              {getFieldDecorator('note')(
                <Input />,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="姓名">
              {getFieldDecorator('name')(
                <Input />,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item>
              <Button type="primary" onClick={handleSearch} loading={false}>
                搜索
              </Button>
              <Button onClick={this.handleReset}>重置</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FieldForm;
