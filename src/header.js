import React, { Component } from 'react';
import { Link } from 'react-router';
import Home from './home';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="site-name">
          <Link to='home'>{this.props.name}</Link>
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