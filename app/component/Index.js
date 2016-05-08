import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Carousel } from 'antd';

class Index extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="container-center">
            <div className="title-center animated fadeInUp">
              <h1>九千年文化<br/><small>一家致力于互联网应用、服务、解决方案的供应商</small></h1>
              <a className="hvr-fade animated-slow fadeInUp" href="#">了解详情</a>
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
          <div className="container center">
            <Carousel afterChange={e=>this.onChange(e)}>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
            </Carousel>
          </div>
        </section>
        <section className="bg-white">
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

export { Index };
