import React, { Component } from 'react';
import Header from './header';
import Featured from './featured';
import PlaylistContainer from './playlist-container';
import Playlist from './playlists';
import Footer from './footer';

export class App extends Component {
  render() {
    const headerProps = {
      name: "podcast house",
      about: "about",
      contact: "contact us",
      subscription: "my subscription"
    };
    const featuredProps = {
      img: "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/E7CD4AAEF3.jpg",
      duration: "1h 30m",
      title: "Featured Podcast Playlist Title",
      desc: "Austin viral whatever, mlkshk Odd Future 3 wolf moon squid aesthetic ugh beard butcher. Crucifix master cleanse viral jean shorts Banksy PBR selfies. Dreamcatcher scenester pickled chambray kitsch. Next level distillery you probably haven't heard of them tattooed. IPhone tofu occupy next level.",
      button: "Check it out"
    };
    const playlistProps = [{
      img: "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/27PNUR3Z83.jpg",
      duration: "1h 24m",
      title: "Podcast Playlist Title",
      description: "Rub face on owner shove bum in owner's face like camera lens. Why must they do that. Sits on keyboard, spit up on light gray carpet instead of adjacent linoleum destroy couch as revenge for chew iPad power cord chew iPad power cord chase dog then run away. Hide from vacuum cleaner chew on cable, and intently sniff hand, or see owner, run in terror, chase dog then run away for cough furball but hiss at vacuum cleaner."
    }, {
      img: "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/5LXBN8H2CQ.jpg",
      duration: "1h 24m",
      title: "Podcast Playlist Title",
      description: "Rub face on owner shove bum in owner's face like camera lens run in terror, chase dog then run away for cough furball but hiss at vacuum cleaner."
    }, {
      img: "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/J6P5U7BJ9T.jpg",
      duration: "1h 24m",
      title: "Podcast Playlist Title",
      description: "Rub face on owner shove bum in owner's face like camera lens. Why must they do that. Hide from vacuum cleaner chew on cable, and intently sniff hand, or see owner, run in terror, chase dog then run away for cough furball but hiss at vacuum cleaner."
    }];
    const footerProps = {
      twitter: "twitter",
      instagram: "instagram",
      facebook: "facebook",
      madeby: "made with ♥ by cutofmyjib",
      madebyhref: "http://cutofmyjib.github.io"
    }

    return (
      <div>
        <Header {...headerProps} />
        <Featured {...featuredProps} />
        <PlaylistContainer data={playlistProps} />
        <Footer {...footerProps} />
      </div>
    );
  }
}



