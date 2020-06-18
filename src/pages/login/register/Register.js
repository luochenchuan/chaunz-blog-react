import React from 'react';
import {Button, Form, Input, Select} from "antd";
import { CrownTwoTone } from '@ant-design/icons';
const { Option } = Select;

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
 * Time: 10:30
 * Describe:
 */
class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      registerInfo: {
        username: '',
        password: '',
        gender: 'boy'
      }
    };
    this.selectGender = this.selectGender.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }


  selectGender(value){
    this.setState({
      registerInfo: {
        gender: value
      }
    })
  }

  submitForm() {
    console.log(this.state.registerInfo);
    this.props.history.push("/")
  }

  render() {

    return (
        <div className="Register">
          <Form className="login-form" onFinish={this.submitForm}>
            <Form.Item
                label="Username"
                name="username" validateStatus="warning">
              <Input value={this.state.registerInfo.username} />
            </Form.Item>
            <Form.Item
                label="Password"
                name="password">
              <Input.Password value={this.state.registerInfo.password}/>
            </Form.Item>
            <Form.Item
                label="Gender"
                name="gender">
                <span>
                  <Input
                      type="text"
                      disabled={true}
                      style={{width: "42%", marginLeft: "15px"}}
                      value={this.state.registerInfo.gender}
                  />
                  <Select
                      style={{ width: "42%", margin: '0 8px' }}
                      defaultValue={this.state.registerInfo.gender}
                      onChange={this.selectGender}
                  >
                    <Option value="boy">BOY</Option>
                    <Option value="girl">GIRL</Option>
                  </Select>
                </span>
            </Form.Item>
            <Form.Item {...tailLayout} name="register">
              <a className="register" onClick={this.props.switchLogin}>
                已有账号, 马上登录
              </a>
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" icon={<CrownTwoTone />}>
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </div>
    )
  }
}

export default Register
