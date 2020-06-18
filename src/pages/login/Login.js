import React from 'react';

import MyLogin from './login/Login';
import Register from './register/Register';

import './Login.css'


/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/18
 * Time: 9:28
 * Describe:
 */
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: true,
      element: {}
    };
    this.switchLogin = this.switchLogin.bind(this);
  }


  switchLogin(){

    this.setState({
      flag: !this.state.flag
    })
  }

  render() {

    return (
        <div className="Login">
          <div className="login-box">
            {this.state.flag ?
                <MyLogin switchLogin={this.switchLogin} history={this.props.history}/>
                :
                <Register switchLogin={this.switchLogin} history={this.props.history}/>}
          </div>
        </div>
    )
  }
}

export default Login
