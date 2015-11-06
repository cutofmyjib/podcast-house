import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Contact extends Component {
  render() {
    return (
      <form className="contact">
        <fieldset>
          <label htmlFor='name'>Name
            <input type="text" id='name' name='name' />
          </label>

          <label htmlFor='email'>Email
            <input type="email" id='email' name='email' />
          </label>

          <label htmlFor='message'>Message
            <textarea id='message' name='message'/>
          </label>

          <button type="submit">Send</button>
        </fieldset>
      </form>
    );
  }
}

