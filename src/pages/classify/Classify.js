import React from 'react';

import { Timeline, Radio } from 'antd';

import './Classify.css'

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/17
 * Time: 15:27
 * Describe:
 */
class Classify extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      classifyList: [
        {"id": 1, "time": "2020-10-10", "content": "hahaha"},
        {"id": 2, "time": "2020-10-10", "content": "hahaha"},
        {"id": 3, "time": "2020-10-10", "content": "hahaha"},
        {"id": 4, "time": "2020-10-10", "content": "hahaha"},
        {"id": 5, "time": "2020-10-10", "content": "hahaha"},
        {"id": 6, "time": "2020-10-10", "content": "hahaha"},
        {"id": 7, "time": "2020-10-10", "content": "hahaha"},
        {"id": 8, "time": "2020-10-10", "content": "hahaha"},
      ]
    }
  }

  render() {

    return (
        <div className="Classify">
          <Timeline className="classify-box" mode="alternate">

            {this.state.classifyList.map(classify =>
                  <Timeline.Item className="classify-item" key={classify.id} label={classify.time}>
                    <div className="classify-item-box">
                      {classify.content}
                    </div>
                  </Timeline.Item>
            )}

          </Timeline>
        </div>
    )
  }
}

export default Classify
