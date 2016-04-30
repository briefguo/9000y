import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

class Index extends React.Component{
  render() {
    return (
      <div>
        <section>
          <div className="container-center">
            <div className="title-center">
              <div className="panel-title">
                <h1>九千年文化<br/><small>一家致力于互联网应用、服务、解决方案的供应商</small></h1>
              </div>
              <div className="panel-body">
                <a className="hvr-fade" href="#">了解详情</a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>服务范围
                <br/>
                <small>产品开发、策划与运营、影视传播</small>
              </h2>
            </div>
          </div>
          <div className="container">

          </div>
        </section>
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>作品案例<br/><small>产品开发、策划与运营、影视传播</small></h2>
            </div>
          </div>
          <div className="container">

          </div>
        </section>
      </div>
    )
  }
}

export {Index};
