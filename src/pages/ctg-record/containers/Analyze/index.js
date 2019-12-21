import React, { Component } from "react";
import { Modal } from "antd";
import 'antd/es/input-number/style/css';
import styles from "./index.module.less";
import { Ctg_Analyse as Analyse } from "@lianmed/pages";
class Analyze extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { visible, handleOk, handleCancel, title, docId } = this.props;
    console.log('ddddd', docId)
    return (
      <Modal
        title={title}
        centered
        visible={visible}
        onOk={handleOk}
        footer={false}
        onCancel={handleCancel}
        width="98%"
        height="95%"
        wrapClassName={styles.modal}
        maskClosable={false}
      >
        <Analyse docid={docId} />
      </Modal>
    );
  }
}

export default Analyze;
