import ReactDOM from 'react-dom';
import styles from './index.css';
import { useEffect, useState } from 'react';
import { request } from '../../common/request';
import { Table } from 'antd';

function App() {
  const [list, setList] = useState([])
  useEffect(() => {
    const receiveMessage = (event) => {

      if (event.data) {
        console.log(event.data);//孩子, 我来看你了

      }

    };
    window.addEventListener('message', receiveMessage, false);

    request.get('/runtime-properties/').then(r => {
      setList(r)
    })
  }, [])
  return (
    <div className={styles.normal}>
      
      <Table dataSource={list} size="small" bordered columns={[
        {title:'字段名',dataIndex:'key'},
        {title:'值',dataIndex:'value'},
      ]}>

      </Table>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
