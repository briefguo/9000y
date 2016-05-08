import React from 'react'
import { render } from 'react-dom'
import { query } from '../common/query'
import { NewsItem } from './NewsItem'

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
export { NewsList, NewsItem };
