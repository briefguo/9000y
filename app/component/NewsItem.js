import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { Icon, Affix, Breadcrumb, Tag } from 'antd'

class NewsItem extends React.Component {
  render() {
    return (
      <div className="fadeInLeft newsItem" style={this.props.speed}>
        <h3>{this.props.data.news_title}</h3>
        <article>{this.props.data.news_content}</article>
        <div><Tag><Icon type="tag" /> {this.props.data.news_class}</Tag></div>
        <Link to={"/news/" + this.props.id}>
          <div className="hover-slideUp">查看详情</div>
        </Link>
      </div>
    )
  }
}

export { NewsItem };
