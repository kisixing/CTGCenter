import React, { Component } from 'react';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Menu } from 'antd';

// const { SubMenu } = Menu;
// const MENUS = [
//   {
//     id: '001',
//     title: '胎监档案',
//     href: 'http://localhost:8000/home.html',
//   },
//   {
//     id: '002',
//     title: '调度中心',
//     href: 'http://localhost:8000/control-center.html',
//   },
//   {
//     id: '0030',
//     title: '其他',
//     children: [
//       {
//         id: '0031',
//         title: '调度中心',
//         href: 'http://localhost:8000/control-center.html',
//       },
//     ],
//   },
// ];

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
        {/* <Menu.Item
          key="001"
          title="胎监档案"
          href={`${origin}/?appId=CkLRboUsAnlSHN3qdJYwk/Zpz9X+IkjQDhgwviLu1tFkP3YxfDc0AkmUzAW6bqzF&nonce=sVQyDzQFB3JZJNEZNNbaabenIQW00ITqv51MH373ICt85JjhJFnrvWYWoD+QkCap&timestamp=VuLR52iXroudCb0DJBNqIA==&sign=F468861FAFB0285A2F5883CEB6765DBE&patId=syZXb8RXLro8u4Atz8i6ww==&empId=88888888`}
        >
          <LegacyIcon type="ordered-list" />
          <span>胎监档案</span>
        </Menu.Item> */}
        <Menu.Item
          key="002"
          title="调度中心"
          href={`${origin}/control-center.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8`}
        >
          <LegacyIcon type="pic-center" />
          <span>调度中心</span>
        </Menu.Item>
        <Menu.Item
          key="003"
          title="任务列表"
          href={`${origin}/task-list.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8`}
        >
          <LegacyIcon type="unordered-list" />
          <span>任务列表</span>
        </Menu.Item>
        <Menu.Item
          key="004"
          title="任务日志"
          href={`${origin}/task-log.html?auth_user=admin&auth_token=SLX9FT0&pregnancyId=8`}
        >
          <LegacyIcon type="warning" />
          <span>任务日志</span>
        </Menu.Item>
        <Menu.Item
          key="005"
          title="文件上传"
          href={`${origin}/upload.html?auth_user=admin&auth_token=SLX9FT0`}
        >
          <LegacyIcon type="upload" />
          <span>文件上传</span>
        </Menu.Item>
        <Menu.Item
          key="006"
          title="床位管理"
          href={`${origin}/bedinfo.html?auth_user=admin&auth_token=SLX9FT0`}
        >
          <LegacyIcon type="upload" />
          <span>床位管理</span>
        </Menu.Item>
        {/* <Menu.Item
          key="007"
          title="监护页"
          href={`${origin}/ctg.html?auth_user=admin&auth_token=SLX9FT0`}
        >
          <LegacyIcon type="upload" />
          <span>监护页</span>
        </Menu.Item> */}
        <Menu.Item key="008" title="用户管理" href={`${origin}/user-account.html`}>
          <LegacyIcon type="user" />
          <span>用户管理</span>
        </Menu.Item>
        {/* <Menu.Item key="009" title="待处理档案管理" href={`${origin}/dcms.html`}>
          <LegacyIcon type="user" />
          <span>待处理档案管理</span>
        </Menu.Item> */}
        <Menu.Item key="010" title="档案管理" href={`${origin}/archives.html`}>
          <LegacyIcon type="file" />
          <span>档案管理</span>
        </Menu.Item>
        <Menu.Item key="011" title="用户组管理" href={`${origin}/groups.html`}>
          <LegacyIcon type="file" />
          <span>用户组管理</span>
        </Menu.Item>
        <Menu.Item key="012" title="病区管理" href={`${origin}/wards.html`}>
          <LegacyIcon type="file" />
          <span>病区管理</span>
        </Menu.Item>
        <Menu.Item key="013" title="模板管理" href={`${origin}/template.html`}>
          <LegacyIcon type="copy" />
          <span>模板管理</span>
        </Menu.Item>
        {/* <Menu.Item key="014" title="模板管理" href={`${origin}/setting.html`}>
          <LegacyIcon type="copy" />
          <span>参数设置</span>
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default SiderMenu;
