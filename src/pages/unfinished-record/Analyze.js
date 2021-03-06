import React, { Component } from 'react';
import { Modal } from 'antd';
import { URL } from '../../common/utils';
import 'antd/es/input-number/style/css';

import { Ctg_Analyse as Analyse } from '@lianmed/pages';
class Analyze extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { visible, handleOk, handleCancel, title, docId } = this.props;
    return (
      <Modal
        title={title}
        maskClosable={false}
        centered
        visible={visible}
        onOk={handleOk}
        footer={false}
        onCancel={() => handleCancel('analysisVisible')}
        width="98%"
        height="98%"
      >
        <Analyse docid={docId} onDownload={(url) => {
          const filePath = `${URL}/api/${url}`;
          window.open(filePath);
        }} />
      </Modal>
    );
  }
}

export default Analyze;
