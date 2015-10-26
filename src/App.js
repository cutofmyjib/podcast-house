import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div id="site-name">
          <a href="#">{this.props.name}</a>
        </div>
        <nav>
          <a href="#">{this.props.about}</a>
          <a href="#">{this.props.contact}</a>
          <a href="#">{this.props.subscription}</a>
        </nav>
      </header>
    );
  }
}


export class App extends Component {
  render() {
    return (
      <div>
        <Header name="podcast house"
                about="about"
                contact="contact us"
                subscription="my subscription" />
      </div>
    );
  }
}