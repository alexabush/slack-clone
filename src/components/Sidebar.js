import React, { Component } from 'react';
import RoomsDisplay from './RoomsDisplay';
import PeopleDisplay from './PeopleDisplay';

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="Sidebar">
        <h1>Chattr.io</h1>
        <RoomsDisplay rooms={this.props.rooms} />
        <PeopleDisplay people={this.props.people} />
      </div>
    );
  }
}

export default Sidebar;
