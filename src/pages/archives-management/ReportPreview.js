import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Modal, Menu, Spin, Button, Popconfirm } from 'antd';
import moment from 'moment';

import PreviewContent from "@lianmed/pages/lib/Ctg/Report/PreviewContent";
import { request } from "@lianmed/utils";
import styles from './ReportPreview.less';

export const Context = React.createContext({});

function ReportPreview(props) {
  let arr = [];
  const getV = () => {
    const { report } = props;
    try {
      if (Object.prototype.toString.call(report) === '[object Array]') {
        // Array
        arr = report.sort(compare('time'));
      } else {
        arr = JSON.parse(report);
      }
    } catch (error) {
      console.log('report格式不正确', error);
    }

    // 是否为对象
    // const isObj = Object.prototype.toString.call(reportObj);
    // if (!isObj) {
    //   return null;
    // }
    // for (let key in reportObj) {
    //   const obj = { key, value: reportObj[key] };
    //   arr.push(obj);
    // }
    // arr.sort(compare('value'));
    return arr[0]['bizSn'];
  };

  const [loading, setLoading] = useState(false);
  const [currentReport, setCurrentReport] = useState(getV());
  const [pdfBase64, setPdfBase64] = useState('');
  const inputEl = useRef(null);
  const [wh, setWh] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const { clientHeight, clientWidth } = inputEl.current;
    setWh({ h: clientHeight, w: clientWidth - 186 });
  }, []);

  useEffect(() => {
    fetchpdf(currentReport);
  }, []);

  const fetchpdf = (value) => {
    setLoading(true);
    request
      .get('/ctg-exams-pdf', {
        params: {
          report: value,
        },
      })
      .then(({ pdfdata }) => {
        pdfdata && setPdfBase64(`data:application/pdf;base64,${pdfdata}`);
        setLoading(false);
      }).catch(err => {
        setLoading(false);
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
    id,
  } = props;

  const onDownload = () => {
    console.log(currentReport);
    // const filePath = `/ctg-exams-pdfurl/${currentReport}`;
    // request.get(filePath);
    const filePath = `${window.CONFIG.baseURL}/ctg-exams-pdfurl/${currentReport}`;
    window.open(filePath);
  };

  const confirm = () => {
    // 当前档案id --> currentReport

  }

  const archiving = (e) => {
    // 当前档案id --> currentReport

  }

  function compare(key) {
    return function(value1, value2) {
      const val1 = value1[key];
      const val2 = value2[key];
      const v1 = moment(val1).valueOf();
      const v2 = moment(val2).valueOf();
      return v2 - v1;
    }
  }

  return (
    <Modal
      id={id}
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
          style={{ width: 186 }}
          defaultSelectedKeys={[currentReport]}
          theme="light"
          onClick={handleClick}
        >
          {arr &&
            arr.map(e => {
              return (
                <Menu.Item key={e.bizSn}>
                  <div>{e.bizSn}</div>
                  {/* <div>{e.value}</div> */}
                </Menu.Item>
              );
            })}
        </Menu>
        <div style={{ flex: 1, padding: 12 }}>
          <Spin wrapperClassName={styles.chart} spinning={loading}>
            <PreviewContent pdfBase64={pdfBase64} wh={wh} isFull borderd={false} />
          </Spin>
        </div>
        <div style={{ position: 'absolute', bottom: 12, right: 24, zIndex: 99 }}>
          <Button onClick={archiving}>归档</Button>
          <Popconfirm title="确认删除该报告？" onConfirm={confirm} okText="是" cancelText="否">
            <Button>删除</Button>
          </Popconfirm>
          <Button type="primary" onClick={onDownload}>
            打印
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ReportPreview;
