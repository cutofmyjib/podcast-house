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

class Playlist extends Component {
  render
}

export class App extends Component {
  render() {
    const featuredProps = {
      img="https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg"
                  duration="1h 30m"
                  title="Featured Podcast Playlist Title"
                  desc="Austin viral whatever, mlkshk Odd Future 3 wolf moon squid aesthetic ugh beard butcher. Crucifix master cleanse viral jean shorts Banksy PBR selfies. Dreamcatcher scenester pickled chambray kitsch. Next level distillery you probably haven't heard of them tattooed. IPhone tofu occupy next level."
                  button="Check it out"
    }
    return (
      <div>
        <Header name="podcast house"
                about="about"
                contact="contact us"
                subscription="my subscription" />
        <Featured {...featuredProps}/>
      </div>
    );
  }
}



