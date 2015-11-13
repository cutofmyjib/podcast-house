import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-info">
          <h4 className="contact-info-header">San Francisco HQ</h4>
          <p>108 Newsite Street</p>
          <p>San Francisco, CA</p>
          <p>94105</p>
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

