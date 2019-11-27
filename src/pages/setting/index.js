import ReactDOM from 'react-dom';
import styles from './index.css';

function App () {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      设置页面
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
