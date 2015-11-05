import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="mini-nav">
          <ul>
            <Link to='about'><li>About</li></Link>
            <li>Contact</li>
          </ul>
        </section>
      </div>
    );
  }
}

