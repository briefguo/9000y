import React from 'react';
import { Carousel } from 'antd';
import { WorkList } from './WorkList';
import drawMap from '../common/drawMap';

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    drawMap('#chinamap');
  }
  render() {
    return (
      <div>
        <Carousel effect="fade">
          <div className="bannar">
            <div className="absolute bannar-text">
              <div className="title-center animated fadeInUp">
                <h1>九千年文化<br/><small>一家致力于互联网应用、服务、解决方案的供应商</small></h1>
                <br/>
                <a className="hvr-fade animated-slow fadeInUp" href="#">了解详情</a>
              </div>
            </div>
            <div className="background-wrapper">
              <figure>
                <img src="/public/images/bannar-1.jpg" alt=""/>
              </figure>
            </div>
          </div>
          <div className="bannar">
            <div className="absolute container-center bannar-text">
              <div className="title-center animated fadeInUp">
                <h2>关于我们
                  <br/>
                  <small>专注于互联网服务提供、Web应用开发、解决方案策划等</small>
                </h2>
                <br/>
                <a className="hvr-fade animated-slow fadeInUp" href="#" id="btn-play">了解公司</a>
              </div>
            </div>
            <div className="background-wrapper">
              <figure>
                <img src="/public/images/bannar-5.jpg" alt=""/>
              </figure>
            </div>
          </div>
        </Carousel>
        <section>
          <div className="container-center" id="chinamap"></div>
        </section>
        <section className="bg-white">
          <div className="container-center">
            <div className="title-center">
              <h2>作品案例<br/><small>产品开发、策划与运营、影视传播</small></h2>
            </div>
          </div>
          <div className="content">
            <WorkList limit="6" />
          </div>
        </section>
      </div>
    );
  }
}

export { Index };
