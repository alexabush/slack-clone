import React, { Component } from 'react';

class PeopleDisplay extends Component {
  state = {};
  render() {
    const people = this.props.people.map(person => {
      return <li>{person}</li>;
    });
    people.unshift(<li>You</li>);
    return (
      <div className="PeopleDisplay">
        <h1>pd</h1>
        <ul>{people}</ul>
      </div>
    );
  }
}

export default PeopleDisplay;
