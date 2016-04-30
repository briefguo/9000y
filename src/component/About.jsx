import React from 'react';
import { render } from 'react-dom';

class News extends React.Component{
  render() {
    return (
      <div>
        新闻lalall99999
      </div>
    )
  }
}

class About extends React.Component{
  render() {
    return (
      <div>
        欢迎，来到关于我们
        <News></News>
      </div>
    )
  }
}

export {About};
