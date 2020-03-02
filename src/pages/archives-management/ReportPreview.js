import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { Modal, Menu, Spin, Button, Popconfirm } from 'antd';
import moment from 'moment';

import PreviewContent from "@lianmed/pages/lib/Ctg/Report/Panel/PreviewContent";
import { request } from "@lianmed/utils";
import styles from './ReportPreview.less';

export const Context = React.createContext({});

function ReportPreview(props) {
  const getV = () => {
    let newArr = [];
    const { report } = props;
    try {
      if (Object.prototype.toString.call(report) === '[object Array]') {
        // Array
        newArr = report;
        if (report[0]['time']) {
          newArr = report.sort(compare('time'));
        }
      } else {
        newArr = JSON.parse(report);
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
    return newArr[0];
  };

  const [arr, setArr] = useState([]);
  const [loading, setLoading] = useState(false);
  // 归档loading
  const [archiveLoading, setArchiveLoading] = useState(false);
  // 删除loading
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [currentReport, setCurrentReport] = useState(getV());
  const [pdfBase64, setPdfBase64] = useState('');
  const inputEl = useRef(null);
  const [wh, setWh] = useState({ w: 0, h: 0 });
  useLayoutEffect(() => {
    const { clientHeight, clientWidth } = inputEl.current;
    setWh({ h: clientHeight, w: clientWidth - 186 });
  }, []);

  useEffect(() => {
    setArr(props.report);
    const reportId = currentReport.bizSn;
    fetchpdf(reportId);
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

  const handleClick = (e) => {
    const key = e.key;
    const value = e.item.props.value;
    setCurrentReport(value);
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
    // console.log(currentReport);
    const reportId = currentReport.bizSn;
    // const filePath = `/ctg-exams-pdfurl/${reportId}`;
    // request.get(filePath);
    const filePath = `${window.CONFIG.baseURL}/ctg-exams-pdfurl/${reportId}`;
    window.open(filePath);
  };

  const onDelect = bizSn => {
    // 删除报告
    // 当前档案id --> currentReport.bizSn
    setDeleteLoading(true);
    request
      .delete(`/obsolete-report/${bizSn}`)
      .then((res) => {
        const newArr = res.report;
        setArr(newArr);
        const currentReport = newArr.length ? newArr[0] : {};
        setCurrentReport(currentReport);
        if (!newArr.length) {
          setPdfBase64(null);
        }

        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  const doArchiving = bizSn => {
    setArchiveLoading(true);
    // 归档
    // 当前档案id --> currentReport.bizSn
    request
      .put('/doc/archive', {
        data: { bizSn },
      })
      .then(res => {
        const newArr = res.report;
        setArr(newArr);
        const currentReport = newArr.filter(e => e.bizSn === bizSn)[0];
        setCurrentReport(currentReport);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  const undoArchiving = bizSn => {
    setArchiveLoading(true);
    // 撤销归档
    request
      .put('/doc/undo-archive', {
        data: { bizSn },
      })
      .then(res => {
        const newArr = res.report;
        setArr(newArr);
        const currentReport = newArr.filter(e => e.bizSn === bizSn)[0];
        setCurrentReport(currentReport);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  function compare(key) {
    return function(value1, value2) {
      const val1 = value1[key];
      const val2 = value2[key];
      const v1 = moment(val1).valueOf();
      const v2 = moment(val2).valueOf();
      return v2 - v1;
    }
  }

  console.log('8888888', currentReport)
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
          defaultSelectedKeys={[currentReport.bizSn]}
          theme="light"
          onClick={handleClick}
        >
          {arr &&
            arr.map(e => {
              const { valid, /* archived, */ bizSn } = e;
              if (!valid) {
                // 无效报告不显示
                return null;
              }
              return (
                <Menu.Item key={bizSn} value={e}>
                  <div>{bizSn}</div>
                  {/* <div>{moment(time).format('YYYY-MM-DD HH:mm:ss')}</div> */}
                </Menu.Item>
              );
            })}
        </Menu>
        <div style={{ flex: 1, padding: '12px 0' }}>
          <Spin wrapperClassName={styles.chart} spinning={loading}>
            <PreviewContent pdfBase64={pdfBase64} wh={wh} isFull borderd={false} />
          </Spin>
        </div>
        <div style={{ position: 'absolute', bottom: 8, right: 24, zIndex: 99 }}>
          {currentReport.archived ? (
            <Button onClick={() => undoArchiving(currentReport.bizSn)}>撤销归档</Button>
          ) : (
            <Button type="primary" onClick={() => doArchiving(currentReport.bizSn)}>
              归档
            </Button>
          )}
          <Popconfirm
            title={`确认删除档案号为${currentReport.bizSn}的报告吗？`}
            placement="topRight"
            onConfirm={() => onDelect(currentReport.bizSn)}
            okText="是"
            cancelText="否"
          >
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
