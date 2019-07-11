import React from 'react';
import './index.css';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-info">
        <p>Helsingissä 8.8.2020</p>
        <p>#ainojakaitsu</p>
      </div>
      <h1 className="header-title">Ainolaura &amp; Kai-Mikael</h1>
    </div>
  );
};
