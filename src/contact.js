import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contact extends Component {
  render() {
    return (
      <form className="contact">
        <fieldset>
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
    );
  }
}

