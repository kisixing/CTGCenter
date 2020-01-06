import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Modal, Menu } from 'antd';
import moment from 'moment';

import PreviewContent from "@lianmed/pages/lib/Ctg/Report/PreviewContent";
import { request } from "@lianmed/utils";
import styles from './ReportPreview.less';

export const Context = React.createContext({});

function ReportPreview(props) {
  let arr = [];
  const getV = () => {
    const { report = '' } = props;
    let reportObj = {};
    try {
      reportObj = JSON.parse(report);
    } catch (error) {
      console.log('report格式不正确', error);
    }

    // 是否为对象
    const isObj = Object.prototype.toString.call(reportObj);
    if (!isObj) {
      return null;
    }
    for (let key in reportObj) {
      const obj = { key, value: reportObj[key] };
      arr.push(obj);
    }
    return arr[0]['key'];
  };

  const [currentReport, setCurrentReport] = useState(getV());
  const [pdfBase64, setPdfBase64] = useState('');
  const inputEl = useRef(null);
  const [wh, setWh] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const { clientHeight, clientWidth } = inputEl.current;
    setWh({ h: clientHeight, w: clientWidth });
  }, []);

  useEffect(() => {
    fetchpdf(currentReport);
  }, []);

  const fetchpdf = (value) => {
    request
      .get('/ctg-exams-pdf', {
        params: {
          report: value,
        },
      })
      .then(({ pdfdata }) => {
        pdfdata && setPdfBase64(`data:application/pdf;base64,${pdfdata}`);
      });
  };

  const handleClick = ({ key }) => {
    setCurrentReport(key);
    fetchpdf(key);
  };

  const S = props => (
    <span style={{ marginRight: 6 }} {...props}>
      {props.children}
    </span>
  );

  const {
    visible,
    onCancel,
    docid = '',
    name = '',
    age = 0,
    startTime = '',
    inpatientNO = '',
    gestationalWeek = '',
  } = props;

  return (
    <Modal
      maskClosable={false}
      getContainer={false}
      destroyOnClose
      centered
      height="95%"
      width="96%"
      footer={null}
      visible={visible}
      title={
        <div>
          <S>档案号：{docid}</S>
          <S>住院号：{inpatientNO}</S>
          <S>姓名：{name}</S>
          <S>年龄：{age}</S>
          <S>孕周： {gestationalWeek}</S>
          <S>监护日期：{startTime && moment(startTime).format('YYYY-MM-DD HH:mm:ss')}</S>
        </div>
      }
      onCancel={onCancel}
    >
      <div className={styles.modal_content} ref={inputEl}>
        <Menu
          style={{ width: 176 }}
          defaultSelectedKeys={[currentReport]}
          theme="light"
          onClick={handleClick}
        >
          {arr &&
            arr.map(e => {
              return (
                <Menu.Item key={e.key}>
                  <div>{e.key}</div>
                  <div>{e.value}</div>
                </Menu.Item>
              );
            })}
        </Menu>
        <div style={{ flex: 1 }}>
          <PreviewContent pdfBase64={pdfBase64} wh={wh} isFull borderd={false} />
        </div>
      </div>
    </Modal>
  );
}

export default ReportPreview;
