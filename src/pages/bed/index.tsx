import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, Popconfirm, Form, Button, Select, message } from 'antd';
import request from "@lianmed/request";
import { WrappedFormUtils } from "antd/lib/form/Form";
import useLogin from "./useLogin";

const mapStatusToText = {
    1: '工作中',
    2: '停止',
    3: '离线',
};

const EditableContext = React.createContext<WrappedFormUtils>(null);

class EditableCell extends React.Component<any, any> {
    getInput = () => {
        if (this.props.inputType === 'number') {
            return (
                <Select>
                    {
                        Object.entries(mapStatusToText).map(_ => {
                            return (
                                <Select.Option value={_[0]} key={_[0]}>
                                    {_[1]}
                                </Select.Option >
                            )
                        })
                    }
                </Select>
            )
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
                                    required: true,
                                    message: `Please Input ${title}!`,
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
    const [editingKey, setEditingKey] = useState('')

    const fetchData = () => {
        request.get(`/bedinfos`).then(d => setDd(d))
    }
    useLogin(fetchData)

    const columns = [
        ...[
            {
                title: '名称',
                dataIndex: 'bedname',
                key: 'bedname',
                width: 100
            },
            {
                title: '设备编号',
                dataIndex: 'deviceno',
                key: 'deviceno',
                width: 100
            },
            {
                title: '子机号',
                dataIndex: 'subdevice',
                key: 'subdevice',
                width: 100
            },
            {
                title: '床号',
                dataIndex: 'bedno',
                key: 'bedno',
                width: 100
            },
            {
                title: '病区号',
                dataIndex: 'areano',
                key: 'areano',
                width: 100
            },
            {
                title: '病区名',
                dataIndex: 'areaname',
                key: 'areaname',
                width: 100
            },
            // {
            //     title: '状态',
            //     dataIndex: 'status',
            //     key: 'status',
            //     render: (text, record) => {
            //         return mapStatusToText[text];
            //     },
            // },
            // {
            //     title: '设备类型',
            //     dataIndex: 'type',
            //     key: 'type',
            //     align: 'center',
            // },
        ].map(_ => ({ ..._, editable: true, align: 'center' })),
        {
            title: '操作',
            dataIndex: 'operation',
            width: 200,
            render: (text, record) => {
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
                            onClick={() => setEditingKey(record.id)}
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
    ]

    const isEditing = record => {
        const status = record.id === editingKey;
        return status
    }

    const cancel = () => {
        setEditingKey('')
    };

    const save = (form, id) => {
        form.validateFields((error, row) => {
            if (error) {
                return;
            }
            const newData = [...dd];
            const index = newData.findIndex(item => id === item.id);
            if (index > -1) {

                request.put('/bedinfos', {
                    data: {
                        ...newData[index],
                        ...row,
                    }
                }).then(data => {
                    fetchData()
                    setEditingKey('')
                })

            } else {
                newData.push(row);
                setEditingKey('')
                setDd(newData)
            }
        });
    }

    const deleted = record => {
      const { id, areaname,bedname } = record;
        console.log('55555555555555', record)
        request.delete(`/bedinfos/${id}`,)
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
        return {
            ...col,
            onCell: record => ({
                record,
                inputType: col.dataIndex === 'status' ? 'number' : 'text',
                disabled: ['deviceno', 'subdevice', 'bedno'].includes(col.dataIndex) ? true :false,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <EditableContext.Provider value={props.form}>
            <div style={{ padding: 20 }}>
                <p style={{ fontWeight: 600, lineHeight: '40px', marginBottom: '20px', fontSize: 16 }}>床位管理</p>
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
