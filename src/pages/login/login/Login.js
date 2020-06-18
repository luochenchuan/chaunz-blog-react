import React from 'react';
import { Form, Input, Button } from 'antd';
import { ReconciliationTwoTone  } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/**
 * Created by IntelliJ IDEA.
 * User: zhuchuansheng
 * Date: 2020/6/18
 * Time: 10:29
 * Describe:
 */
class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loginInfo: {
        username: "",
        password: ""
      }
    };
    this.submitForm = this.submitForm.bind(this);
    this.loginName = this.loginName.bind(this);
    this.loginPassword = this.loginPassword.bind(this);
  }

  submitForm() {

    console.log(this.state.loginInfo);
    this.props.history.push("/signIn")
  }

  loginName(value) {

    this.setState({
      loginInfo: {
        username: value.target.value,
        password: this.state.loginInfo.password
      }
    })
  }

  loginPassword(value) {
    this.setState({
      loginInfo: {
        username: this.state.loginInfo.username,
        password: value.target.value
      }
    })
  }

  render() {

    return (
        <div className="Login">
          <Form className="login-form">
            <Form.Item
                label="Username"
                name="username">
              <Input
                  onChange={this.loginName}
                  value={this.state.loginInfo.username} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password">
              <Input.Password
                  onChange={this.loginPassword}
                  value={this.state.loginInfo.password} />
            </Form.Item>
            <Form.Item {...tailLayout} name="register">
              <a className="register" onClick={this.props.switchLogin}>没有账号, 马上注册</a>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" icon={<ReconciliationTwoTone />} onClick={this.submitForm}>
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </div>
    )
  }
}

export default Login
