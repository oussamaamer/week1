// src/Components/Example2.js
import React, { Component } from 'react';
import data from '../data.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Example2 Component</h2>
        {Object.entries(data.Skills).map(([category, skills], index) => (
          <div key={index}>
            <p><strong>{category}:</strong></p>
            <ul>
              {skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;
