import React, { Component } from 'react';

export default class PlaylistArticle extends Component {
  render() {
    return (
      <div>
        <div className="podlist">
          <div className="background-tamer">
          </div>
          <div className="podlist-content">
            <h1 className="podlist-title">Featured Content Here</h1>
            <audio controls></audio>
          </div>
        </div>
      </div>
    );
  }
}
