import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import Archives from './Archives';

const App = () => (
  <LocaleProvider locale={zhCN}>
    <Archives />
  </LocaleProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
