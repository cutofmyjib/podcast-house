import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="follow">
          <a href="#">{this.props.twitter}</a>
          <a href="#">{this.props.instagram}</a>
          <a href="#">{this.props.facebook}</a>
        </div>
        <p><a href={this.props.madebyhref}>{this.props.madeby}</a></p>
      </footer>
    );
  }
}
