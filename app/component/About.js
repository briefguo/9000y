import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { NewsList } from './News';
import { Company } from './Company';

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="bannar">
          <div className="absolute container-center bannar-text">
            <div className="title-center animated fadeInUp">
              <h2>关于我们
                <br/>
                <small>专注于互联网服务提供、Web应用开发、解决方案策划等</small>
              </h2>
              <br/>
              <Link className="hvr-fade animated-slow fadeInUp" to="/company">了解公司</Link>
            </div>
          </div>
          <div className="background-wrapper">
            <figure>
              <img src="/public/images/bannar-4.jpg" alt=""/>
            </figure>
          </div>
        </div>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>公司新闻<br/><small>产品开发、策划与运营、影视传播</small><br/></h2>
            </div>
          </div>
          <div className="center">
            <NewsList limit="3"/>
            <br/>
            <Link className="hvr-fade" to="/news/list">查看更多</Link>
          </div>
        </section>
        <section className="bg-grey">
          <div className="container-center">
            <div className="title-center">
              <h2>招贤纳士<br/><small>我们需要什么样的人才，产品开发、策划与运营、影视传播</small></h2>
            </div>
          </div>
          <div className="container">

          </div>
        </section>
      </div>
    )
  }
}

export { About, Company };
