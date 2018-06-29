import React, { Component } from 'react';

class RoomsDisplay extends Component {
  state = {};
  render() {
    const rooms = this.props.rooms.map(room => {
      return <li>{room}</li>;
    });
    return (
      <div className="RoomsDisplay">
        <h2>Rooms</h2>
        <ul>{rooms}</ul>
      </div>
    );
  }
}

export default RoomsDisplay;
