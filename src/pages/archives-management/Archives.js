import React, { PureComponent } from 'react';
import { Layout, message } from 'antd';
import moment from 'moment';
import { stringify } from 'qs';
import r from '@lianmed/request';
import request from '../../common/request';
import { transformsCTG, auth } from '../../common/utils';

import CurveChart from './CurveChart';
import FieldForm from './FieldForm';
import TableList from './TableList';

import styles from './Archives.less';

// 默认时间
const ENDTIME = moment().format('YYYY-MM-DD');
const STARTTIME = moment()
  .subtract(7, 'd')
  .format('YYYY-MM-DD');

class Archives extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      startTime: STARTTIME,
      endTime: ENDTIME,
      data: [],
      loading: false,
      pagination: {
        size: 10,
        page: 0,
      },
      total: null,
      selected: {},
      CTGData: null,
      CTGLoading: false,
    };
  }

  componentDidMount() {
    this.getCount();
    this.getRecords();
    //
    r.config({
      Authorization: auth.get(),
      prefix: window.CONFIG.baseURL,
    });
  }

  getFields = () => {
    let v = {};
    this.form.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      v = values;
    });
    return v;
  };

  handleSearch = () => {
    const {
      pagination: { size, page },
    } = this.state;
    this.form.props.form.validateFields((errors, values) => {
      if (errors) {
        return;
      }
      console.log('search values', values);
      let sTime = undefined;
      let eTime = undefined;
      let t = undefined;
      let { startTime, endTime, type } = values;
      if (startTime) {
        sTime = moment(startTime).format('YYYY-MM-DD');
      }
      if (endTime) {
        eTime = moment(endTime).format('YYYY-MM-DD');
      }
      if (type === 'true') {
        t = true;
      }
      if (type === 'false') {
        t = false;
      }
      this.getRecords(sTime, eTime, t, size, page);
      this.getCount(sTime, eTime, t);
    });
  };

  // search data
  getRecords = (sTime = STARTTIME, eTime = ENDTIME, t, size = 10, page = 0) => {
    // console.log('44444444444', sTime, eTime, size, page);
    const _this = this;
    _this.setState({ loading: true });
    const params = {
      'CTGExamId.specified': true,
      'pregnancyId.specified': t, // 不要求检索已经绑定的档案列表
      'visitDate.greaterOrEqualThan': sTime,
      'visitDate.lessOrEqualThan': eTime,
      size,
      page,
    };
    request.get(`/prenatal-visitspage?${stringify(params)}`).then(function(response) {
      const data = response.data;
      // 成功获取列表后设置选中首行
      _this.setState({
        data,
        loading: false,
        // selected: data[0]
      });
    });
  };

  // 获取总数Count
  getCount = (sTime = STARTTIME, eTime = ENDTIME, t) => {
    // console.log('55555555', sTime, eTime)
    const _this = this;
    const params = {
      'CTGExamId.specified': true,
      'pregnancyId.specified': t,
      'visitDate.greaterOrEqualThan': sTime,
      'visitDate.lessOrEqualThan': eTime,
    };
    request.get(`/prenatal-visits/count?${stringify(params)}`).then(function(response) {
      _this.setState({ total: response.data });
    });
  };

  // 选中行数据
  onSelect = record => {
    const { ctgexam } = record;
    this.setState({ selected: record });
    this.getCTG(ctgexam.note);
  };

  // 获取CTG曲线数据
  getCTG = docid => {
    const _this = this;
    _this.setState({ CTGLoading: true });

    request.get(`/ctg-exams-data/${docid}`).then(res => {
      if (res.status === 200) {
        const data = res.data;
        const CTGData = transformsCTG(data.docid, data);
        _this.setState({ CTGData, CTGLoading: false });
      } else {
        message.info('请求出错，请稍后再试。');
        _this.setState({ CTGLoading: false });
      }
    });
  };

  // 保存pagination数据
  savePagination = pagination => {
    this.setState({ pagination });
  };

  render() {
    const { pagination, data, selected, total, CTGData, CTGLoading, loading } = this.state;
    return (
      <Layout className={styles.wrapper}>
        <div className={styles.searchForm}>
          <FieldForm
            wrappedComponentRef={form => (this.form = form)}
            handleSearch={this.handleSearch}
          />
          <TableList
            getFields={this.getFields}
            pagination={pagination}
            dataSource={data}
            selected={selected}
            onSelect={this.onSelect}
            total={total}
            loading={loading}
            getRecords={this.getRecords}
            getCount={this.getCount}
            savePagination={this.savePagination}
          />
        </div>
        <Layout className={styles.chart}>
          <CurveChart selected={selected} spinning={CTGLoading} dataSource={CTGData} />
        </Layout>
      </Layout>
    );
  }
}

export default Archives;
