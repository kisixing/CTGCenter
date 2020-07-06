import React, { useEffect, useState } from 'react';
import { request } from "../../common/request";
import { Modal, Form, } from 'antd';
export function ModalForm({ visible }) {
    const [form] = Form.useForm()
    useEffect(() => {
    }, [])
    return (
        <>
            <Modal footer={null} visible={visible} width={400}>
                <Form form={form}>
                    <Form.Item name="字段名">

                    </Form.Item>
                    <Form.Item name="字段名">

                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}


