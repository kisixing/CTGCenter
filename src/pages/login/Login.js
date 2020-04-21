import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Row, Input } from 'antd';
import { auth } from '../../common/utils';
import request from '../../common/request';
import config from '../../common/config';

import styles from './Login.less';
const FormItem = Form.Item;

class Login extends PureComponent {
  state = {
    loading: false,
  };

  handleOk = () => {
    const _this = this;
    const { form } = this.props;
    const { validateFieldsAndScroll } = form;
    _this.setState({ loading: true });
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      request
        .post('/authenticate', {
          username: values.username,
          password: values.password,
        })
        .then(function(response) {
          const access_token = response.data.id_token;
          auth.set(access_token);
          _this.setState({ loading: false });
          window.location.href = `${window.location.origin}/dashboard.html`;
        })
        .catch(function(error) {
          _this.setState({ loading: false });
          console.log('api/authenticate', error);
        });
    });
  };

  render() {
    const { loading } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Fragment>
        <div className={styles.form}>
          <div className={styles.logo}>
            <img alt="logo" src={config.logoPath} />
            <span>{config.siteName}</span>
          </div>
          <form>
            <FormItem hasFeedback>
              {getFieldDecorator('username', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input onPressEnter={this.handleOk} placeholder="输入用户名" />)}
            </FormItem>
            <FormItem hasFeedback>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                  },
                ],
              })(<Input type="password" onPressEnter={this.handleOk} placeholder="输入密码" />)}
            </FormItem>
            <Row>
              <Button type="primary" onClick={this.handleOk} loading={loading}>
                登录
              </Button>
              {/* <p>
                <span>Username：admin</span>
                <span>Password: admin</span>
              </p> */}
            </Row>
          </form>
        </div>
        <div className={styles.footer}></div>
      </Fragment>
    );
  }
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};

export default Form.create()(Login);
