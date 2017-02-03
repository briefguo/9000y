import React from 'react';
// import { Header } from './Header';
import { Footer } from './Footer';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
    };
  }
  componentDidMount() {
    console.log(this);
  }
  render() {
    return (
      <div>
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export { App };
