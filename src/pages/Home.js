import React from 'react';
import { Layout, Tooltip } from 'antd';
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';

import Router from '../router/Router'
import MenuBar from '../common/menu/MenuBar'
import logo from '../logo.svg'
import 'antd/dist/antd.css'
import './Home.css'

import Bg_1 from '../assets/img/bg-1.jpg'
import Bg_2 from '../assets/img/bg-2.jpg'
import Bg_3 from '../assets/img/bg-3.jpg'


const { Header, Content, Footer } = Layout;


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
      bgList: [
        {"id": 1, "title": "背景一", "path": Bg_1},
        {"id": 2, "title": "背景二", "path": Bg_2},
        {"id": 3, "title": "背景三", "path": Bg_3}
      ],
      currentBg: {"id": 1, "path": Bg_1}
    };
    this.showBg = this.showBg.bind(this);
  }

  showBg(event){

    let bg = this.state.bgList[event.key - 1];
    this.setState({
      currentBg: {"id": bg.id, "path": bg.path}
    })
  }


  render() {

    return (
        <div className="Home" style={{backgroundImage: `url(${this.state.currentBg.path})`}}>
          <Layout className="layout">
            <Header className="Home-Header">
              <div className="Home-Menu">
                <div className="logo">
                  <img className="logo-img" src={logo}/>
                </div>
                <MenuBar bgList={this.state.bgList} showBg={this.showBg} currentBg={this.state.currentBg}/>
              </div>
            </Header>
            <Content style={{ padding: '0 30px' }} className="home-content">
              <div className="site-layout-content">
                <Router></Router>
              </div>
              <div className="site-layout-right">
                <div className="home-right">
                  <a href="#">
                    <Tooltip title="回到顶部" color={'blue'}>
                      <ArrowUpOutlined className="home-top"/>
                    </Tooltip>
                  </a>
                  {/*<a href="#">*/}
                    {/*<Tooltip title="到低部" color={'blue'}>*/}
                      {/*<ArrowDownOutlined className="home-top"/>*/}
                    {/*</Tooltip>*/}
                  {/*</a>*/}
                  <a className="home-show">100%</a>
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center'}} className="footer">
              chaunz ©2018
            </Footer>
          </Layout>
        </div>
    )
  }
}

export default Home
