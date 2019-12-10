import React, { Component } from 'react';
import { Button, Spin, Modal, notification } from 'antd';
import { Ctg as CTG } from '@lianmed/lmg';
import request from '../../common/request';
import { transformsCTG } from '../../common/utils';
import styles from './Content.module.less';
import PrintPreview from './PrintPreview';
import Analyze from './Analyze';

const init = {
  fhr: [[], [], []],
  toco: [],
  fm: [],
  fetal_num: 2,
  index: 0,
  starttime: '',
};

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      dataSource: null,
      printVisible: false,
      analyzeVisible: false,
      docId: '',
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // console.log("content props -->", nextProps.selected);
    const docId = nextProps.selected.ctgexam && nextProps.selected.ctgexam.note;
    if (nextProps.selected.id !== this.props.selected.id) {
      this.setState({ docId });
      this.fetch(docId);
    }
  }

  fetch = docId => {
    // 获取ctg data详细数据
    const _this = this;
    _this.setState({ loading: true });
    setTimeout(() => {
      request
        .get(`/ctg-exams-data/${docId}`)
        .then(function(response) {
          const data = response.data;
          // if (data && data.errorKey) {
          //   console.log('/prenatal-visits error', response.response);
          //   let message = '';
          //   if (data.errorKey === 'encypterror') {
          //     message = '解密错误';
          //   }
          //   if (data.errorKey === 'PatIderror') {
          //     message = '住院号不存在';
          //   }
          //   if (data.errorKey === 'signerror') {
          //     message = '校验和错误';
          //   }
          //   notification.info({
          //     message: '错误提示',
          //     description: message,
          //   });
          //   return;
          // }
          if (!data.docid) {
            notification.info({
              message: '错误提示',
              description: `不存在档案号为${docId}的数据！`,
            });
            _this.setState({ loading: false });
          }
          if (data && data.docid) {
            const ctgData = transformsCTG(data.docid, response.data); // {}
            _this.setState({
              dataSource: ctgData,
              loading: false,
            });
          }
        })
        .catch(function(error) {
          console.log('/ctg-exams-data/docId', error);
          _this.setState({
            dataSource: init,
            loading: false,
          });
        });
    }, 1000);
  };

  showModal = e => {
    // console.log('test target', e.target.id);
    const id = e.target.id;
    if (id === 'print') {
      this.setState({ printVisible: true });
    } else if (id === 'analyze') {
      this.setState({ analyzeVisible: true });
    } else {
    }
  };

  handleCancel = () => {
    this.setState({
      printVisible: false,
      analyzeVisible: false,
    });
  };

  remove = () => {
    const _this = this;
    const { selected, fetch, clearSelect } = this.props;
    const docid = selected.ctgexam.note;;
    Modal.confirm({
      centered: true,
      title: '警告！',
      content: '确认放弃该监护档案吗',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        request
          .get(`/ctg-exams-nosaving/${docid}`)
          .then(() => {
            fetch();
            // clearSelect();
            _this.setState({ dataSource: init });
          });
      },
    });
  };

  render() {
    const { docId, loading, dataSource, printVisible, analyzeVisible } = this.state;
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
          <Button id="remove" disabled={disabled} onClick={this.remove}>
            放弃
          </Button>
          {/* <Button id="analyze" disabled={disabled} onClick={this.showModal}>
            分析
          </Button> */}
          <Button id="print" disabled={disabled} onClick={this.showModal}>
            报告
          </Button>
        </div>
        {printVisible ? (
          <PrintPreview
            title="报告"
            docId={docId}
            visible={printVisible}
            dataSource={dataSource}
            selected={this.props.selected}
            // title={this.renderTitle()}
            handleCancel={this.handleCancel}
          />
        ) : null}
        {analyzeVisible ? (
          <Analyze
            docId={docId}
            visible={analyzeVisible}
            dataSource={dataSource}
            // title={this.renderTitle()}
            handleCancel={this.handleCancel}
          />
        ) : null}
      </div>
    );
  }
}

export default Content;
