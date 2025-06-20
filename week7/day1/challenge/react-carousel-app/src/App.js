// src/App.js
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // CSS du carousel
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div style={{ width: '60%', margin: '0 auto', marginTop: '50px' }}>
      <Carousel
        showThumbs={true}
        showStatus={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        dynamicHeight={true}
        emulateTouch={true}
      >
        <div>
          <img src="hong.png" alt="Hong Kong" />
          <p className="legend">Hong Kong</p>
        </div>
        <div>
          <img src="maca.png" alt="Macao" />
          <p className="legend">Macao</p>
        </div>
        <div>
          <img src="japan.png" alt="Japan" />
          <p className="legend">Japan</p>
        </div>
        <div>
          <img src="hoho.png" alt="Las Vegas" />
          <p className="legend">Las Vegas</p>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
