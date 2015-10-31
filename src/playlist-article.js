import React, { Component } from 'react';

export default class PlaylistArticle extends Component {
  render() {
    return (
      <section className="podcast-playlist">
        <div className="playlist-tracks">
          <h1>FEATURED CONTENT HERE</h1>
          <audio controls></audio>
          <div className="share"></div>
        </div>
      </section>
    );
  }
}