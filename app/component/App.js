import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './Header'
import { Footer } from './Footer'

class App extends React.Component {
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
