import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { WorkList, WorkItem } from './WorkList';
import { Project } from './Project';
import WorkDetail from './WorkDetail';

class Work extends React.Component {
  render() {
    console.log(this);
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export { Work, WorkDetail, WorkList, WorkItem, Project };
