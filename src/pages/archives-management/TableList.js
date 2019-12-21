/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Table, Divider, Button, Popconfirm, Icon, Input, message } from 'antd';
import moment from 'moment';
import Highlighter from 'react-highlight-words';
import request from '../../common/request';
import UpdateRecordModal from './UpdateModal';
import PrintPreview from '../unfinished-record/PrintPreview';
import Analysis from '../unfinished-record/Analyze';

import styles from './TableList.less';

// 默认时间
const ENDTIME = moment().format('YYYY-MM-DD');
const STARTTIME = moment()
  .subtract(7, 'd')
  .format('YYYY-MM-DD');

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      printVisible: false,
      analysisVisible: false,
      type: 'edit',
    };
    this.columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 150,
        ...this.getColumnSearchProps('name'),
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: 68,
        render: (text, record) => record.pregnancy && record.pregnancy.age,
      },
      {
        title: '孕周',
        dataIndex: 'gestationalWeek',
        key: 'gestationalWeek',
        width: 68,
      },
      {
        title: '住院号',
        dataIndex: 'inpatientNO',
        key: 'inpatientNO',
        width: 100,
        render: (text, record) => (
          <div style={{ width: '84px' }} className={styles.textOver}>
            {record.pregnancy && record.pregnancy.inpatientNO}
          </div>
        ),
      },
      {
        title: '床号',
        dataIndex: 'bedNumber',
        key: 'bedNumber',
        width: 100,
        render: (text, record) => record.pregnancy && record.pregnancy.bedNO,
      },
      {
        title: '日期',
        dataIndex: 'visitTime',
        key: 'visitTime',
        width: 150,
        sorter: (a, b) => moment(a.visitTime) - moment(b.visitTime),
        render: text => text && moment(text).format('YYYY-MM-DD HH:mm:ss'),
      },
      {
        title: 'GP',
        dataIndex: 'GP',
        key: 'GP',
        width: 100,
        render: (text, record) => {
          if (record.pregnancy) {
            return `${record.pregnancy.gravidity} / ${record.pregnancy.parity}`;
          }
          return;
        },
      },
      {
        title: '档案号',
        dataIndex: 'comment',
        key: 'comment',
        width: 180,
        align: 'center',
        render: (text, record) => record.ctgexam.note,
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        width: 200,
        render: (text, record) => {
          return (
            <span>
              <a className="primary-link" onClick={e => this.showPrint(e, record)}>
                报告
              </a>
              <Divider type="vertical" />
              <a className="primary-link" onClick={e => this.showAnalysis(e, record)}>
                分析
              </a>
              <Divider type="vertical" />
              <a className="delete-link" onClick={e => this.showModal(e, record)}>
                修改
              </a>
              <Divider type="vertical" />
              <Popconfirm
                title="确认删除该条信息？"
                okText="确定"
                cancelText="取消"
                onConfirm={() => this.deleted(record.id)}
              >
                <a className="delete-link">删除</a>
              </Popconfirm>
            </span>
          );
        },
      },
    ];
  }

  showModal = (e, record) => {
    e.stopPropagation();
    this.setState({
      visible: true,
    });
    this.handleRow(record);
  };

  showPrint = (e, record) => {
    e.stopPropagation();
    this.setState({ printVisible: true });
    this.handleRow(record);
  };

  showAnalysis = (e, record) => {
    e.stopPropagation();
    this.setState({ analysisVisible: true });
    this.handleRow(record);
  };

  handleCancel = key => {
    this.setState({
      [key]: false,
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  // 单机行事件
  handleRow = (record, index) => {
    const { onSelect } = this.props;
    // 当前点击的档案详情
    onSelect(record);
  };

  switchFullscreen = record => {
    const { dispatch, isFullscreen } = this.props;
    dispatch({
      type: 'archives/updateState',
      payload: {
        isFullscreen: !isFullscreen,
      },
    });
    this.handleRow(record);
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder="输入搜索值..."
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          搜索
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          重置
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => {
      let attributeValue = record[dataIndex];
      if (dataIndex === 'name' || dataIndex === 'age' || dataIndex === 'outpatientNO') {
        attributeValue = record['pregnancy'][dataIndex];
      }
      if (attributeValue) {
        return attributeValue
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase());
      }
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text, record) => (
      <div style={{ width: '134px' }} className={styles.textOver}>
        <Highlighter
          className={styles.textOver}
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0, width: '134px' }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={
            record.pregnancy && record.pregnancy.name ? record.pregnancy.name.toString() : ''
          }
        />
      </div>
    ),
  });

  // 帅选条件的搜索事件
  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  // 帅选条件的重置事件
  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  // 分页器onchange
  onChange = (page, pageSize) => {
    const values = this.getValues();
    const { getRecords, getCount, savePagination } = this.props;
    // 以是否有pageSize区分触发区域
    if (pageSize) {
      // console.log('onChange --> params', page, pageSize, values);
      getRecords(values.startTime, values.endTime, pageSize, page - 1);
      getCount(values.startTime, values.endTime);
      savePagination({ size: pageSize, page: page - 1 });
    }
  };

  // 分页器SizeChange
  onShowSizeChange = (current, size) => {
    const values = this.getValues();
    // console.log('TCL: TableList -> onShowSizeChange -> current, size', values, current, size);

    const { getRecords, getCount, savePagination } = this.props;
    getRecords(values.startTime, values.endTime, size, 0);
    getCount(values.startTime, values.endTime);
    // savePagination({ size: pageSize, page: page - 1 });
    savePagination({ size: size, page: 0 });
  };

  // 获取form表单值
  getValues = () => {
    const { getFields } = this.props;
    const values = getFields();
    let { startTime, endTime } = values;
    if (startTime) {
      startTime = moment(startTime).format('YYYY-MM-DD');
    }
    if (endTime) {
      endTime = moment(endTime).format('YYYY-MM-DD');
    }
    const params = {
      startTime,
      endTime
    };
    return params;
  };

  handleCancel = () => {
    this.setState({
      visible: false,
      printVisible: false,
      analysisVisible: false,
    });
  };

  handleUpdate = (values) => {
    request
      .put('/prenatal-visits', {
        ...values,
      })
      .then(res => {
        const data = res.data;
        if (res.status === 200) {
          message.info('修改档案成功！')
        } else {
          message.error('修改档案失败！')
        }
      });
  };

  deleted = (id) => {
    const { getRecords } = this.props;
    request.delete(`/prenatal-visits/${id}`).then(res => {
      if (res.status === 200) {
        message.info('档案删除成功！');
        // 刷新列表
        getRecords();
      } else {
        message.error('档案删除失败！');
      }
    });
  }

  render() {
    const {
      selected,
      dataSource,
      total,
      loading,
      pagination: { size, page },
    } = this.props;
    const { visible, printVisible, analysisVisible, type } = this.state;

    return (
      <div className={styles.tableList}>
        <Table
          bordered
          size="small"
          scroll={{ x: 1250, y: 274 }}
          columns={this.columns}
          dataSource={dataSource}
          onRow={record => {
            // 当存在action时，会触发多个事件
            return {
              onClick: event => this.handleRow(record), // 点击行
              onDoubleClick: event => {},
            };
          }}
          loading={loading}
          rowKey="id"
          rowClassName={record => (record.id === selected.id ? styles.selectedRow : '')}
          rowSelection={{
            // columnWidth: '67px',
            columnTitle: '选中',
            type: 'radio',
            selectedRowKeys: [selected.id],
            onSelect: (record, selected, selectedRows) => this.handleRow(record),
          }}
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            total: total,
            current: page + 1,
            defaultPageSize: 5,
            pageSize: size,
            pageSizeOptions: ['5', '10', '20', '30', '40'],
            showTotal: (total, range) => `共 ${total} 条`,
            onChange: this.onChange,
            onShowSizeChange: this.onShowSizeChange,
          }}
        />
        {printVisible ? (
          <PrintPreview
            title="打印预览"
            visible={printVisible}
            selected={selected}
            handleCancel={this.handleCancel}
            onCreate={this.handleCreate}
            docId={selected.ctgexam && selected.ctgexam.note}
            startTime={selected.ctgexam && selected.ctgexam.startTime}
            inpatientNO={selected.pregnancy && selected.pregnancy.inpatientNO}
            name={selected.pregnancy && selected.pregnancy.name}
            age={selected.pregnancy && selected.pregnancy.age}
            gestationalWeek={selected && selected.gestationalWeek}
          />
        ) : null}
        {analysisVisible ? (
          <Analysis
            title="分析报告"
            visible={analysisVisible}
            selected={selected}
            handleCancel={this.handleCancel}
            onCreate={this.handleCreate}
            docId={selected.ctgexam && selected.ctgexam.note}
            startTime={selected.ctgexam && selected.ctgexam.startTime}
            inpatientNO={selected.pregnancy && selected.pregnancy.inpatientNO}
            name={selected.pregnancy && selected.pregnancy.name}
            age={selected.pregnancy && selected.pregnancy.age}
            gestationalWeek={selected && selected.gestationalWeek}
          />
        ) : null}
        {visible ? (
          <UpdateRecordModal
            type={type}
            visible={visible}
            onCancel={this.handleCancel}
            onOk={this.handleUpdate}
            dataSource={selected}
          />
        ) : null}
      </div>
    );
  }
}

export default TableList;
