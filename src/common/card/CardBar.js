import React from 'react';

import MyCard from './card/MyCard'
import { Input } from 'antd';

import {
  SearchOutlined,
} from '@ant-design/icons';
import './CardBar.css';

const { Search } = Input;

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/10
 * Time: 16:34
 * Describe:
 */
class CardBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.showSearch = this.showSearch.bind(this);
  }


  showSearch(){

    let cardButtonBox = document.getElementById("cardButtonBox");
    cardButtonBox.style.display = 'none';

    let cardSearchBox = document.getElementById("cardSearchBox");
    cardSearchBox.style.width = '220px';

  }


  render() {

    return (
        <div className="CardBar">
          <div className="card-box">
            <div className="card-button-box">
              <SearchOutlined className="card-search-button"/>
              <div className="card-search-box">
                  <input type="text"
                         className="card-search"
                         placeholder="请输入你要查询的标签..."/>
                  <label className="card-search-label">
                    <SearchOutlined className="card-search-label-button"/>
                  </label>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default CardBar
