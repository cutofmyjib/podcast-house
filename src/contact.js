import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div>
          <img id="map" src="https://maps.googleapis.com/maps/api/staticmap?center=South+Beach,San+Francisco,CA&zoom=13&size=600x300&maptype=roadmap
&markers=color:red%7Clabel:podcasthouse%7C37.786355,-122.391199
&key=AIzaSyAJzQKtYZxDKxdZ16O_jYJCznIvMiyx_1k" />
          <div className="contact-info">
            <h4 className="contact-info-header">San Francisco HQ</h4>
            <p>108 Newsite Street</p>
            <p>San Francisco, CA</p>
            <p>94105</p>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <fieldset>
              <legend>Contact Us</legend>
              <label htmlFor='name'>
                <input type="text" className="name" placeholder="Name" id='name' name='name' />
              </label>

              <label htmlFor='email'>
                <input type="email" placeholder="Email" id='email' name='email' />
              </label>

              <label htmlFor='message'>
                <textarea className="message" id='message' placeholder="Message" name='message'/>
              </label>

              <button type="submit">Send</button>
            </fieldset>
          </form>
        </div>
      </div>

    );
  }
}

