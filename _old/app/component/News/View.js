import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { NewsList } from './NewsList'

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

export { News };
