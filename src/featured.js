import React, { Component } from 'react';
import Router from 'react-router';
import { Link } from 'react-router';

export default class Featured extends Component {
  render() {
    return (
      <section id="featured">
        <img src={this.props.img} />
        <div id="featured-content">
          <p id="featured-duration">{this.props.duration}</p>
          <h1 id="featured-title">{this.props.title}</h1>
          <p id="featured-desc">{this.props.desc}</p>
          <Link to='playlist'><button id="featured-button">{this.props.button}</button></Link>
        </div>
      </section>
    );
  }
}