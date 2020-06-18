import React from 'react';

import './Message.css'
/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/18
 * Time: 9:16
 * Describe:
 */
class Message extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div className="Message">
          <h1>留言</h1>
        </div>
    )
  }
}

export default Message
