import Iframe from 'react-iframe';
import Loader from '../../components/Loader';
import styles from './index.less';
import { useEffect, useRef } from 'react';
import request from "@lianmed/request";
function IIframe({ spinning, url, token }) {
  const ref = useRef()
  useEffect(() => {
    const inner = document.querySelector('#iifram')
    const prefix = request.configure.prefix
    inner.onload = () => {
      inner.contentWindow.postMessage(JSON.stringify({ token,prefix }));
    }
  }, [token])
  return (
    <div className={styles.iframe_wrapper}>
      <Loader spinning={spinning} />
      <Iframe ref={ref} url={url} id="iifram" className={styles.iframe} loading="加载中..." />
    </div>
  );
}

export default IIframe;
