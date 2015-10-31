import React, { Component } from 'react';
import { Route } from 'react-router';
import App from './App';
import Home from './home';
import Featured from './featured';
import FeaturedArticle from './featured-article';

let routes = (
  <Route name='app' path='/' handler={App} >
    <Route name='home' path='/' handler={Home} />
    <Route name='featured' path='/featured' handler={FeaturedArticle} />
  </Route>
);

export default routes;