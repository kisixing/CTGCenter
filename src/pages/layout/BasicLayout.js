import React, { Component } from 'react';
import { Layout } from 'antd';
import request from '../../common/request';
import SiderMenu from './SiderMenu';
import Iframe from './Iframe';

import styles from './index.less';

const { Header, Sider, Content } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // 菜单切换时模拟600ms loading
      src: `${window.location.origin}/ctg-record.html?appId=CkLRboUsAnlSHN3qdJYwk/Zpz9X+IkjQDhgwviLu1tFkP3YxfDc0AkmUzAW6bqzF&nonce=sVQyDzQFB3JZJNEZNNbaabenIQW00ITqv51MH373ICt85JjhJFnrvWYWoD+QkCap&timestamp=VuLR52iXroudCb0DJBNqIA==&sign=F468861FAFB0285A2F5883CEB6765DBE&patId=syZXb8RXLro8u4Atz8i6ww==`,
    };
  }

  componentDidMount() {
    request.get('./account').then(res => {
      sessionStorage.setItem('ACCOUNT', JSON.stringify(res.data));
    });
  }

  menuClick = e => {
    const { href, title } = e.item.props;
    document.title = title;
    this.setState({ loading: true, src: href });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 600);
  };

  render() {
    const { loading, src } = this.state;
    return (
      <Layout className={styles.container}>
        <Header id="header" className={styles.header}>CTG MPA 管理服务后台</Header>
        <Layout>
          <Sider width={256} theme={'light'} className={styles.sider}>
            <SiderMenu handleClick={this.menuClick} />
          </Sider>
          <Content className={styles.content}>
            <Iframe url={src} spinning={loading} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout
