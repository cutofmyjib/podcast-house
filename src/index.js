import React from 'react';
import Router from 'react-router';
import '../static/style.css';
import '../static/style-playlist-article.css';
import '../static/style-about.css';
import '../static/style-contact.css';
import '../static/twitter-icon.png';
import '../static/facebook-icon.png';
import '../static/linkedin-icon.png';
import '../static/email-icon.png';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, (Handler) => {
  React.render(<Handler />, document.getElementById('root'));
});