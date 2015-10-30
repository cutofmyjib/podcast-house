import React, { Component } from 'react';

class PlaylistContainer extends Component {
  render() {
    // const podcastPlaylists = this.props.data.map(function(data){
    //   return <Playlist {...data} />
    // })
    const podcastPlaylists = this.props.data.map(data =>
      <Playlist {...data} />)
    return (
      <div className="playlists">
        {podcastPlaylists}
      </div>
    );
  }
}