import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Index from '../pages/index/Index';
import Tag from '../pages/tag/Tag';
import Document from '../pages/document/Document';
import Classify from '../pages/classify/Classify';
import Message from '../pages/message/Message';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Home from '../pages/manage/Home';

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/9
 * Time: 14:22
 * Describe:
 */
class Router extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
        <div className="Router">
          <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route exact path='/tag' component={Tag}></Route>
            <Route exact path='/tag/*' component={Document}></Route>
            <Route exact path='/classify' component={Classify}></Route>
            <Route exact path='/message' component={Message}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/signIn' component={Home}></Route>
            <Route exact path='/register' component={Login}></Route>
          </Switch>
        </div>
    )
  }
}

export default Router
