import React from 'react';
import { Table } from 'antd';
import moment from 'moment';

export default function CustomTable({ dataSource = [] }) {
  const columns = [
    {
      title: '任务名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 150,
      render: value => {
        var date = new Date(value);
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime',
      width: 150,
      render: value => {
        var date = new Date(value);
        return moment(date).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    {
      title: '持续时长(ms)',
      dataIndex: 'duration',
      key: 'duration',
      width: 150,
    },
    {
      title: '执行结果',
      dataIndex: 'state',
      key: 'state',
      width: 150,
    },
    {
      title: '异常详情',
      dataIndex: 'exceptionBrief',
      key: 'exceptionBrief',
    },
  ];
  return <Table bordered size="small" columns={columns} dataSource={dataSource} />;
}


