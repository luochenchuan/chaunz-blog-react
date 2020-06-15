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
          <a href="/">
            <div className="card-item"></div>
            <div className="card-item"></div>
            <div className="card-item"></div>
            <div className="card-item"></div>
          </a>
        </div>
    )
  }
}

export default MyCard
