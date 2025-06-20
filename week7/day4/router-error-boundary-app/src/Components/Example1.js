// src/Components/Example1.js
import React, { Component } from 'react';
import data from '../data.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Example1 Component</h2>
        {data.SocialMedias.map((link, index) => (
          <p key={index}>{link}</p>
        ))}
      </div>
    );
  }
}

export default Example1;
