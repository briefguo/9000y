import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import { message, Affix, Breadcrumb, Form, Tag, Row, Col, Input, Button, Upload, Select, Checkbox, Radio, Tooltip, Icon } from 'antd';
import { query } from '../common/query'
import { UserDetail } from './UserDetail'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class User extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="content">
          <Row>
            <Col span="14">
              {this.props.children}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export { User, UserDetail };
