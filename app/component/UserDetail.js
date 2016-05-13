import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { message, Tabs, Affix, Breadcrumb, Form, Tag, Row, Col, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { query } from '../common/query'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class UserDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    let data = JSON.parse(sessionStorage.user);
    this.state = {
      user_id: data.id,
      userName: data.user_login,
      userEmail: data.user_email,
    };
  }
  componentDidMount() {
    console.log(this);
  }
  handleBasicInfoSubmit(e) {

  }
  handlePassWordChange(e) {
    this.setState({ passWord: e.target.value });
  }
  handlePassWordSubmit(e) {
    e.preventDefault();
    if (!this.state.passWord) {
      message.info('密码不许为空');
      return;
    }
    query('User.updateOneInfo', this.state, (r) => {
      message.info('保存成功，密码已修改');
      setTimeout(function () {
        window.location.href = '/login';
      }, 500);
    })
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="基本信息" key="1">
          <br/><br/>
          <Form horizontal onSubmit={(e)=>this.handleBasicInfoSubmit(e)}>
            <FormItem
              {...formItemLayout}
              label="用户名：">
              <p className="ant-form-text" id="userName" name="userName">{this.state.userName}</p>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="昵称：">
              <Input placeholder="请输入昵称" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="您的性别：">
              <RadioGroup>
                <Radio value="male">男的</Radio>
                <Radio value="female">女的</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="个人主页：">
              <Input placeholder="请输入个人主页" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="备注："
              help="随便写点什么">
              <Input type="textarea" placeholder="随便写" />
            </FormItem>
            <FormItem wrapperCol={{ span: 16, offset: 4 }} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit">确定</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane tab="账户安全" key="2">
          <br/><br/>
          <Form horizontal onSubmit={(e)=>this.handlePassWordSubmit(e)} >
            <FormItem
              {...formItemLayout}
              label="密码：">
              <Input type="password" placeholder="请输入旧密码" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="新密码：">
              <Input type="password" placeholder="请输入新密码" />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label="确认新密码：">
              <Input type="password" onChange={(e)=>this.handlePassWordChange(e)} placeholder="请再次输入新密码" />
            </FormItem>
            <FormItem wrapperCol={{ span: 16, offset: 4 }} style={{ marginTop: 24 }}>
              <Button type="primary" htmlType="submit">确定</Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    );
  }
}

export { UserDetail };
