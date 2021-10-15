/**
 * 先获取病区详情，以便显示病区名称
 */


import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Input, message, Popconfirm, Select, Table } from 'antd';
import { WrappedFormUtils } from "antd/lib/form/Form";
import { stringify } from 'qs';
import React, { Fragment, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { request } from "../../common/request";
import SearchForm from './SearchForm';
import styles from './index.less';

const mapStatusToText = {
  1: '工作中',
  2: '停止',
  3: '离线',
};
// request.config({
//   Authorization: auth.get(),
//   // prefix: window.CONFIG.baseURL,
//   prefix: `${URL}/api`,
// });

const EditableContext = React.createContext<WrappedFormUtils>(null);

class EditableCell extends React.Component<any, any> {
  getInput = () => {
    const { inputType, options } = this.props;
    if (inputType === 'number') {
      return (
        <Select disabled={this.props.disabled}>
          {Object.entries(mapStatusToText).map(_ => {
            return (
              <Select.Option value={_[0]} key={_[0]}>
                {_[1]}
              </Select.Option>
            );
          })}
        </Select>
      );
    }
    if (inputType === 'select') {
      return (
        <Select disabled={this.props.disabled} style={{ width: '100%' }}>
          {options.map(_ => {
            return (
              <Select.Option value={_.wardId} key={_.wardId}>
                {_.wardName}
              </Select.Option>
            );
          })}
        </Select>
      );
    }
    return <Input disabled={this.props.disabled} />;
  };

  renderCell = ({ getFieldDecorator }) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      required,
      disabled,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{ margin: 0 }}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: !disabled,
                  message: `请输入${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
            children
          )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}

const EditableTable = (props: any) => {
  const [dd, setDd] = useState(null)
  const [editingKey, setEditingKey] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    // 获取病区详细列表
    fetchOptions();
    fetchData();
  }, []);

  const fetchOptions = () => {
    request.get('/wards').then(d => setOptions(d));
  };

  const fetchData = (data = {}) => {
    const params = stringify({ sort: 'deviceno,asc', ...data });
    request.get(`/bedinfos/?${params}`).then(d => setDd(d))
  }

  const columns = [
    ...[
      {
        title: '名称',
        dataIndex: 'bedname',
        key: 'bedname',
        width: 100,
      },
      {
        title: '设备编号',
        dataIndex: 'deviceno',
        key: 'deviceno',
        width: 100,
      },
      {
        title: '子机号',
        dataIndex: 'subdevice',
        key: 'subdevice',
        width: 100,
      },
      {
        title: 'ERP',
        dataIndex: 'erp',
        key: 'erp',
        width: 100,
      },
      {
        title: '病区',
        dataIndex: 'areano',
        key: 'areano',
        width: 100,
        render: (text: string, record: object) => {
          if (!text) {
            return null;
          }
          let t = '';
          const current = options.filter(e => e.wardId === text);
          if (current && current[0] && current[0]['wardName']) {
            t = current[0]['wardName'];
          }
          return t;
        },
      },
      // {
      //     title: '病区名',
      //     dataIndex: 'areaname',
      //     key: 'areaname',
      //     width: 100
      // },
      // {
      //     title: '状态',
      //     dataIndex: 'status',
      //     key: 'status',
      //     width: 100,
      //     render: (text, record) => {
      //         return mapStatusToText[text];
      //     },
      // },
      // {
      //     title: '设备类型',
      //     dataIndex: 'type',
      //     key: 'type',
      //     align: 'center',
      //     width: 100
      // },
      {
        title: '外借病区',
        dataIndex: 'outWard',
        key: 'outWard',
        align: 'center',
        width: 100,
        render: text => {
          if (!text) {
            return null;
          }
          let t = '';
          const current = options.filter(e => e.wardId === text);
          if (current && current[0] && current[0]['wardName']) {
            t = current[0]['wardName'];
          }
          return t;
        },
      },
    ].map(_ => ({ ..._, editable: true, align: 'center' })),
    {
      title: '操作',
      dataIndex: 'operation',
      width: 200,
      render: (text, record, index) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <EditableContext.Consumer>
              {form => (
                <Button
                  size="small"
                  type="link"
                  onClick={() => save(form, record.id)}
                  style={{ marginRight: 8 }}
                >
                  保存
                </Button>
              )}
            </EditableContext.Consumer>
            <Popconfirm title="确认取消?" okText="确认" cancelText="取消" onConfirm={cancel}>
              <Button size="small" type="link">
                取消
                </Button>
            </Popconfirm>
          </span>
        ) : (
            <Fragment>
              <Button
                size="small"
                type="link"
                disabled={editingKey !== ''}
                onClick={() => {
                  setEditingKey(record.id);

                }}
              >
                编辑
              </Button>

              <Popconfirm
                title="确认取消?"
                okText="确认"
                cancelText="取消"
                onConfirm={() => deleted(record)}
              >
                <Button size="small" type="link">
                  删除
                </Button>
              </Popconfirm>
            </Fragment>
          );
      },
    },
  ];

  const isEditing = record => {
    const status = record.id === editingKey;
    return status
  }

  const cancel = () => {
    setEditingKey('')
  };

  const onSearch = (values) => {
    const val = {
      'deviceno.equals': values.deviceno ? values.deviceno : undefined,
      'areano.equals': values.areano,
      'erp.equals': values.erp
    }
    fetchData(val);
  }

  const save = (form: any, id: string) => {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...dd];
      const index = newData.findIndex(item => item.id === id);
      // 更新病区名
      const areaNO = row['areano'];
      const currentWard = options.filter(item => item.wardId === areaNO)[0];

      // check 50
      // const bedsInThisArea = newData.filter(_ => _.areano === areaNO)
      // if (bedsInThisArea.length >= 50) {

      //   return message.info(`这个病区已经绑定超过50个设备`)

      // }
      // check 50

      // console.log('object', options, areaNO, currentWard);
      if (index > -1) {
        request
          .put('/bedinfos', {
            data: {
              ...newData[index],
              ...row,
              areaname: currentWard.wardName,
            },
          })
          .then(data => {
            fetchData();
            setEditingKey('');
          });

      } else {
        newData.push(row);
        setEditingKey('')
        setDd(newData)
      }
    });
  }

  const deleted = record => {
    const { id, areaname, bedname } = record;
    request.delete(`/bedinfos/${id}`)
      .then(data => {
        fetchData()
        setEditingKey('')
        message.info(`成功删除${areaname}病区d的${bedname}设备`)
      })
  };

  const components = {
    body: {
      cell: EditableCell,
    },
  };

  const c = columns.map(col => {
    if (!(col as any).editable) {
      return col;
    }
    let inputType = 'text';
    if (col.dataIndex === 'status') {
      inputType = 'number';
    }
    if (col.dataIndex === 'areano' || col.dataIndex === 'outWard') {
      inputType = 'select';
    }
    return {
      ...col,
      onCell: record => ({
        record,
        inputType: inputType,
        disabled: ['deviceno', 'subdevice', 'bedno', 'outWard', 'erp'].includes(col.dataIndex) ? true : false,
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
        options: options
      }),
    };
  });
  return (
    <EditableContext.Provider value={props.form}>
      <div className={styles.container}>
        <p style={{ fontWeight: 600, lineHeight: '40px', marginBottom: '20px', fontSize: 16 }}>
          床位管理
          </p>
        <SearchForm onSearch={onSearch} />
        <Table
          size="small"
          components={components}
          bordered
          rowKey="id"
          dataSource={dd}
          columns={c as any}
          // rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </div>
    </EditableContext.Provider>
  );
}

const EditableFormTable = Form.create()(EditableTable);

ReactDOM.render(<EditableFormTable />, document.getElementById('root'));
