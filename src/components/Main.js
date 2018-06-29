import React, { Component } from 'react';
import Message from './Message';
import NewMessageInput from './NewMessageInput';

class Main extends Component {
  state = {};
  render() {
    const messages = this.props.messages.map(({ name, text }) => {
      return <Message name={name} text={text} />;
    });
    return (
      <div className="Main">
        <h1>Main</h1>
        <ul>{messages}</ul>
        <NewMessageInput />
      </div>
    );
  }
}

export default Main;
