import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { message, Tabs, Affix, DatePicker, Breadcrumb, Form, Tag, Row, Col, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { query } from '../common/query'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class UserInfo extends React.Component {
  constructor(props, context) {
    super(props, context);
    if (!sessionStorage.user) {
      window.history.go('/login');
    }
    console.log('lalalla');
    let data = JSON.parse(sessionStorage.user);
    this.state = {
      user_id: data.id,
      userName: data.user_login,
      userEmail: data.user_email,
      postUser: data.user_login,
    };
  }
  componentDidMount() {

  }
  handleBasicInfoSubmit(e) {
    e.preventDefault();
    console.log(this);
  }
  handleUpload(e) {
    if (e.file.status === 'done') {
      this.setState({ userAvator: e.file.response.data.url })
    }
  }
  handleNiceNameChange(e) {
    this.setState({ userNiceName: e.target.value });
  }
  handleNiceNameChange(e) {
    this.setState({ userNiceName: e.target.value });
  }
  handleNiceNameChange(e) {
    this.setState({ userNiceName: e.target.value });
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };
    return (
      <Form horizontal onSubmit={(e)=>this.handleBasicInfoSubmit(e)}>
        <FormItem
          {...formItemLayout}
          label="昵称：">
          <Input onChange={(e)=>this.handleNiceNameChange(e)} placeholder="请输入昵称" />
        </FormItem>
        <FormItem
          label="头像："
          {...formItemLayout}
          help="请上传你的个性头像">
          <Upload name="files" action="/upload" listType="picture"
            onChange={e=>this.handleUpload(e)}>
            <Button type="ghost">
              <Icon type="upload" /> 点击上传
            </Button>
          </Upload>
          <a href={this.state.userAvator} target="_blank" className="upload-example">
            <img src={this.state.userAvator} />
            <span>头像</span>
          </a>
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
          label="简介："
          help="随便写点什么">
          <Input type="textarea" placeholder="随便写" />
        </FormItem>
        <FormItem wrapperCol={{ span: 16, offset: 4 }} style={{ marginTop: 24 }}>
          <Button type="primary" htmlType="submit">确定</Button>
        </FormItem>
      </Form>
    );
  }
}

export { UserInfo };
