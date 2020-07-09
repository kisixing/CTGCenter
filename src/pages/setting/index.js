import ReactDOM from 'react-dom';
import styles from './index.css';
import { useEffect, useState } from 'react';
import { request } from '../../common/request';
import { Table, Button, message, Divider } from 'antd';
import { ModalForm } from "./ModalForm";
function App() {
  const [list, setList] = useState([])
  const [visible, setVisible] = useState(false)
  const [dataItem, setDataItem] = useState(null)
  useEffect(() => {
    const receiveMessage = (event) => {

      if (event.data) {
        console.log(event.data);
      }

    };
    window.addEventListener('message', receiveMessage, false);
    fetchData()

  }, [])
  function fetchData() {
    request.get('/runtime-properties/').then(r => {
      setList(r)
    })
  }
  function del() {
    request.delete('/runtime-properties/', { data: dataItem }).then(() => {
      message.info('删除成功！')
    })
  }
  function onOk() {
    setVisible(false)
  }
  function onCancel() {
    setVisible(false)
  }
  useEffect(() => {
    if (!visible) {
      fetchData()
      setDataItem(null)
    }
  }, [visible])
  useEffect(() => {
    if (dataItem) {
      setVisible(true)
    }
  }, [dataItem])
  return (
    <div className={styles.normal}>
      <Button onClick={() => setVisible(true)} style={{ marginBottom: 12, float: 'right' }} type="primary">新增</Button>

      <Table dataSource={list} size="small" bordered columns={[
        { title: '字段名', dataIndex: 'key' },
        { title: '值', dataIndex: 'value' },
        {
          title: '操作', dataIndex: 'action', render(a, item, index) {
            return (
              <div>
                <Button
                  onClick={() => {
                    setDataItem(item)
                  }}

                  type="link"
                >编辑</Button>
                <Divider type="vertical" />
                <Button type="link" onClick={del}>删除</Button>
              </div>
            )
          }
        }
      ]}>

      </Table>
      <ModalForm visible={visible} dataItem={dataItem} onCancel={onCancel} onOk={onOk} setVisible={setVisible} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
