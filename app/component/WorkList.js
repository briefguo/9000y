import React from 'react';
import { render } from 'react-dom';
import { query } from '../common/query';
import WorkItem from './WorkItem';

class WorkList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { data: null };
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
          <WorkItem
            speed={animatedSpeed}
            key={project.id}
            id={project.id}
            data={project} />
        );
      });
    }
    return (
      <div className="container center projectList">
        {workNodes}
      </div>
    )
  }
}
export { WorkList, WorkItem };
