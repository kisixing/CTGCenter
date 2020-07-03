import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Loader from '../../components/Loader';
import BasicLayout from './BasicLayout';
import request from "@lianmed/request";
import { Modal, Form } from 'antd';
import { LoginPannel } from "../login/Login";
const TOKEN_KEY = request.TOKEN_KEY
function App(props) {
  const [spinning, setSpinning] = useState(!!localStorage.getItem(TOKEN_KEY))
  const [isLogin, setIsLogin] = useState()
  const [modalVisible, setModalVisible] = useState(false)
  const handleOk = (token) => {
    localStorage.setItem(TOKEN_KEY, token)
    setIsLogin(true)
  }
  useEffect(() => {
    setSpinning(false)
    if (!isLogin) {
      setModalVisible(true)
    }
  }, [isLogin])
  return (
    <>
      <Loader fullScreen spinning={spinning} />
      <BasicLayout />
      <Modal footer={null} visible={modalVisible} width={400}>
        <LoginPannel handleOk={handleOk} />
      </Modal>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
