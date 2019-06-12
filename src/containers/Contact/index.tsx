import React from 'react';
import './index.css';

export const Contact = () => (
  <div className="contact">
    <p>Kysymyksissä ja peruutustapauksissa voit ottaa yhteyttä hääpariin:</p>
    <div className="contact-information">
      <div className="contact-single">
        <p>Kai-Mikael Alanne</p>
        <p>
          <strong>Email:</strong> nimi@osoite.com
        </p>
        <p>
          <strong>Puhelin:</strong> +358400000000
        </p>
      </div>
      <div className="contact-single">
        <p>Ainolaura Oksman</p>
        <p>
          <strong>Email:</strong> nimi@osoite.com
        </p>
        <p>
          <strong>Puhelin:</strong> +358400000000
        </p>
      </div>
    </div>
  </div>
);
