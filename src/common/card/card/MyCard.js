import React from 'react';

import './MyCard.css'


/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/10
 * Time: 13:01
 * Describe:
 */
class MyCard extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div className="MyCard">
          <div className="my-card-item">
            <img className="my-card-img" src="https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg!0x0.webp"/>
            <div className="my-card-text">
              <a>标题1</a>
              <p>简介简介简介简介简介简介</p>
            </div>
          </div>
          <div style={{clear: 'both'}}></div>
        </div>
    )
  }
}

export default MyCard
