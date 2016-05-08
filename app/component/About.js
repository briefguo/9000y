import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { NewsList } from './News';

class About extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container-center">
            <div className="title-center animated fadeInUp">
              <h2>关于我们
                <br/>
                <small>专注于互联网服务提供、Web应用开发、解决方案策划等</small>
              </h2>
              <br/>
              <a className="hvr-fade animated-slow fadeInUp" href="#" id="btn-play">了解公司</a>
            </div>
          </div>
        </section>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>公司新闻<br/><small>产品开发、策划与运营、影视传播</small><br/></h2>
            </div>
          </div>
          <div className="container">
          </div>
          <div className="container-center">
            <div className="title-center">
              <div className="panel-body">
                <NewsList className="inline center" limit="4"/>
                <br/>
                <br/>
                <Link className="hvr-fade" to="/news/list">查看更多</Link>
              </div>
            </div>
          </div>
        </section>
        <section id="Content-contact" className="bg-white">
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

export { About };
