import React from 'react';
import { render } from 'react-dom';

class Work extends React.Component{
  render() {
    return (
      <div>
        <section id="Slider-works">
          <div className="container">
            <div className="panel-large">
              <div className="panel-title">
                <h1>我们正为XXX家企业提供着服务
                  <br/>
                  <small>我们提供Web应用开发、App定制开发、微信创意开发、互联网策划
                与运营、动漫游戏制作、广告宣传片制作、微电影制作等服务</small>
                </h1>
              </div>
              <div className="panel-body">
                <a className="hvr-fade" href="#">联系我们</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>作品案例
                <br/><small>产品开发、策划与运营、影视传播</small>
              </h2>
            </div>
          </div>
        </section>
        <section className="section-content">
          <div className="container-center">
            <div className="title-center">
              <h2>任务版
                <br/><small>团队正在进行的项目清单、项目进度</small>
              </h2>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export {Work};
