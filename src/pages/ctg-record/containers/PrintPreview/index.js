import React, { Component } from 'react';
import { Modal } from 'antd';
import 'antd/es/input-number/style/css';
import { Ctg_Report as Report } from "@lianmed/pages";
import moment from 'moment'
import { pdfjs } from "react-pdf";

const pdf_worker_url =
  process.env.NODE_ENV === "development"
    ? "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.1.266/pdf.worker.min.js"
    : "/pdfjs-dist/build/pdf.worker.min.js";
pdfjs.GlobalWorkerOptions.workerSrc = pdf_worker_url;

class PrintPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
      locked: false,
      customizable: false
    };
    this.bodyRef = React.createRef();
  }

  onLockChange = locked => {
    this.setState({ locked });
  }

  onCustomizableChange = customizable => {
    this.setState({ customizable });
  }

  lock = () => {
    this.v.emit("locking", !this.state.locked);
  }

  customize = () => {
    this.v.emit("customizing", !this.state.customizable);
  }

  cb = start => {
    this.setState({ start })
  }

  cbe = end => {
    this.setState({ end })
  }

  onReady = v => {
    this.v = v
    v.on('suit:startTime', this.cb).on('suit:endTime', this.cbe)
  }

  // 获取modal body的高度
  getBodyHeight = () => {
    const { clientHeight, clientWidth } = this.bodyRef.current;
    return {
      height: clientHeight,
      width: clientWidth
    };
  }

  componentWillUnmount() {
    const v = this.v
    v && v.off('suit:startTime', this.cb).off('suit:endTime', this.cb)
  }

  onDownload = () => {
    const filePath = `${window.CONFIG.baseURL}/ctg-exams-pdfurl/${this.props.docId}`
    window.open(filePath)
  }

  getPreviewData = () => {
    const { pregnancy = {}, ctgexam = {} } = this.props.selected
    const starttime = ctgexam.startTime
    const p = pregnancy
    return {
      docid: this.props.docId,
      name: p.name,
      age: p.age,
      gestationalWeek: p.gestationalWeek,
      inpatientNO: p.inpatientNO,
      startdate: moment(starttime).format('YYYY-MM-DD HH:mm:ss'),
      fetalcount: 2,
    }
  }

  render() {
    const { visible, handleOk, handleCancel, title, docId } = this.props;
    return (
      <Modal
        title={title}
        centered
        visible={visible}
        maskClosable={false}
        footer={false}
        onOk={handleOk}
        onCancel={handleCancel}
        width="98%"
        height="98%"
      >
        <Report onDownload={this.onDownload} {...this.getPreviewData()} print_interval={20} />
      </Modal>
    );
  }
}

export default PrintPreview;
