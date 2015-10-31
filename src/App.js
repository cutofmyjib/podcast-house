import React, { Component } from 'react';
import Router from 'react-router';
import { RouteHandler } from 'react-router';
import Header from './header';
import Featured from './featured';
import PlaylistContainer from './playlist-container';
import Playlist from './playlists';
import Footer from './footer';
import routes from './routes';

export default class App extends Component {
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
      title: "7 Pieces of Wisdom That Will Change the Way You Work",
      desc: "Sustainable intelligentsia chartreuse yuccie brunch, chambray truffaut beard authentic fashion axe ugh letterpress shoreditch umami whatever. Flannel pabst microdosing mustache, chartreuse cardigan portland everyday carry tattooed mixtape cornhole. Sustainable vinyl shabby chic, heirloom 3 wolf moon four dollar toast synth offal blog. Blue bottle drinking vinegar typewriter, chillwave beard leggings you probably haven't heard of them. YOLO hella gastropub gentrify quinoa farm-to-table schlitz.",
      button: "Check it out"
    };
    const playlistProps = [{
      img: "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/27PNUR3Z83.jpg",
      duration: "1h 24m",
      title: "Nobody Knows What The Hell They Are Doing",
      description: "Austin viral whatever, mlkshk Odd Future 3 wolf moon squid aesthetic ugh beard butcher. Crucifix master cleanse viral jean shorts Banksy PBR selfies. Dreamcatcher scenester pickled chambray kitsch. Next level distillery you probably haven't heard of them tattooed. IPhone tofu occupy next level."
    }, {
      img: "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/5LXBN8H2CQ.jpg",
      duration: "1h 24m",
      title: "Purpose Is the New Bottom Line",
      description: "Sartorial pour-over fap, meditation keffiyeh green juice you probably haven't heard of them irony typewriter blog trust fund. Gastropub selvage poutine sriracha lomo mlkshk brooklyn neutra offal iPhone. Lomo shoreditch pabst, blue bottle PBR&B twee vice 3 wolf moon seitan cred try-hard."
    }, {
      img: "https://snap-photos.s3.amazonaws.com/img-thumbs/960w/J6P5U7BJ9T.jpg",
      duration: "1h 24m",
      title: "Achieve Goals By Gamifying Them",
      description: "Street art occupy four loko humblebrag, chambray pabst pug shabby chic actually meggings. Leggings franzen before they sold out, kogi bicycle rights mustache brunch flexitarian normcore listicle forage locavore messenger bag."
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
        <RouteHandler />
        <Featured {...featuredProps} />
        <PlaylistContainer data={playlistProps} />
        <Footer {...footerProps} />
      </div>
    );
  }
}




