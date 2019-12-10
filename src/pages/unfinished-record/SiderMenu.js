import React, { Component } from 'react';
import { Menu } from 'antd';
import moment from 'moment';
import styles from './SiderMenu.module.less';

class SiderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        selectedKeys: this.props.selected.id ? [this.props.selected.id.toString()] : []
      });
    }, 600);
  }

  handleClick = e => {
    const { setItem } = this.props;
    const { keyPath, item } = e;
    const current = item.props.data;
    this.setState({
      selectedKeys: keyPath,
    });
    setItem(current);
  };

  render() {
    const { selectedKeys } = this.state;
    const { dataSource } = this.props;
    return (
      <Menu
        mode="inline"
        className={styles.wrapper}
        selectedKeys={selectedKeys}
        onClick={this.handleClick}
      >
        {dataSource.map(item => {
          const pre = item.pregnancy ? item.pregnancy : {};
          return (
            <Menu.Item key={item.id} data={item} className={styles.item}>
              <div>
                <div>
                  床位：
                  <span style={{ display: 'inline-block', width: '60px', marginRight: '4px' }}>
                    {pre.bedNO}
                  </span>
                  住院号：
                  <span style={{ display: 'inline-block', width: '80px' }}>{pre.inpatientNO}</span>
                </div>
                <div>
                  姓名：
                  <span style={{ display: 'inline-block', width: '60px', marginRight: '4px' }}>
                    {pre.name}
                  </span>
                  监护时间：
                  <span style={{ display: 'inline-block', width: '80px' }}>
                    {' '}
                    {moment(item.visitTime).format('YYYY-MM-DD HH:mm')}
                  </span>
                </div>
              </div>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default SiderMenu;
