import React, { Component } from 'react';

class SiteName extends Component {
  render() {
    return (
      <div id="site-name">
        <a href="#">{this.props.name}</a>
      </div>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <SiteName name="podcast house" />
      </div>
    );
  }
}