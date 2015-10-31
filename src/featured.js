import React, { Component } from 'react';
import { Route } from 'react-router';

export default class Featured extends Component {
  handleClick() {
    alert("clicked");
  }
  render() {
    return (
      <section id="featured">
        <img src={this.props.img} />
        <div id="featured-content">
          <p id="featured-duration">{this.props.duration}</p>
          <h1 id="featured-title">{this.props.title}</h1>
          <p id="featured-desc">{this.props.desc}</p>
          <button id="featured-button" onClick={this.handleClick}>{this.props.button}</button>
        </div>
      </section>
    );
  }
}