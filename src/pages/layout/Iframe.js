import Iframe from 'react-iframe';
import Loader from '../../components/Loader';
import styles from './index.less';
import { useEffect, useRef } from 'react';

function IIframe({ spinning, url }) {
  const ref = useRef()
  useEffect(() => {
    const inner = document.querySelector('#iifram')
    inner.onload = () => {
      inner.contentWindow.postMessage(JSON.stringify({ token: 123 }));
    }
  }, [])
  return (
    <div className={styles.iframe_wrapper}>
      <Loader spinning={spinning} />
      <Iframe ref={ref} url={url} id="iifram" className={styles.iframe} loading="加载中..." />
    </div>
  );
}

export default IIframe;
