import React from 'react';

import { Link } from 'react-router-dom';
import { Input } from 'antd';

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
    this.state = {
      tagList: [
        {"title": "java", "path": "/tag/java"},
        {"title": "sql", "path": "/tag/java"},
        {"title": "java", "path": "/tag/java"},
        {"title": "sql", "path": "/tag/java"},
        {"title": "数据库", "path": "/tag/java"},
        {"title": "java", "path": "/tag/java"},
        {"title": "sql", "path": "/tag/java"},
        {"title": "java", "path": "/tag/java"},
        {"title": "sql", "path": "/tag/java"},
        {"title": "数据库", "path": "/tag/java"},
        {"title": "java", "path": "/tag/java"},
        {"title": "sql", "path": "/tag/java"},
        {"title": "java", "path": "/tag/java"},
        {"title": "sql", "path": "/tag/java"},
        {"title": "数据库", "path": "/tag/java"}
      ]
    };
    this.init = this.init.bind(this);
    this.showSearch = this.showSearch.bind(this);
  }

  init(){

    let elementNodeListOf = document.getElementsByClassName("card-item-link");
    for(let i = 0; i < elementNodeListOf.length; i++){

      elementNodeListOf[i].style.fontSize = (Math.random() * 26 + 10) + "px";
      elementNodeListOf[i].style.color = "rgb("+(Math.random() * 255)+
          ", "+(Math.random() * 255)+", "+(Math.random() * 255)+")";
    }
    document.getElementsByClassName("card-title-i")[0].style.color =
        "rgb("+(Math.random() * 255)+ ", "+(Math.random() * 255)
        +", "+(Math.random() * 255)+")";

  }
  componentDidMount(){
    this.init();
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
          <div className="card-title">目前存在 <i className="card-title-i">{this.state.tagList.length}</i> 个标签</div>
          <ul className="card-bar-box" id="cardBarBox">
            {this.state.tagList.map((tag, index) =>
                <li className="card-item" key={index}>
                  <Link to={tag.path} className="card-item-link">
                    {tag.title}
                  </Link>
                </li>
            )}
          </ul>
        </div>
    )
  }
}

export default CardBar
