import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { message,Affix, Breadcrumb, Form, Tag, Row, Col, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { query } from '../common/query'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class Register extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content">
          <Affix>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item href="user">用户</Breadcrumb.Item>
              <Breadcrumb.Item>新建</Breadcrumb.Item>
            </Breadcrumb>
          </Affix>
          <br/><br/><br/>
          <Row>
            <Col span="14">
              <ManageUser></ManageUser>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

class ManageUser extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      action: '新增',
      url: 'User.createOneUser',
      id: null,
      userName: '',
      passWord: '',
      userEmail: '',
    };
  }
  componentDidMount() {

  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.userName) {
      console.log(e,this);
      return;
    }
    query(this.state.url, this.state, (r) => {
      message.info('新建成功');
      this.props.history.pushState(null, '/login')
    })
  }
  handleNameChange(e) {
    this.setState({ userName: e.target.value })
  }
  handlePassChange(e) {
    this.setState({ passWord: e.target.value })
  }
  handleEmailChange(e) {
    this.setState({ userEmail: e.target.value })
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
          <FormItem
            {...formItemLayout}
            label="邮箱：">
            <Input onChange={(e)=>this.handleEmailChange(e)} type="email" placeholder="请输入邮箱" />
          </FormItem>
          <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
            <Button type="primary" htmlType="submit">确定</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export { Register };
