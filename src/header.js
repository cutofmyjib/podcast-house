import React, { Component } from 'react';

export default class Header extends Component {
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