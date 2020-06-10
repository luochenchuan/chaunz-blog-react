import React from 'react';

import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  HomeOutlined,
  UngroupOutlined,
  TagOutlined,
  CommentOutlined
} from '@ant-design/icons';

import Router from '../router/Router'
import Bg_1 from '../assets/img/bg-1.jpg'
import logo from '../logo.svg'
import 'antd/dist/antd.css'
import './Home.css'

const { Header, Content, Footer } = Layout;
const homeStyle = {
  // backgroundImage: `url(${Bg_1})`
};

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/9
 * Time: 14:33
 * Describe:
 */
class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      target: null,
      menuList: [
        {id: 1, title: '首页', ico: <HomeOutlined/>, path: '/'},
        {id: 2, title: '标签', ico: <TagOutlined />, path: '/Tag'},
        {id: 3, title: '分类', ico: <UngroupOutlined/>, path: '/#/'},
        {id: 4, title: '留言', ico: <CommentOutlined />, path: '/#/'}
      ]
    };
    this.active = this.active.bind(this);
  }

  active(event){

    if(this.state.target != null){
      this.state.target.setAttribute("class", "Menu-item");
    }
    const menu = event.target;
    menu.setAttribute("class", "Menu-item active");
    this.setState({
      target: menu
    })
  }

  render() {

    return (
        <div className="Home" style={homeStyle}>
          <Layout className="layout">
            <Header className="Home-Header">
              <div className="Home-Menu">
                <div className="logo">
                  <img className="logo-img" src={logo}/>
                </div>
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
                </Menu>
              </div>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <div className="site-layout-content">
                <Router></Router>
              </div>
              <div className="site-layout-right">
                right
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              chaunz ©2018
            </Footer>
          </Layout>
        </div>
    )
  }
}

export default Home
