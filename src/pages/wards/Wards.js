/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Table, Card, Button, Divider, Tooltip, Popconfirm, message, Badge } from 'antd';
import { request } from '../../common/request';

import WardModal from './WardModal';
import { auth, URL } from '../../common/utils';

// request.config({
//   Authorization: auth.get(),
//   // prefix: window.CONFIG.baseURL,
//   prefix: `${URL}/api`,
// });

class Wards extends Component {
  constructor(params) {
    super(params);
    this.state = {
      dataSource: [],
      bedinfos: [],
      visible: false,
      selected: {},
      loading: false,
    };
  }

  componentDidMount() {
    this.fetcBeds();
    this.fetchWards();
  }

  showEditWard = record => {
    this.setState(
      {
        visible: true,
        selected: record,
      },
      () => {
        const { wardId, wardName, wardNamezh, wardType, note, auto } = record;

        this.formRef.props.form.setFieldsValue({
          wardId: wardId,
          wardName: wardName,
          wardNamezh: wardNamezh,
          wardType: wardType,
          auto: auto,
          note: note ? note.split(',') : [],
        });
      },
    );
  };

  showNewWard = () => {
    this.setState({ visible: true, selected: {} });
  };

  onCancel = () => {
    this.setState({ visible: false, loading: false });
  };

  deleteWard = record => {
    request
      .delete(`/wards/${record.id}`)
      .then(res => {
        message.success(`病区${record.wardName}删除成功！`);
        this.fetchWards();
      })
      .catch(err => {
        message.error(`病区${record.wardName}删除失败，可能有用户已经绑定该病区。如需删除请先确保该病区无用户绑定。`);
      });
  };

  fetchWards = () => {
    request.get('/wards').then(res => {
      this.setState({ dataSource: res });
    });
  };

  fetcBeds = () => {
    request.get('/bedinfos').then(res => {
      this.setState({ bedinfos: res });
    });
  };

  newWard = () => {
    this.setState({ loading: true });
    this.formRef.props.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      const { note, ...filterValues } = values;
      request
        .post('/wards', {
          data: filterValues,
        })
        .then(res => {
          this.setState({ loading: false, visible: false });
          message.success(`新增病区${res.wardName}成功！`);

          this.fetchWards();
        })
        .catch(error => {
          message.error(`新增病区失败，请稍后再试。`);
          this.setState({ loading: false });
        });
    });
  };

  editWard = () => {
    const { selected } = this.state;
    this.formRef.props.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.setState({ loading: true });
      const { note, ...filterValues } = values;
      const newValues = { ...selected, ...filterValues };
      request
        .put('/wards', {
          data: newValues,
        })
        .then(res => {
          this.setState({ loading: false, visible: false });
          message.success('修改病区成功！');

          this.fetchWards();
        })
        .catch(error => {
          message.error(`修改病区失败，请稍后再试。`);
          this.setState({ loading: false });
        });
    });
  };

  // 绑定的设备对应名称
  noToName = (value)=> {
    const beds = this.state.bedinfos;
    let noArr = [];
    let nameArr = [];
    if (!value && beds.length > 0) {
      return;
    }

    noArr = value.split(',');
    for (let i = 0; i < noArr.length; i++) {
      const no = noArr[i];
      const element = beds.filter(e => e.deviceno === no)[0];
      if (element && element.bedname) {
        nameArr.push(element.bedname);
      }
    }
    return nameArr.join(',')
  }

  render() {
    const { dataSource, visible, selected, loading } = this.state;
    const columns = [
      {
        title: '病区编号',
        dataIndex: 'wardId',
        key: 'wardId',
        width: 100,
      },
      {
        title: '病区名称',
        dataIndex: 'wardName',
        key: 'wardName',
        width: 100,
      },
      {
        title: '病区类型',
        dataIndex: 'wardType',
        key: 'wardType',
        width: 100,
        render: text => {
          let t = '住院';
          if (text === 'out') {
            t = '门诊';
          }
          return t;
        },
      },
      {
        title: '自动监护',
        dataIndex: 'auto',
        key: 'auto',
        width: 100,
        render: text => (!!text ? <Badge status="success" /> : <Badge status="default" />),
      },
      {
        title: '绑定设备',
        dataIndex: 'note',
        key: 'note',
        width: 200,
        render: text => {
          const tt = this.noToName(text);
          return (
            <Tooltip title={tt}>
              <div
                style={{
                  display: 'inline-block',
                  width: '200px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  wordBreak: 'break-all',
                }}
              >
                {tt}
              </div>
            </Tooltip>
          );
        },
      },
      {
        title: '操作',
        key: 'action',
        width: 100,
        render: (text, record) => (
          <span>
            <a onClick={() => this.showEditWard(record)}>编辑</a>
            <Divider type="vertical" />
            <Popconfirm
              okText="确定"
              cancelText="取消"
              title="是否要删除此行？"
              onConfirm={() => this.deleteWard(record)}
            >
              <a style={{ color: '#999' }}>删除</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
    return (
      <Card
        title="病区管理"
        size="small"
        extra={
          <Button
            type="primary"
            icon={<LegacyIcon type="plus" />}
            size="small"
            loading={false}
            onClick={this.showNewWard}
          >
            新增
          </Button>
        }
        style={{ width: '100%', height: '100%' }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          size="small"
          loading={loading}
          rowKey="id"
        />
        <WardModal
          wrappedComponentRef={form => (this.formRef = form)}
          visible={visible}
          title={selected.id ? '编辑病区' : '新建病区'}
          loading={loading}
          onOk={selected.id ? this.editWard : this.newWard}
          onCancel={this.onCancel}
        />
      </Card>
    );
  }
}

export default Wards;
