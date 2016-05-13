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
          <WorkList limit="5"></WorkList>
        </section>
        <section className="bg-grey">
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
