import ReactDOM from 'react-dom';
import styles from './index.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const receiveMessage = (event) => {

      console.log(event.data);//孩子, 我来看你了

    };
    window.addEventListener('message', receiveMessage, false);
  }, [])
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      设置页面
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
