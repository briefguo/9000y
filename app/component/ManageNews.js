import React from 'react';
import { render } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import { query } from '../common/query';

import { Affix, Breadcrumb, Form, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';

const FormItem = Form.Item;

class ManageNews extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      action: '新增',
      postUser: 'GYJ',
      url: 'News.createOneInfo',
      id: null,
      newsClass: '',
      newsContent: '',
      newsTitle: '',
    };
  }
  componentDidMount() {
    if (this.props.params.id) {
      query('News.getBaseInfo', { newsId: this.props.params.id }, (r) => {
        this.setState({
          action: '保存',
          postUser: 'GYJ',
          url: 'News.updateOneInfo',
          newsId: this.props.params.id,
          newsClass: r.data.info.news_class,
          newsContent: r.data.info.news_content,
          newsTitle: r.data.info.news_title,
        });
      })
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newsContent) {
      return;
    }
    query(this.state.url, this.state, (r) => {
      this.props.history.pushState(null, '/news')
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
  render() {
    return (
      <div>
        <Affix>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>新闻</Breadcrumb.Item>
            <Breadcrumb.Item>编辑</Breadcrumb.Item>
          </Breadcrumb>
        </Affix>
        <br/><br/><br/>
        <Form horizontal onSubmit={e=>this.handleSubmit(e)}>
          <FormItem
            id="newsTitle"
            label="标题："
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Input id="newsTitle" value={this.state.newsTitle} onChange={e=>this.handleTitleChange(e)}/>
          </FormItem>
          <FormItem
            id="newContent"
            label="内容："
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Input type="textarea" id="newContent" value={this.state.newsContent} onChange={e=>this.handleContentChange(e)} rows="8" />
          </FormItem>
          <FormItem
            id="select"
            label="分类："
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Select id="select" size="large" defaultValue="未分类" value={this.state.newsClass} onChange={e=>this.handleClassChange(e)} style={{ width: 200 }}>
              <Option value="未分类">未分类</Option>
              <Option value="公司新闻">公司新闻</Option>
              <Option value="招聘信息" disabled>招聘信息</Option>
              <Option value="项目信息">项目信息</Option>
            </Select>
          </FormItem>
          <FormItem
            label=" "
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}>
            <Button htmlType="submit">{this.state.action}</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export { ManageNews };
