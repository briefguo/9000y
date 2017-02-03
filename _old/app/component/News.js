import React from 'react'
import { render } from 'react-dom'
import { NewsDetail } from './NewsDetail'
import { NewsList, NewsItem } from './NewsList'

class News extends React.Component {
  render() {
    return (
      <div className="news">
        {this.props.children}
      </div>
    )
  }
}

export { News, NewsList, NewsItem, NewsDetail };
