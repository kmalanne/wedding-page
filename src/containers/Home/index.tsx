import React from 'react';
import hero from '../../resources/hero.jpg';
import './index.css';

export const Home = () => (
  <div className="home">
    <div className="home-container">
      <div className="home-img">
        <img alt="hero" src={hero} />
      </div>
      <div className="home-invitation">
        <h1>KUTSU</h1>
        <p>
          Tervetuloa juhlimaan kanssamme, kun sanomme toisillemme tahdon
          lauantaina 8.8.2020 klo 14:00 Helsingin Kallion kirkossa. Vihkimisen
          jälkeen juhlat jatkuvat ravintola Garden by Olossa. RSVP 1.4.2020
          mennessä (K18).
        </p>
        <br />
        <p>
          Näiltä sivuilta löydät kaiken tarvittavan tiedon tärkeästä päivästämme
          ja ilmoittautumislomakkeen.
        </p>
        <br />
        <p>T: Ainolaura &amp; Kai-Mikael</p>
      </div>
    </div>
  </div>
);
