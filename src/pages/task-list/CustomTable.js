/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Table, Divider, Popconfirm } from 'antd';
import moment from 'moment';

export default function CustomTable({
  dataSource = [],
  edit,
  schedule,
  unschedule,
  deleted,
}) {
  const columns = [
    {
      title: '任务名称',
      dataIndex: 'name',
      key: 120,
    },
    {
      title: '任务描述',
      dataIndex: 'description',
      key: 'description',
      width: 150,
    },
    {
      title: '任务对象',
      dataIndex: 'targetObject',
      key: 'targetObject',
      width: 100,
    },
    {
      title: '任务方法',
      dataIndex: 'targetMethod',
      key: 'targetMethod',
      width: 100,
    },
    {
      title: '触发器类型',
      dataIndex: 'triggerType',
      key: 'triggerType',
      width: 100,
      render: value => {
        if (value === 'DELAY') {
          return '定点执行';
        } else if (value === 'REGULAR') {
          return '周期执行';
        } else {
          return '立即执行';
        }
      },
    },
    {
      title: '执行周期',
      dataIndex: 'cronExpression',
      key: 'cronExpression',
      width: 100,
    },
    {
      title: '执行时间',
      dataIndex: 'fireTime',
      key: 'fireTime',
      width: 150,
    },
    {
      title: '任务状态',
      dataIndex: 'enable',
      key: 'enable',
      width: 100,
      render: (status, record) => {
        if (status) {
          return <span style={{ color: 'green' }}>已调度</span>;
        } else {
          return <span style={{ color: 'gray' }}>未调度</span>;
        }
      },
    },
    {
      title: '操作',
      dataIndex: 'id',
      key: 'id',
      render: (id, record) => {
        var toggleAction = '';
        if (record.enable) {
          toggleAction = <a onClick={() => unschedule(id)}>停止调度</a>;
        } else {
          toggleAction = <a onClick={() => schedule(id)}>调度</a>;
        }
        return (
          <span>
            {toggleAction}
            <Divider type="vertical" />
            <a onClick={() => edit(record)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="确认删除？" okText="确定" cancelText="取消" onConfirm={() => deleted(id)}>
              <a>删除</a>
            </Popconfirm>
          </span>
        );
      },
    },
  ];
  return <Table bordered rowKey="id" size="small" columns={columns} dataSource={dataSource} />;
}
