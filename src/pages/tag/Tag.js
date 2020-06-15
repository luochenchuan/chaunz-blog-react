import React from 'react';

import CardBar from '../../common/card/CardBar'

import 'antd/dist/antd.css';
import './Tag.css'

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/9
 * Time: 17:29
 * Describe:
 */
class Tag extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div className="Tag">
          <div className="tag-box">
            <CardBar/>
          </div>
        </div>
    )
  }
}

export default Tag
