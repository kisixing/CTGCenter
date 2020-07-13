import { Button, Form, Input, Row } from 'antd';
import React, { Fragment, useState } from 'react';
import config from '../../common/config';
import request from '../../common/request';
import { auth, compile } from '../../common/utils';
import styles from './Login.less';

const FormItem = Form.Item;
export const LoginPannel = ({ handleOk }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const submit = () => {
    form.validateFields().then(values => {
      setLoading(true)

      request
        .post('/encryptedauthenticate', {
          username: compile(values.username),
          password: compile(values.password),
        })
        .then(function (response) {
          const access_token = response.data.id_token;
          auth.set(access_token);
          handleOk(access_token)
        })
        .catch(function (error) {
          console.log('api/encryptedauthenticate', error);
        })
        .finally(() => {
          setLoading(false)
        })
    });
  }
  return (
    <div style={{padding:12}}>
      <div className={styles.logo}>
        <img alt="logo" src={config.logoPath} />
        <span>{config.siteName}</span>
      </div>
      <Form form={form} defaultValue={{username:'',password:''}}>
        <FormItem hasFeedback name="username" rules={[{ required: true }]}>

          <Input onPressEnter={submit} placeholder="输入用户名" />
        </FormItem>
        <FormItem hasFeedback name="password" rules={[{ required: true }]}>
          <Input type="password" onPressEnter={submit} placeholder="输入密码" />
        </FormItem>
        <Row>
          <Button block  type="primary" onClick={submit} loading={loading}>
            <span>登录</span>
          </Button>
          {/* <p>
          <span>Username：admin</span>
          <span>Password: admin</span>
        </p> */}
        </Row>
      </Form>
    </div>
  )
}
function Login(props) {

  const handleOk = (access_token) => {
    auth.set(access_token);
    window.location.href = `${window.location.origin}/dashboard.html`;
  };

  return (
    <Fragment>
      <div className={styles.form}>
        <LoginPannel handleOk={handleOk} />
      </div>
      <div className={styles.footer}></div>
    </Fragment>
  );
}



export default Login
