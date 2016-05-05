import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { query } from '../../common/query'

class NewsDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      news_title: null,
      post_user: null,
      news_content: null,
      post_date: null,
    };
  }
  componentDidMount() {
    query('News.getBaseInfo', { newsId: this.props.params.id }, (r) => {
      this.setState({
        news_title: r.data.info.news_title,
        post_user: r.data.info.post_user,
        news_content: r.data.info.news_content,
        post_date: r.data.info.post_date,
      });
    })
  }
  render() {
    return (
      <div className="container center bg-white newsDetail content">
        <h2>{this.state.news_title}</h2>
        <p><small>{this.state.post_user} {this.state.post_date}</small></p>
        <br/>
        <article dangerouslySetInnerHTML={{__html:this.state.news_content}}></article>
      </div>
    )
  }
}

class NewsItem extends React.Component {
  render() {
    return (
      <div className="fadeInLeft newsItem" style={this.props.speed}>
        <h3>{this.props.data.news_title}</h3>
        <div>{this.props.data.news_class}</div>
        <div>{this.props.data.post_user}</div>
        <div className="hover-slideUp">
          <Link to={"/news/" + this.props.id}>查看详情</Link>
        </div>
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
