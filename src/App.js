import React, { Component } from 'react';
import Router from 'react-router';
import { RouteHandler } from 'react-router';
import Header from './header';
import Home from './home';
import About from './about';
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
        <Footer {...footerProps} />
      </div>
    );
  }
}




