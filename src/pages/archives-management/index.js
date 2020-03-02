import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import Archives from './Archives';

const App = () => (
  <ConfigProvider locale={zhCN}>
    <Archives />
  </ConfigProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
