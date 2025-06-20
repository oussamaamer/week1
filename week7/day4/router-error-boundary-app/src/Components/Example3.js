// src/Components/Example3.js
import React, { Component } from 'react';
import data from '../data.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Example3 Component</h2>
        {data.Experiences.map((exp, index) => (
          <div key={index}>
            <p>Company: {exp.company}</p>
            <p>Role: {exp.role}</p>
            <p>Years: {exp.years}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
