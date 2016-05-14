import React from 'react';
import { render } from 'react-dom';
import { Icon, Affix, Breadcrumb, Tag, Row, Col } from 'antd';
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
    query('project.getBaseInfo', {
      projectId: this.props.params.id
    }, (r) => {
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
      <div className="bg-white projectDetail content">
        <div className="content">
          <Affix>
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>作品案例</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.projectClass}</Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.projectTitle}</Breadcrumb.Item>
            </Breadcrumb>
          </Affix>
          <br/><br/><br/>
          <Row>
            <Col span="12">
              <img className="img-res" src={this.state.projectImage} alt=""/>
            </Col>
            <Col span="11" offset="1">
              <h2>{this.state.projectTitle}<small> {this.state.projectTime}</small></h2>
              <br/>
              <article>
                <div dangerouslySetInnerHTML={{__html:this.state.projectContent}}></div>
              </article>
              <br/>
              <Tag><Icon type="tag"/> {this.state.projectClass}</Tag>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
export default WorkDetail;
