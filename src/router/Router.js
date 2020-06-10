import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Index from '../pages/index/Index';
import Tag from '../pages/tag/Tag';

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
            <Route exact path='/Tag' component={Tag}></Route>
          </Switch>
        </div>
    )
  }
}

export default Router
