import React, { Component } from 'react';

export default class Contact extends Component {
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired
  }

  render() {
    return (
      React.createElement('form', {className:'Contact'},
          React.createElement('input', {
            type: 'text',
            placeholder: 'Name (required)',
            value: this.props.value.name,
          }),
          React.createElement('input', {
            type: 'email',
            placeholder: 'Email',
            value: this.props.value.email,
          }),
          React.createElement('textarea', {
            placeholder: 'Message',
            value: this.props.value.message,
          }),
          React.createElement('button', {
            type: 'submit'
          }, "Send")
          )
    );
  }
}
