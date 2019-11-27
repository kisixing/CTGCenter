import Iframe from 'react-iframe';
import Loader from '../../components/Loader';
import styles from './index.less';

function IIframe({ spinning, url }) {
  return (
    <div className={styles.iframe_wrapper}>
      <Loader spinning={spinning} />
      <Iframe url={url} id="iifram" className={styles.iframe} loading="加载中..." />
    </div>
  );
}

export default IIframe;
