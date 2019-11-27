import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const MENUS = [
  {
    id: '001',
    title: '胎监档案',
    href: 'http://localhost:8000/home.html',
  },
  {
    id: '002',
    title: '调度中心',
    href: 'http://localhost:8000/control-center.html',
  },
  {
    id: '0030',
    title: '其他',
    children: [
      {
        id: '0031',
        title: '调度中心',
        href: 'http://localhost:8000/control-center.html',
      },
    ],
  },
];

export class SiderMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render() {
    const { handleClick } = this.props;
    const origin = window.location.origin;
    return (
      <Menu
        onClick={handleClick}
        style={{ width: 256, height: '100%' }}
        defaultSelectedKeys={['001']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item
          key="001"
          title="胎监档案"
          href={`${origin}/ctg-record.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8`}
        >
          <Icon type="ordered-list" />
          <span>胎监档案</span>
        </Menu.Item>
        <Menu.Item
          key="002"
          title="调度中心"
          href={`${origin}/control-center.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8`}
        >
          <Icon type="pic-center" />
          <span>调度中心</span>
        </Menu.Item>
        <Menu.Item
          key="003"
          title="任务列表"
          href={`${origin}/task-list.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8`}
        >
          <Icon type="unordered-list" />
          <span>任务列表</span>
        </Menu.Item>
        <Menu.Item
          key="004"
          title="任务日志"
          href={`${origin}/task-log.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8`}
        >
          <Icon type="warning" />
          <span>任务日志</span>
        </Menu.Item>
        <Menu.Item
          key="005"
          title="文件上传"
          href={`${origin}/upload.html?auth_user=admin&auth_token=SLX9FT0`}
        >
          <Icon type="upload" />
          <span>文件上传</span>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SiderMenu;
