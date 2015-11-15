import React, { Component } from 'react';

export default class PlaylistArticle extends Component {
  render() {
    var podlistStyle= { backgroundImage: 'url(https://snap-photos.s3.amazonaws.com/img-thumbs/960w/E7CD4AAEF3.jpg)',
                        backgroundSize: 'cover' }

    return (
      <div>
        <div className="podlist" style={podlistStyle}>
          <div className="background-tamer">
          </div>
          <div className="podlist-content-containter">
            <div className="podlist-content">
              <h1 className="podlist-title">Featured Content Here</h1>
              <h4>1hr 40m</h4>
              <h4>7 talks</h4>
              <div className="audio"><audio src="your-source-here"></audio></div>
            </div>
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
        <div className="playlist-tracks">
          <ol>
            <li>Title of track</li>
            <p>duration</p>
            <li></li>
            <li></li>
            <li></li>
          </ol>
        </div>
      </div>
    );
  }
}
