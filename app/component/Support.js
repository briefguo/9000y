import React from 'react';
import { render } from 'react-dom';

class Support extends React.Component {
  render() {
    return (
      <div>
        <section id="Slider-services">
          <div className="container-center">
            <div className="panel">
              <div className="panel-title animated fadeInRight">
                <h2>我们为您提供有保障的支持
                  <br/><small>我们提供Web应用开发、App定制开发、微信创意开发、互联网策划
                与运营、动漫游戏制作、广告宣传片制作、微电影制作等服务</small>
                </h2>
              </div>
              <br/>
              <div className="panel-body animated-slow fadeInUp">
                <a className="hvr-fade hvr-pianyi" href="#">了解详情</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>技术保障
                  <br/>
                  <small>产品开发、策划与运营、影视传播</small>
                </h2>
            </div>
          </div>
        </section>
        <section id="Content-progress" className="section-content">
          <div className="container-center">
            <div className="title-center">
              <h2>服务流程
                  <br/>
                  <small>产品开发、策划与运营、影视传播</small>
                </h2>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export { Support };
