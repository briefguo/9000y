import React from 'react'
import { render } from 'react-dom'
import { Link, browserHistory } from 'react-router'
import { Affix, Breadcrumb } from 'antd';
import { query } from '../common/query';
import { ManageNews } from './ManageNews'
import { ManageWork } from './ManageWork'

class Manage extends React.Component {

  render() {
    return (
      <div>
        <div className="bg-white content">
          <div className="content newsDetail">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export { Manage, ManageNews, ManageWork };
