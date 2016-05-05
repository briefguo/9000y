import React from 'react'
import { render } from 'react-dom'
import { Link, browserHistory } from 'react-router'
import { query } from '../common/query';
import { ManageNews } from './ManageNews'
import { ManageWork } from './ManageWork'

class Manage extends React.Component {
  render() {
    return (
      <section className="bg-white">
        {this.props.children}
      </section>
    )
  }
}
export { Manage };
