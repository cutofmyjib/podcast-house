import React, { Component } from 'react';
import { Route } from 'react-router';
import App from './App';
import Home from './home';
import About from './about';
import Contact from './contact';
import Featured from './featured';
import PlaylistArticle from './playlist-article';

let routes = (
  <Route name='app' path='/' handler={App} >
    <Route name='home' path='/' handler={Home} />
    <Route name='about' path='/about' handler={About} />
    <Route name='contact' path='/contact' handler={Contact} />
    <Route name='playlist' path='/playlist' handler={PlaylistArticle} />
  </Route>
);

export default routes;