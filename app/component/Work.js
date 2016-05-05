import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { query } from '../common/query'

class WorkDetail extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      projectClass: null,
      projectTitle: null,
      projectContent: null,
      projectTime: null,
      projectImage: null,
      lastMotify: null,
    };
  }
  componentDidMount() {
    query('project.getBaseInfo', { projectId: this.props.params.id }, (r) => {
      this.setState({
        projectClass: r.data.info.project_class,
        projectTitle: r.data.info.project_title,
        projectContent: r.data.info.project_content,
        projectImage: r.data.info.project_image,
        projectTime: r.data.info.project_time,
        lastMotify: r.data.info.last_motify,
      });
    })
  }
  render() {
    return (
      <div className="container center bg-white projectDetail content">
        <h2>{this.state.projectTitle}</h2>
        <p><small>{this.state.projectClass} {this.state.projectTime}</small></p>
        <img src={this.state.projectImage+'.jpg'} alt=""/>
        <br/>
        <article dangerouslySetInnerHTML={{__html:this.state.projectContent}}></article>
      </div>
    )
  }
}

class WorkItem extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="fadeInLeft projectItem" style={this.props.speed}>
        <h3>{this.props.data.project_title}</h3>
        <div>{this.props.data.project_class}</div>
        <img src={this.props.data.project_image} alt=""/>
        <div>{this.props.data.project_time}</div>
        <div>{this.props.data.post_user}</div>
        <div className="hover-slideUp">
          <Link to={"/work/" + this.props.id}>查看详情</Link>
        </div>
      </div>
    )
  }
}
class WorkList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: ''
    };
  }
  componentDidMount() {
    query('Project.getAllInfo', '', (r) => {
      if (this.props.limit) {
        r.data.info = r.data.info.slice(0, this.props.limit)
      }
      this.setState({ data: r.data.info });
    })
  }
  render() {
    if (this.state.data) {
      var workNodes = this.state.data.map((project, speed = 4) => {
        // 设置有层次的动画
        speed = speed * 0.1;
        var animatedSpeed = {
          WebkitAnimationDuration: speed + 's',
          animationDuration: speed + 's',
          WebkitAnimationFillMode: 'both',
          animationFillMode: 'both'
        }
        return (
          <WorkItem speed={animatedSpeed} key={project.id} id={project.id} data={project} />
        );
      });
    }
    return (
      <div className="container start projectList">
        {workNodes}
      </div>
    )
  }
}

class Work extends React.Component {
  render() {
    return (
      <div>
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
        <section>
          <div className="container-center">
            <div className="title-center">
              <h2>作品案例
                <br/><small>产品开发、策划与运营、影视传播</small>
              </h2>
            </div>
          </div>
          <WorkList limit="3"></WorkList>
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

export { Work, WorkDetail };
