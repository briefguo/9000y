import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { Icon, Affix, Breadcrumb, Tag } from 'antd'
import { query } from '../common/query'

class NewsDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      news_title: null,
      post_user: null,
      news_content: null,
      post_date: null,
      news_class: null,
    };
  }
  componentDidMount() {
    query('News.getBaseInfo', {
      newsId: this.props.params.id
    }, (r) => {
      this.setState({
        news_title: r.data.info.news_title,
        post_user: r.data.info.post_user,
        news_content: r.data.info.news_content,
        post_date: r.data.info.post_date,
        news_class: r.data.info.news_class,
      });
    })
    console.log(this);
  }
  render() {
    return (
      <div className="content">
        <Affix>
          <Breadcrumb>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item href="">新闻</Breadcrumb.Item>
            <Breadcrumb.Item href="">{this.state.news_class}</Breadcrumb.Item>
            <Breadcrumb.Item>{this.state.news_title}</Breadcrumb.Item>
          </Breadcrumb>
        </Affix>
        <br/><br/><br/>
        <div className="newsDetail">
          <h2>{this.state.news_title}</h2>
          <p><small>{this.state.post_user} {this.state.post_date}</small></p>
          <br/>
          <article dangerouslySetInnerHTML={{__html:this.state.news_content}}></article>
        </div>
      </div>
    )
  }
}
export { NewsDetail };
