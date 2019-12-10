/**
 * CTG 曲线
 */

import React, { Component } from 'react';
import { Button, Spin } from 'antd';
import moment from 'moment';
import { Ctg as CTG } from '@lianmed/lmg';
import request from '../../../common/request';
import { transformsCTG } from '../utils'

import PrintPreview from './PrintPreview';
import Analyze from './Analyze';
import styles from './Content.module.less';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: null,
      printVisible: false,
      analyzeVisible: false,
      docId: ''
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log("content props -->", nextProps.selected);
    const docId = nextProps.selected.ctgexam && nextProps.selected.ctgexam.note;
    if (nextProps.selected.id !== this.props.selected.id) {
      this.setState({ docId })
      this.fetch(docId);
    }
  }

  fetch = docId => {
    const _this = this;
    _this.setState({ loading: true });
    setTimeout(() => {
      request
        .get(`/ctg-exams-data/${docId}`)
        .then(function (response) {
          const data = response.data;
          if (response && response.data) {
            const ctgData = transformsCTG(data.docid, data); // {}
            _this.setState({
              dataSource: ctgData,
              loading: false
            });
          } else {
            _this.setState({
              dataSource: null,
              loading: false,
            });
          }
        })
        .catch(function (error) {
          console.log("/ctg-exams-data/docId", error);
          _this.setState({
            dataSource: null,
            loading: false
          });
        });
    }, 600);
  }

  showModal = e => {
    console.log('test target', e.target.id);
    const id = e.target.id;
    if (id === 'print') {
      this.setState({ printVisible: true });
    } else if (id === 'analyze') {
      this.setState({ analyzeVisible: true });
    } else { }
  };

  handleCancel = () => {
    this.setState({
      printVisible: false,
      analyzeVisible: false
    });
  };

  renderTitle = () => {
    const { selected } = this.props;
    const { pregnancy, ctgexam, gestationalWeek } = selected;
    return (
      <div className={styles.title}>
        <span>档案号：</span>
        <span className={styles.value}>{ctgexam.note}</span>
        <span>住院号：</span>
        <span className={styles.value}>{pregnancy.inpatientNO}</span>
        <span>姓名：</span>
        <span className={styles.value}>{pregnancy.name}</span>
        <span>年龄：</span>
        <span className={styles.value}>{pregnancy.age}</span>
        <span>孕周：</span>
        <span className={styles.value}>{gestationalWeek}</span>
        <span>监护日期: </span>
        <span className={styles.value}>
          {ctgexam.startTime &&
            moment(ctgexam.startTime).format("YYYY-MM-DD HH:mm:ss")}
        </span>
      </div>
    );
  }

  render() {
    const {
      docId,
      loading,
      dataSource,
      printVisible,
      analyzeVisible
    } = this.state;
    const { selected } = this.props;
    const disabled = !(selected && selected.id);
    return (
      <div className={styles.wrapper}>
        <div className={styles.ctg}>
          <Spin spinning={loading} tip="加载中..." delay={200}>
            <CTG suitType={2} data={dataSource}></CTG>
          </Spin>
        </div>
        <div className={styles.buttons}>
          <Button id="analyze" disabled={disabled} onClick={this.showModal}>
            分析
          </Button>
          <Button id="print" disabled={disabled} onClick={this.showModal}>
            报告
          </Button>

          {printVisible ? (
            <PrintPreview
              docId={docId}
              visible={printVisible}
              dataSource={dataSource}
              selected={selected}
              title={this.renderTitle()}
              handleCancel={this.handleCancel}
            />
          ) : null}
          {analyzeVisible ? (
            <Analyze
              docId={docId}
              visible={analyzeVisible}
              dataSource={dataSource}
              title={this.renderTitle()}
              handleCancel={this.handleCancel}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
