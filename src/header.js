import React, { Component } from 'react';
import { Link } from 'react-router';
import Home from './home';
import About from './about';
import Contact from './contact';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div id="site-name">
          <Link to='home'>{this.props.name}</Link>
        </div>
        <nav>
          <Link to='about'>{this.props.about}</Link>
          <Link to='contact'>{this.props.contact}</Link>
          <a href="#">{this.props.subscription}</a>
        </nav>
      </header>
    );
  }
}