import React from 'react';
import { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { query } from '../common/query';

import { Form, Input, Button, Upload, Select, Checkbox, Radio, DatePicker, Tooltip, Icon } from 'antd';

const FormItem = Form.Item;

class ManageWork extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      action: '新增',
      postUser: 'GYJ',
      url: 'Project.createOneInfo',
      id: null,
      projectId: null,
      projectClass: null,
      projectContent: null,
      projectTitle: null,
      projectImage: null,
      projectTime: null,
    };
  }
  componentDidMount() {
    console.log(this);
    if (this.props.params.id) {
      query('Project.getBaseInfo', { projectId: this.props.params.id }, (r) => {
        this.setState({
          action: '保存',
          postUser: 'GYJ',
          url: 'Project.updateOneInfo',
          projectId: this.props.params.id,
          projectClass: r.data.info.project_class,
          projectContent: r.data.info.project_content,
          projectTitle: r.data.info.project_title,
          projectImage: r.data.info.project_image,
          projectTime: r.data.info.project_time,
        });
      })
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.projectContent) {
      return;
    }
    console.log(this);
    query(this.state.url, this.state, (r) => {
      this.props.history.pushState(null, '/work')
    })
  }
  handleTitleChange(e) {
    this.setState({ projectTitle: e.target.value })
  }
  handleContentChange(e) {
    this.setState({ projectContent: e.target.value })
  }
  handleClassChange(e) {
    this.setState({ projectClass: e })
  }
  handleUpload(e) {
    if (e.file.status === 'done') {
      this.setState({ projectImage: e.file.response.data.url })
    }
  }
  handleDatePickerChange(e) {
    this.setState({ projectTime: e })
  }
  render() {
    return (
      <Form horizontal onSubmit={e=>this.handleSubmit(e)}>
        <FormItem
          id="projectTitle"
          label="标题："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Input id="projectTitle"
            value={this.state.projectTitle}
            onChange={e=>this.handleTitleChange(e)}/>
        </FormItem>
        <FormItem
          id="newContent"
          label="内容："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Input type="textarea"
            id="newContent"
            value={this.state.projectContent}
            onChange={e=>this.handleContentChange(e)}
            rows="8" />
        </FormItem>
        <FormItem
          id="select"
          label="分类："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Select id="select" size="large"
            defaultValue="未分类"
            value={this.state.projectClass}
            onChange={e=>this.handleClassChange(e)}
            style={{ width: 200 }}>
            <Option value="未分类">未分类</Option>
            <Option value="公司新闻">公司新闻</Option>
            <Option value="招聘信息" disabled>招聘信息</Option>
            <Option value="项目信息">项目信息</Option>
          </Select>
        </FormItem>
        <FormItem
          label="图片："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          help="提示信息要长长长长长长长长长长长长长长">
          <Upload name="files" defaultFile={this.state.projectImage} action="/upload" listType="picture"
            onChange={e=>this.handleUpload(e)}>
            <Button type="ghost">
              <Icon type="upload" /> 点击上传
            </Button>
          </Upload>
        </FormItem>
        <FormItem
          label="时间："
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <DatePicker value={this.state.projectTime} onChange={(e)=>this.handleDatePickerChange(e)} />
        </FormItem>
        <FormItem
          label=" "
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}>
          <Button htmlType="submit">{this.state.action}</Button>
        </FormItem>
      </Form>
    );
  }
}

export { ManageWork };