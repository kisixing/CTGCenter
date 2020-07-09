import React, { useEffect, useState } from 'react';
import { request } from "../../common/request";
import { Modal, Form, Input, message, } from 'antd';
export function ModalForm({ visible, dataItem, onCancel, onOk, setVisible }) {
    const isEdit = !!dataItem
    const [form] = Form.useForm()
    useEffect(() => {
        form.setFieldsValue(dataItem || { value: '', key: '' })
    }, [dataItem, form])
    const submit = () => {
        form.validateFields().then(data => {
            request[dataItem ? 'put' : 'post']('/runtime-properties/', { data }).then(() => {
                message.info('操作成功！')
                setVisible(false)
            })

        })
    }
    return (
        <>
            <Modal visible={visible} width={400}
                onCancel={() => {
                    setVisible(false)
                }}
                onOk={submit}
                title={isEdit ? '编辑' : '新增'}

            >
                <Form form={form} onFinish={submit} labelCol={{ xs: 4 }} >
                    <Form.Item name="key" label="字段名" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="value" label="值" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}


