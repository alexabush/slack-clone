import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

class App extends Component {
  state = {
    rooms: ['entertainment', 'general', 'news', 'sports'],
    people: ['Alice', 'Benedict', 'Carlos', 'Diane', 'Ezekial'],
    messages: [
      { name: 'You', text: "How's everyone doing?" },
      { name: 'Alice', text: "I'm good!" },
      { name: 'Carlos', text: 'Me too!' },
      { name: 'Benedict', text: "I'm just chilling at home" },
      { name: 'Diane', text: 'Anyone want to chill lol' },
      { name: 'Ezekial', text: "Sry, I'm going to pottery class" },
      { name: 'Alice', text: "I'm down" },
      { name: 'Carlos', text: "Let's do it" },
      { name: 'You', text: 'I got to work :(((' }
    ]
  };
  render() {
    return (
      <div className="App">
        <Sidebar rooms={this.state.rooms} people={this.state.people} />
        <Main messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
