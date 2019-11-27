import React, { Component } from 'react';
import { Menu } from 'antd';
import styles from "./SiderMenu.module.less";

class SiderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKeys: []
    }
  }

  handleClick = e => {
    const { setItem } = this.props;
    const { keyPath, item } = e;
    const current = item.props.data;
    this.setState({
      selectedKeys: keyPath
    });
    setItem(current)
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
          return (
            <Menu.Item key={item.id} data={item}>
              <div>{item.visitTime || item.visitDate}</div>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default SiderMenu;
