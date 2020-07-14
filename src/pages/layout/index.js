import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Loader from '../../components/Loader';
import BasicLayout from './BasicLayout';
import { request } from "../../common/request";
import { Modal, Form } from 'antd';
import { LoginPannel } from "../login/Login";
const TOKEN_KEY = request.TOKEN_KEY
function App(props) {
  const [spinning, setSpinning] = useState(true)
  const [token, setToken] = useState(localStorage.getItem(TOKEN_KEY))
  const handleOk = (token) => {
    token = 'Bearer ' + token
    localStorage.setItem(TOKEN_KEY, token)
    setToken(token)
  }
  useEffect(() => {
    setSpinning(false)
    // request.config({ Authorization: token })
    request.get('/account').catch(() => {
      token && setToken(null)
    })
  }, [token])
  return (
    <>
      <Loader fullScreen spinning={spinning} />
      <BasicLayout token={token} />
      <Modal footer={null} visible={false} width={400}>
        <LoginPannel handleOk={handleOk} />
      </Modal>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
