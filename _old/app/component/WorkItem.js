import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { Tag, Icon } from 'antd';

class WorkItem extends React.Component {
  render() {
    return (
      <div className="fadeInLeft projectItem" style={this.props.speed}>
        <h3>{this.props.data.project_title}</h3>
        <br/>
        <img className="img-res" src={this.props.data.project_image} alt=""/>
        <br/>
        <br/>
        <Tag><Icon type="tag"/> {this.props.data.project_class}</Tag>
        <Link to={"/work/" + this.props.id}>
          <div className="hover-slideUp">查看详情</div>
        </Link>
      </div>
    )
  }
}

export default WorkItem;
