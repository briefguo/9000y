import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'
import { message, Row, Col, Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      current: '',
      key: 'none',
      id: '',
      action: '登陆',
      actionCode: 'login',
    };
  }
  handleClick(e) {
    this.setState({
      current: e.key
    });
  }
  handleLogin(e) {
    if (this.state.actionCode == 'logout') {
      e.preventDefault();
      message.info('注销成功');
      setTimeout(function() {
        window.location.href = '/login';
      }, 500);
    }
  }
  componentDidMount() {
    if (sessionStorage.user) {
      let data = JSON.parse(sessionStorage.user);
      this.setState({
        key: 'user',
        id: data.id,
        action: '注销',
        user: data.user_login,
        actionCode: 'logout'
      });
      // console.log(this, data);
    }
  }
  render() {
    return (
      <header>
        <Menu onClick={e=>this.handleClick(e)}
          selectedKeys={[this.state.current]}
          mode="horizontal">
          <Menu.Item key="index">
            <Link to="/">九千年文化</Link>
          </Menu.Item>
          <Menu.Item key="service">
            <Link to="/service">服务内容</Link>
          </Menu.Item>
          <Menu.Item key="work">
            <Link to="/work/project">产品案例</Link>
          </Menu.Item>
          <Menu.Item key="support">
            <Link to="/support">技术支持</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about">关于我们</Link>
          </Menu.Item>
          <Menu.Item style={{float:'right',display:this.state.key}} key={this.state.key}>
            <Link to={"/user/"+this.state.id}>{this.state.user}</Link>
          </Menu.Item>
          <Menu.Item style={{float:'right'}} key={this.state.action}>
            <Link to={this.state.actionCode} onClick={(e)=>this.handleLogin(e)}>{this.state.action}</Link>
          </Menu.Item>
        </Menu>
      </header>
    )
  }
}
export { Header };
