import React from 'react'
import { render } from 'react-dom'
import { Link, browserHistory } from 'react-router'
import { Affix, Breadcrumb, Row, Col } from 'antd';
import { query } from '../common/query';
import { ManageNews } from './ManageNews'
import { ManageWork } from './ManageWork'
class Manage extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-white content">
          <div className="content">
            <Row>
            <Col span="14">
            {this.props.children}
            </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
export { Manage, ManageNews, ManageWork };
