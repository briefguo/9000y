import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { message, Tabs, Affix, DatePicker, Breadcrumb, Form, Tag, Row, Col, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { query } from '../common/query'
import { ManageWork, ManageNews } from './Manage';

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
      postUser: data.user_login,
    };
  }
  componentDidMount() {
    console.log(this);
  }
  handleBasicInfoSubmit(e) {

  }
  handleWorkSubmit(e) {
    e.preventDefault();
    if (!this.state.projectContent) {
      return;
    }
    query(this.state.url, this.state, (r) => {
      if (this.state.action == '新增') {
        this.props.history.pushState(null, '/work/' + r.data.info)
      } else {
        this.props.history.pushState(null, '/work/' + this.state.projectId)
      }
    })
  }
  handleWorkTitleChange(e) {
    this.setState({ projectTitle: e.target.value })
  }
  handleWorkContentChange(e) {
    this.setState({ projectContent: e.target.value })
  }
  handleWorkClassChange(e) {
    this.setState({ projectClass: e })
  }
  handleWorkUpload(e) {
    if (e.file.status === 'done') {
      this.setState({ projectImage: e.file.response.data.url })
    }
  }
  handleWorkDatePickerChange(e) {
    var time = new Date(e);
    e = time.toLocaleDateString().toString().replace(/\//g, '-');
    this.setState({ projectTime: e })
  }
  handleNewsSubmit(e) {
    e.preventDefault();
    if (!this.state.newsContent) {
      return;
    }
    query('News.createOneInfo', this.state, (r) => {
      this.props.history.pushState(null, '/news/list')
      setTimeout(function() {
        message.info('新闻发布成功');
      }, 100);
    })
  }
  handleTitleChange(e) {
    this.setState({ newsTitle: e.target.value })
  }
  handleContentChange(e) {
    this.setState({ newsContent: e.target.value })
  }
  handleClassChange(e) {
    this.setState({ newsClass: e })
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
      setTimeout(function() {
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
      <Tabs style={{minHeight:'700px'}} defaultActiveKey="1">
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
        <TabPane tab="添加新闻" key="3">
          <br/><br/>
          <Form horizontal onSubmit={e=>this.handleNewsSubmit(e)}>
            <FormItem
              id="newsTitle"
              label="标题："
              {...formItemLayout}>
              <Input id="newsTitle" onChange={e=>this.handleTitleChange(e)}/>
            </FormItem>
            <FormItem
              id="newContent"
              label="内容："
              {...formItemLayout}>
              <Input type="textarea" id="newContent" onChange={e=>this.handleContentChange(e)} rows="8" />
            </FormItem>
            <FormItem
              id="select"
              label="分类："
              {...formItemLayout}>
              <Select id="select" size="large" defaultValue="未分类" onChange={e=>this.handleClassChange(e)} style={{ width: 200 }}>
                <Option value="未分类">未分类</Option>
                <Option value="公司新闻">公司新闻</Option>
                <Option value="招聘信息" disabled>招聘信息</Option>
                <Option value="项目信息">项目信息</Option>
              </Select>
            </FormItem>
            <FormItem
              label=" "
              {...formItemLayout}>
              <Button htmlType="submit">新增</Button>
            </FormItem>
          </Form>
        </TabPane>
        <TabPane tab="添加案例" key="4">
          <br/><br/>
          <Form horizontal onSubmit={e=>this.handleWorkSubmit(e)}>
            <FormItem
              id="projectTitle"
              label="标题："
              {...formItemLayout}>
              <Input id="projectTitle"
                onChange={e=>this.handleWorkTitleChange(e)}/>
            </FormItem>
            <FormItem
              id="newContent"
              label="内容："
              {...formItemLayout}>
              <Input type="textarea"
                id="newContent"
                onChange={e=>this.handleWorkContentChange(e)}
                rows="8" />
            </FormItem>
            <FormItem
              id="select"
              label="分类："
              {...formItemLayout}>
              <Select id="select" size="large"
                defaultValue="未分类"
                onChange={e=>this.handleWorkClassChange(e)}
                style={{ width: 200 }}>
                <Option value="未分类">未分类</Option>
                <Option value="Web应用">Web应用</Option>
                <Option value="App应用">App应用</Option>
                <Option value="影视广告">影视广告</Option>
                <Option value="策划运营">策划运营</Option>
                <Option value="动漫游戏">动漫游戏</Option>
              </Select>
            </FormItem>
            <FormItem
              label="图片："
              {...formItemLayout}
              help="提示信息要长长长长长长长长长长长长长长">
              <Upload name="files" action="/upload" listType="picture"
                onChange={e=>this.handleWorkUpload(e)}>
                <Button type="ghost">
                  <Icon type="upload" /> 点击上传
                </Button>
              </Upload>
            </FormItem>
            <FormItem
              label="时间："
              {...formItemLayout}>
              <DatePicker onChange={(e)=>this.handleWorkDatePickerChange(e)}/>
            </FormItem>
            <FormItem
              label=" "
              {...formItemLayout}>
              <Button htmlType="submit">发布</Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    );
  }
}

export { UserDetail };
