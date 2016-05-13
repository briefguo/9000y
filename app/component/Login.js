import React from 'react'
import { render } from 'react-dom'
import { Link, browserHistory } from 'react-router'
import { message, Affix, Breadcrumb, Form, Tag, Row, Col, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { query } from '../common/query'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    sessionStorage.clear();
  }
  render() {
    return (
      <section>
        <Row className="container center">
          <Col span="6">
            <LoginForm history={browserHistory}></LoginForm>
          </Col>
        </Row>
      </section>
    );
  }
}

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      action: '登陆',
      url: 'User.login',
      id: null,
      userName: '',
      passWord: '',
      userEmail: '',
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.userName) {
      console.log(e, this);
      return;
    }
    query(this.state.url, this.state, (r) => {
      message.info('登陆成功');
      setTimeout(function () {
        window.location.href = '/user/' + r.data.info.id;
      }, 500);
      sessionStorage.user = JSON.stringify(r.data.info);
    })
  }
  handleNameChange(e) {
    this.setState({ userName: e.target.value })
  }
  handlePassChange(e) {
    this.setState({ passWord: e.target.value })
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <Form horizontal onSubmit={e=>this.handleSubmit(e)}>
          <FormItem
            {...formItemLayout}
            label="用户名：">
            <Input onChange={(e)=>this.handleNameChange(e)} placeholder="请输入用户名" />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="密码：">
            <Input onChange={(e)=>this.handlePassChange(e)}  type="password" placeholder="请输入密码" />
          </FormItem>
          <FormItem style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">{this.state.action}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export { Login, LoginForm };
