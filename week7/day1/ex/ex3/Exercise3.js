
import React, { Component } from 'react';
import './Exercise.css'; 

class Exercise extends Component {
  render() {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <div>
        {/* PART I & II: H1 stylé avec style_header */}
        <h1 style={style_header}>This is a Header</h1>

        {/* PART III: paragraphe stylé avec className */}
        <p className="para">This is a Paragraph</p>

        {/* Lien */}
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">This is a Link</a>

        {/* Formulaire */}
        <h3>This is a Form:</h3>
        <form>
          <label>Enter your name:</label><br />
          <input type="text" /><br />
          <input type="submit" />
        </form>

        {/* Image */}
        <h3>Here is an Image:</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Logo"
          width="400"
        />

        {/* Liste */}
        <h3>This is a List:</h3>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;
