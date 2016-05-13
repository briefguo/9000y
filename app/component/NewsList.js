import React from 'react'
import { render } from 'react-dom'
import { query } from '../common/query'
import { NewsItem } from './NewsItem'
import { Row, Col } from 'antd'

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
          <Col key={news.id} span="8">
            <NewsItem speed={animatedSpeed} id={news.id} data={news} />
          </Col>
        );
      });
    }
    return (
      <div className="content newsList">
        <Row>
          {newsNodes}
        </Row>
      </div>
    )
  }
}
export { NewsList, NewsItem };
