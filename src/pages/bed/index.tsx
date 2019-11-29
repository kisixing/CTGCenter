import ReactDOM from 'react-dom';
// import App from './ControlCenter';
import React, { useState, useEffect } from 'react'

import { Table, Input, Popconfirm, Form, Button, Select } from 'antd';
// import { mapStatusToText } from '@/constant'
import request from "@lianmed/request";
// import { IBed } from '@/types'
// import Subscribe from "./Subscribe";
import { WrappedFormUtils } from "antd/lib/form/Form";
const prefix = (window as any).CONFIG.baseURL;
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
        return <Input />;
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
            },
            {
                title: '设备编号',
                dataIndex: 'deviceno',
                key: 'deviceno',
            },
            {
                title: '子机号',
                dataIndex: 'subdevice',
                key: 'subdevice',
            },
            {
                title: '床号',
                dataIndex: 'bedno',
                key: 'bedno',
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status',
                render: (text, record) => {
                    return mapStatusToText[text];
                },
            },
            {
                title: '设备类型',
                dataIndex: 'type',
                key: 'type',
                align: 'center',
            },
        ].map(_ => ({ ..._, editable: true, align: 'center' })),
        {
            title: '操作',
            dataIndex: 'operation',
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
                        <Popconfirm title="确认取消?" okText="是" cancelText="否" onConfirm={cancel}>
                            <Button size="small" type="link">
                                取消
                            </Button>
                        </Popconfirm>
                    </span>
                ) : (
                        <Button
                            size="small"
                            type="link"
                            disabled={editingKey !== ''}
                            onClick={() => setEditingKey(record.id)}
                        >
                            编辑
                        </Button>
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
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <EditableContext.Provider value={props.form}>
            <div style={{ padding: 20 }}>
                <p style={{ fontWeight: 600, lineHeight: '40px', marginBottom: '20px', fontSize: 16 }}>床位设置</p>
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
