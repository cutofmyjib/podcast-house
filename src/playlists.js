import React, { Component } from 'react';

export class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <img src={this.props.img} />
        <div className="playlist-content">
          <p className="playlist-duration">{this.props.duration}</p>
          <h1 className="playlist-title">{this.props.title}</h1>
          <p className="playlist-desc">{this.props.description}</p>
        </div>
      </div>
    );
  }
}