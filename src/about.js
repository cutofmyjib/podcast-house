import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="about-container">
          <h1 className="about-title">ABOUT THIS PROJECT</h1>
          <p className="about-desc">As a big fan of podcasts, podcast house's mission is to make it easier for our fellow podcast listeners to pick a playlist to listen to especially when you're on the go!</p>
        </div>
      </div>
    );
  }
}
