import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { Spin } from 'antd'

// const t0 = new Date().getTime();

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {

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
