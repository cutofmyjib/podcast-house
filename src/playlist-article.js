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
          <div className="share-playlist">
            <ul className="share-icons">
              <li><a href="#"><img src="/static/twitter-icon.png" /></a></li>
              <li><a href="#"><img src="/static/facebook-icon.png" /></a></li>
              <li><a href="#"><img src="/static/linkedin-icon.png" /></a></li>
              <li><a href="#"><img src="/static/email-icon.png" /></a></li>
            </ul>
          </div>
      </div>
    );
  }
}
