import React from 'react';
import { Table } from 'antd';

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
      width: 200,
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      key: 'endTime',
      width: 200,
    },
    {
      title: '简述',
      dataIndex: 'desc',
      key: 'desc'
    },
  ];
  return <Table bordered size="small" columns={columns} dataSource={dataSource} />;
}

