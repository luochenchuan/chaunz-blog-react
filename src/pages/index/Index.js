import React from 'react';

import { Link } from 'react-router-dom';
import { Card } from 'antd';

import './Index.css'

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/9
 * Time: 17:27
 * Describe:
 */
class Index extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div className="Index">
          <ul className="index-box">
            <li className="index-item">
              <a href="#">
                <Card title="Nginx解决访问图片显示404，403问题"
                      bordered={false} className="index-card">
                  <p className="index-card-sub">
                    |<a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                  </p>
                  <p>
                    ###### 问题描述 项目中所有的资源放在
                    `/www/jianshu/public/storage`中,希望通过url的方式将其展示出来，
                    如下是配置 ```bash eg:
                  </p>
                </Card>
              </a>
            </li>
            <li className="index-item">
              <a href="#">
                <Card title="Nginx解决访问图片显示404，403问题"
                      bordered={false} className="index-card">
                  <p className="index-card-sub">
                    |<a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                  </p>
                  <p>
                    ###### 问题描述 项目中所有的资源放在
                    `/www/jianshu/public/storage`中,希望通过url的方式将其展示出来，
                    如下是配置 ```bash eg:
                  </p>
                </Card>
              </a>
            </li>
            <li className="index-item">
              <a href="#">
                <Card title="Nginx解决访问图片显示404，403问题"
                      bordered={false} className="index-card">
                  <p className="index-card-sub">
                    |<a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                    <a href="#">子标题</a>|
                  </p>
                  <p>
                    ###### 问题描述 项目中所有的资源放在
                    `/www/jianshu/public/storage`中,希望通过url的方式将其展示出来，
                    如下是配置 ```bash eg:
                  </p>
                </Card>
              </a>
            </li>
            <li className="index-item">
              <Link to="/">
                <Card title="Nginx解决访问图片显示404，403问题"
                      bordered={false} className="index-card">
                  <div className="index-card-sub">
                    |<Link to="/">子标题</Link>|
                    <Link to="/">子标题</Link>|
                    <Link to="/">子标题</Link>|
                    <Link to="/">子标题</Link>|
                  </div>
                  <p>
                    ###### 问题描述 项目中所有的资源放在
                    `/www/jianshu/public/storage`中,希望通过url的方式将其展示出来，
                    如下是配置 ```bash eg:
                  </p>
                </Card>
              </Link>
            </li>
          </ul>
        </div>
    )
  }
}

export default Index
