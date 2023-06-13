import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import './styles.css';

// import video
import videoBg from '../src/assets/video.mp4';

const App = () => {
  return (
    <section className='page'>
      {/* overlay */}
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
      <div className='page__content'>
        <h1>Launching Soon</h1>
        <h3>
          Leave your email and we'll let you know once the site goes live.
        </h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        />
        <button className='btn'>Notify me</button>
      </div>
    </section>
  );
};

export default App;
