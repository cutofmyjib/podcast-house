import React, { Component } from 'react';

export default class Contact extends Component {
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <form className="contact">
        <input type="text" placeholder="Name (required)" value={this.props.value.name} />
        <input type="email" placeholder="Email" value={this.props.value.email} />
        <textarea placeholder="Message" value={this.props.value.message} />
        <button type="submit">Send</button>
      </form>
    )
  }
}
