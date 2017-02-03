import React from 'react';
import { render } from 'react-dom';
import { Timeline } from 'antd';

class Service extends React.Component {
  render() {
    return (
      <div>
        <div className="bannar">
          <div className="panel absolute bannar-text">
            <div className="panel-title ml-100 animated fadeInUp">
              <h2>产品开发、策划运营支持、影视传播<br/>
                <small>我们提供Web应用开发、App定制开发、微信创意开发、互联网策划与  运营、动漫游戏制作、广告宣传片制作、微电影制作等服务</small>
              </h2>
              <br/>
              <a className="hvr-fade hvr-pianyi animated-slow fadeInUp" href="#">了解详情</a>
            </div>
          </div>
          <div className="background-wrapper">
            <figure>
              <img src="/public/images/bannar-2.jpg" alt=""/>
            </figure>
          </div>
        </div>
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
              <br/><br/><br/>
              <Timeline>
                <Timeline.Item>创建服务现场 2015-09-01</Timeline.Item>
                <Timeline.Item>初步排除网络异常 2015-09-01</Timeline.Item>
                <Timeline.Item>技术测试异常 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
                <Timeline.Item>网络异常正在修复 2015-09-01</Timeline.Item>
              </Timeline>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export { Service };
