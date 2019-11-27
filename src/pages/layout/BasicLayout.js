import React, { Component } from 'react';
import { Layout } from 'antd';

import SiderMenu from './SiderMenu';
import Iframe from './Iframe';

import styles from './index.less';

const { Header, Sider, Content } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // 菜单切换时模拟600ms loading
      src: `${window.location.origin}/ctg-record.html`,
    };
  }

  componentDidMount() {

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
        <Header className={styles.header}>CTG MPA 管理服务后台</Header>
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
