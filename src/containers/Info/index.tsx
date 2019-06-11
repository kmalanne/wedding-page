import React from 'react';
import { Map } from '../../components/Map';
import './index.css';

const churchMarker = {
  lat: 60.184264,
  long: 24.949336,
};

const partyMarker = {
  lat: 60.168231,
  long: 24.955047,
};

export const Info = () => (
  <div className="info">
    <h1>Ohjeita</h1>
    <Map lat={60.184264} long={24.949336} zoom={16} marker={churchMarker} />
    <p>Itäinen Papinkatu 2</p>
    <Map lat={60.168311} long={24.955135} zoom={16} marker={partyMarker} />
    <p>Helenankatu 2</p>
  </div>
);
