import React from 'react';
import hero from '../../resources/hero.jpeg';
import './index.css';

export const Home = () => (
  <div className="home">
    <img alt="hero" src={hero} />
    <div className="home-container">
      <h1>KUTSU</h1>
      <p>
        Tervetuloa juhlimaan kanssamme kun sanomme toisillemme tahdon lauantaina
        8.8.2020 Helsingin Kallion kirkossa. Vihkimisen jälkeen juhlat jatkuvat
        ravintola Garden by Olo:ssa. RSVP x.x.20xx mennessä (K18).
      </p>
      <br />
      <br />
      <p>
        Näiltä sivuilta löydät kaiken tarvittavan tiedon tärkeästä päivästämme
        ja ilmoittautumislomakkeen.
      </p>
    </div>
  </div>
);
