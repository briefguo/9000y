import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Spin } from 'antd'

const t0 = new Date().getTime();

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    };
    // console.log(1, 'lalalal', document);
  }
  componentDidMount() {
    // const now = new Date().getTime();
    // window.onload = function() {
    //   var latency = now - t0;
    //   alert("page loading time: " + latency);
    //   // this.setState({ loading: false });
    //   // console.log(2, 'lalalal', window.onload);
    // }
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export { App };
