import React from 'react';
import './index.css';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-info">
        <p>Helsingissä 8.8.2020</p>
        <p>#kaitsujaaino</p>
      </div>
      <h1 className="header-title">Kai-Mikael &amp; Ainolaura</h1>
    </div>
  );
};
