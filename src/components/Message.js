import React, { Component } from 'react';

class Message extends Component {
  state = {};
  render() {
    return (
      <div className="Message">
        <p className="name">{this.props.name}</p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Message;
