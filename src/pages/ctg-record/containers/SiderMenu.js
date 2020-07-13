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
    const { dataSource, selected } = this.props;
    // console.log('555555555', selectedKeys, [selected.id]);
    return (
      <Menu
        mode="inline"
        className={styles.wrapper}
        selectedKeys={selected.id && [selected.id.toString()]}
        onClick={this.handleClick}
      >
        {dataSource.map(item => {
          return (
            <Menu.Item key={item.id} data={item} className={styles.item}>
              <div>{item.visitTime || item.visitDate}<span>({!!(item.pregnancy && item.pregnancy.inpatientNO)?'住院':'门诊'})</span></div>
              
            </Menu.Item>
          );
        })}
      </Menu>
    );
  }
}

export default SiderMenu;
