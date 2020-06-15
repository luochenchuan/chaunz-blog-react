import React from 'react';

import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import {
  HomeOutlined,
  UngroupOutlined,
  TagOutlined,
  CommentOutlined,
  DownOutlined,
  SettingOutlined,
  BgColorsOutlined
} from '@ant-design/icons';
const { SubMenu } = Menu;

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/10
 * Time: 11:49
 * Describe:
 */
class MenuBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      target: null,
      menuList: [
        {id: 1, title: '首页', ico: <HomeOutlined/>, path: '/'},
        {id: 2, title: '标签', ico: <TagOutlined />, path: '/Tag'},
        {id: 3, title: '分类', ico: <UngroupOutlined/>, path: '/#/'},
        {id: 4, title: '留言', ico: <CommentOutlined />, path: '/#/'}
      ],
      bgList: this.props.bgList,
      currentBg: this.props.currentBg
    };
    this.active = this.active.bind(this);
    this.settingMenu = this.settingMenu.bind(this);
  }




  settingMenu(){

    console.log(this.state.currentBg)

    const switchBg = (
        <span>
          <BgColorsOutlined/>
          切换背景
        </span>
    );

    return(
        <Menu>
          <SubMenu title={switchBg}  key="1">
            {this.state.bgList.map(bg =>
                this.state.currentBg.id == bg.id ?
                <Menu.Item key={bg.id}
                           style={{backgroundColor: '#1890ff', color: '#fff'}}
                           onClick={this.props.showBg}>{bg.title}</Menu.Item>
                    :
                <Menu.Item key={bg.id} onClick={this.props.showBg}>{bg.title}</Menu.Item>
            )}
          </SubMenu>
          <Menu.Item key="2">功能二</Menu.Item>
          <Menu.Item key="3">功能三</Menu.Item>
        </Menu>
    )
  }


  active(event){

    if(this.state.target != null){
      this.state.target.setAttribute("class", "Menu-item");
    }
    const menu = event.target;
    menu.setAttribute("class", "Menu-item active");
    this.setState({
      target: menu
    });
  }

  render() {

    return (
        <div className="MenuBar">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            {this.state.menuList.map((menu) =>
                <Menu.Item key={menu.id}>
                  <Link to={menu.path}
                        className='Menu-item'
                        onClick={this.active}>
                    {menu.ico}
                    {menu.title}
                  </Link>
                </Menu.Item>
            )}
            <Dropdown overlay={this.settingMenu}>
              <a className="ant-dropdown-link Menu-item">
                <SettingOutlined/> 设置 <DownOutlined />
              </a>
            </Dropdown>
          </Menu>
        </div>
    )
  }
}

export default MenuBar
