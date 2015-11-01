import React from 'react';
import Router from 'react-router';
import '../static/style.css';
import '../static/style-playlist-article.css';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('root'));
});