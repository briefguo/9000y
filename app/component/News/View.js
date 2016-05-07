import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { query } from '../../common/query'
import { Icon, Affix, Breadcrumb, Tag } from 'antd';

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
    query('News.getBaseInfo', { newsId: this.props.params.id }, (r) => {
      this.setState({
        news_title: r.data.info.news_title,
        post_user: r.data.info.post_user,
        news_content: r.data.info.news_content,
        post_date: r.data.info.post_date,
        news_class: r.data.info.news_class,
      });
    })
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

class NewsList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: ''
    };
  }
  componentDidMount() {
    query('News.getAllInfo', '', (r) => {
      if (this.props.limit) {
        r.data.info = r.data.info.slice(0, this.props.limit)
      }
      this.setState({ data: r.data.info });
    })
  }
  render() {
    if (this.state.data) {
      var newsNodes = this.state.data.map((news, speed = 4) => {
        // 设置有层次的动画
        speed = speed * 0.1;
        var animatedSpeed = {
          WebkitAnimationDuration: speed + 's',
          animationDuration: speed + 's',
          WebkitAnimationFillMode: 'both',
          animationFillMode: 'both'
        }
        return (
          <NewsItem speed={animatedSpeed} key={news.id} id={news.id} data={news} />
        );
      });
    }
    return (
      <div className="container start newsList">
        {newsNodes}
      </div>
    )
  }
}

class News extends React.Component {
  render() {
    return (
      <div className="news">
        {this.props.children}
        <NewsList limit={this.props.limit}></NewsList>
      </div>
    )
  }
}

export { News, NewsDetail, NewsList };
