import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div id="site-name">
          <a href="#">{this.props.name}</a>
        </div>
        <nav>
          <a href="#">{this.props.about}</a>
          <a href="#">{this.props.contact}</a>
          <a href="#">{this.props.subscription}</a>
        </nav>
      </header>
    );
  }
}

class Featured extends Component {
  render() {
    return (
      <section id="featured">
        <img src={this.props.img} />
        <div id="featured-content">
          <p id="featured-duration">{this.props.duration}</p>
          <h1 id="featured-title">{this.props.title}</h1>
          <p id="featured-desc">{this.props.desc}</p>
          <button id="featured-button">{this.props.button}</button>
        </div>
      </section>
    );
  }
}

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

class Playlist extends Component {
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

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="follow">
          <a href="#">{this.props.twitter}</a>
          <a href="#">{this.props.instagram}</a>
          <a href="#">{this.props.facebook}</a>
        </div>
        <p><a href={this.props.madebyhref}>{this.props.madeby}</a></p>
      </footer>
    );
  }
}

export class App extends Component {
  render() {
    const headerProps = {
      name: "podcast house",
      about: "about",
      contact: "contact us",
      subscription: "my subscription"
    };
    const featuredProps = {
      img: "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg",
      duration: "1h 30m",
      title: "Featured Podcast Playlist Title",
      desc: "Austin viral whatever, mlkshk Odd Future 3 wolf moon squid aesthetic ugh beard butcher. Crucifix master cleanse viral jean shorts Banksy PBR selfies. Dreamcatcher scenester pickled chambray kitsch. Next level distillery you probably haven't heard of them tattooed. IPhone tofu occupy next level.",
      button: "Check it out"
    };
    const playlistProps = [{
      img: "http://i3.kym-cdn.com/photos/images/original/000/581/251/5af.jpg",
      duration: "1h 24m",
      title: "Podcast Playlist Title",
      description: "Rub face on owner shove bum in owner's face like camera lens. Why must they do that. Sits on keyboard, spit up on light gray carpet instead of adjacent linoleum destroy couch as revenge for chew iPad power cord chew iPad power cord chase dog then run away. Hide from vacuum cleaner chew on cable, and intently sniff hand, or see owner, run in terror, chase dog then run away for cough furball but hiss at vacuum cleaner."
    }, {
      img: "http://img.ifcdn.com/images/5aa617f17978baf23e992f1e86c038627c11d9a6300fabc7b939d09508a273e0_1.jpg",
      duration: "1h 24m",
      title: "Podcast Playlist Title",
      description: "Rub face on owner shove bum in owner's face like camera lens run in terror, chase dog then run away for cough furball but hiss at vacuum cleaner."
    }, {
      img: "http://i0.kym-cdn.com/photos/images/facebook/000/733/489/6c3.jpg",
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



