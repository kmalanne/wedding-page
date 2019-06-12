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
    <h2>Kirkko ja juhlapaikka</h2>
    <div className="map-container">
      <div className="map-tile">
        <p>Kallion Kirkko, Itäinen Papinkatu 2</p>
        <Map lat={60.184264} long={24.949336} zoom={16} marker={churchMarker} />
      </div>
      <div className="map-tile">
        <p>Garden by Olo, Helenankatu 2</p>
        <Map lat={60.168311} long={24.955135} zoom={16} marker={partyMarker} />
      </div>
    </div>
    <h2>Juhlan kulku</h2>
    <p>
      Tarkoituksena on viettää ikimuistoista juhlaa nauttien viiden ruokalajin
      illallisesta, juomasta ja hyvästä seurasta ravintola Garden by Olo:ssa
      katetulla sisäpihalla aina klo 01:00 saakka. Ruokalajien kanssa
      tarjoillaan viiniä, mutta halutessasi voit ostaa omakustanteisesti Olon
      tarjoamia drinkkejä mikäli tunnet itsesi janoisemmaksi.
    </p>
    <h2>Pukukoodi</h2>
    <p>Pukukoodina toimii kesäinen juhlava pukeutuminen.</p>
    <h2>Muistamiset</h2>
    <p>
      Meille on tärkeintä että saavut jakamaan tämän päivän kanssamme, mutta jos
      haluat muistaa jotenkin niin voit tukea meidän häämatkaamme Japaniin
      haluamallasi rahasummalla tilille: <strong>FIxx xxxx xxxx xxxx xx</strong>
    </p>
    <h2>Valokuvaus</h2>
    <p>
      Paikalla on koko päivän valokuvaaja, joka ikuistaa kaikki hetket, joten
      oman kameran voi jättää kotiin.
    </p>
  </div>
);
