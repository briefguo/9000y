import React from 'react';
import { render } from 'react-dom';

class Service extends React.Component{
  render() {
    return (
      <div>
        <section>
          <div className="">
            <div className="container">
              <div className="title-center">
                <h1>产品开发、策划运营支持、影视传播<br/>
                    <small>我们提供Web应用开发、App定制开发、微信创意开发、互联网策划与  运营、动漫游戏制作、广告宣传片制作、微电影制作等服务</small>
                  </h1>
                <a className="hvr-fade" href="#">了解详情</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>服务内容
                  <br/><small>产品开发、策划与运营、影视传播</small>
                </h2>
            </div>
          </div>
        </section>
        <section>
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

export {Service};
