import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { Row, Col, Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      current: ''
    };
  }
  handleClick(e) {
    this.setState({
      current: e.key
    });
  }
  render() {
    return (
      <header>
        <Menu onClick={e=>this.handleClick(e)}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="index">
            <Link className="white" to="/">九千年文化</Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link className="white" to="/service">服务内容</Link>
          </Menu.Item>
          <Menu.Item key="work">
            <Link className="white" to="/work/project">产品案例</Link>
          </Menu.Item>
          <Menu.Item key="support">
            <Link className="white" to="/support">技术支持</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link className="white" to="/about">关于我们</Link>
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}
export { Header };
