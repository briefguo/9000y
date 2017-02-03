import React from 'react';
import { render } from 'react-dom';
import { query } from '../common/query';
import WorkItem from './WorkItem';
import { Row, Col } from 'antd';

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
          <Col key={project.id} span="4">
            <WorkItem
              speed={animatedSpeed}
              id={project.id}
              data={project} />
          </Col>
        );
      });
    }
    return (
      <Row className="container center projectList">
        {workNodes}
      </Row>
    )
  }
}
export { WorkList, WorkItem };
