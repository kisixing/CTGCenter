/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Description: 诊断模板
 * @Author: Zhong Jun
 * @Date: 2020-02-12 09:52:09
 */

import React, { useState, useEffect } from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Card, Table, Divider, Popconfirm, Button, message } from 'antd';
import  request  from '@lianmed/request';
import { auth, URL } from '../../common/utils';
import DiagnosticTemplateModal from './DiagnosticTemplateModal';

// request.config({
//   Authorization: auth.get(),
//   // prefix: window.CONFIG.baseURL,
//   prefix: `${URL}/api`,
// });

export default function DiagnosticTemplate() {
  let formRef = null;
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({});

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 68,
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      width: 100,
    },
    {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
      width: 300,
    },
    {
      title: '操作',
      key: 'action',
      width: 100,
      align: 'center',
      render: (text, record) => (
        <span>
          <Button type="link" onClick={() => showModal(record)}>
            编辑
          </Button>
          <Divider type="vertical" />
          <Popconfirm
            okText="确定"
            cancelText="取消"
            title="是否要删除该模板？"
            onConfirm={() => deleted(record)}
          >
            <Button type="link" ghost style={{ color: '#888' }}>
              删除
            </Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 600);
    getAllTemplate();
  }, []);

  // 获取全部模板
  const getAllTemplate = () => {
    request.get('/diagnosis-tpls').then(res => {
      setDataSource(res);
    });
  };

  const showModal = selected => {
    const _formRef = formRef;
    if (selected) {
      setSelected(selected);
      setTimeout(() => {
        _formRef.props.form.setFieldsValue({
          title: selected.title,
          content: selected.content,
        });
      }, 300);
    }
    setVisible(true);
  }

  const onCancel = () => {
    setVisible(false);
  }

  const edit = () => {
    formRef.props.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      request
        .put('/diagnosis-tpls', {
          data: { id: selected.id, ...values },
        })
        .then(res => {
          message.success('保存成功！');
          getAllTemplate();
          onCancel();
        });
    })
  }

  const add = () => {
    formRef.props.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      request.post('/diagnosis-tpls', {
        data: { ...values }
      }).then(res => {
        message.success('保存成功！');
        getAllTemplate();
        onCancel();
      });
    });
  }

  const deleted = record => {
    const id = record.id;
    request
      .delete(`/diagnosis-tpls/${id}`)
      .then(res => {
        message.success(`删除${record.title}成功`);
        getAllTemplate();
      });
  }

  return (
    <div style={{ padding: '12px' }}>
      <p style={{ fontWeight: 600 }}>模板管理</p>
      <Card
        title="诊断模板"
        size="small"
        extra={
          <Button
            type="primary"
            icon={<LegacyIcon type="plus" />}
            size="small"
            loading={false}
            onClick={() => showModal()}
          >
            新增诊断模板
          </Button>
        }
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          size="small"
          loading={loading}
          rowKey="id"
        />
        <DiagnosticTemplateModal
          wrappedComponentRef={form => (formRef = form)}
          visible={visible}
          title={selected.id ? '编辑诊断模板' : '新建诊断模板'}
          loading={loading}
          onOk={selected.id ? edit : add}
          onCancel={onCancel}
        />
      </Card>
    </div>
  );
}
