import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { WorkList, WorkItem } from './WorkList';

class Project extends React.Component {
  render() {
    return (
      <div>
        <section className="bg-gray">
          <div className="container center">
            <div className="title-center">
              <h2>产品案例
                <br/><small>产品开发、策划与运营、影视传播</small>
              </h2>
            </div>
          </div>
          <br/><br/>
          <WorkList limit="3"></WorkList>
        </section>
        <section className="bg-white">
          <div className="container-center">
            <div className="panel-large">
              <div className="panel-title animated fadeInRight">
                <h2>我们正为XXX家企业提供着服务
                  <br/>
                  <small>我们提供Web应用开发、App定制开发、微信创意开发、互联网策划
                与运营、动漫游戏制作、广告宣传片制作、微电影制作等服务</small>
                </h2>
              </div>
              <br/>
              <div className="panel-body animated-slow fadeInUp">
                <Link className="hvr-fade hvr-pianyi" to="/about">联系我们</Link>
              </div>
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
    );
  }
}

export { Project }
