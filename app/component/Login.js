import React from 'react';
// import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { message, Form, Row, Col, Input, Button } from 'antd';
import { query } from '../common/query';

const FormItem = Form.Item;
// const RadioGroup = Radio.Group;

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <section>
        <Row className="container center">
          <Col span="6">
            <LoginForm history={browserHistory}/>
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
      userName: '',
      passWord: '',
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.userName) {
      console.log(e, this);
      return;
    }
    query('User.login', this.state, (r) => {
      if (r.data.code === 0) {
        message.info('登陆成功');
        sessionStorage.user = JSON.stringify(r.data.info);
        setTimeout((that = this) => {
          that.props.history.pushState('', 'user/' + r.data.info.id);
        }, 500);
      } else {
        message.info('登陆失败，请检查用户名或密码');
      }
    });
  }
  handleNameChange(e) {
    this.setState({ userName: e.target.value });
  }
  handlePassChange(e) {
    this.setState({ passWord: e.target.value });
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form horizontal={true} onSubmit={e => this.handleSubmit(e)}>
        <FormItem label="用户名：" {...formItemLayout}>
          <Input onChange={(e) => this.handleNameChange(e)} placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码：" {...formItemLayout}>
          <Input onChange={(e) => this.handlePassChange(e)} type="password" placeholder="请输入密码" />
        </FormItem>
        <FormItem style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">{this.state.action}</Button>
        </FormItem>
      </Form>
    );
  }
}

export { Login, LoginForm };
