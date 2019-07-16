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

export const Info = () => {
  const accountNumber = process.env.REACT_APP_ACCOUNT_NUMBER;

  return (
    <div className="info">
      <h2>Kirkko ja juhlapaikka</h2>
      <div className="map-container">
        <div className="map-tile">
          <p>Kallion Kirkko, Itäinen Papinkatu 2</p>
          <Map
            lat={60.184264}
            long={24.949336}
            zoom={16}
            marker={churchMarker}
          />
        </div>
        <div className="map-tile">
          <p>Garden by Olo, Helenankatu 2</p>
          <Map
            lat={60.168311}
            long={24.955135}
            zoom={16}
            marker={partyMarker}
          />
        </div>
      </div>
      <h2>Juhlan kulku</h2>
      <p>
        Tarkoituksena on viettää ikimuistoista juhlaa nauttien viiden ruokalajin
        illallisesta, juomasta ja hyvästä seurasta ravintola Garden by Olo:ssa
        katetulla sisäpihalla aina klo 01:00 saakka. Ruokalajien kanssa
        tarjoillaan viiniä, mutta halutessasi voit ostaa omakustanteisesti Olon
        tarjoamia drinkkejä mikäli tunnet itsesi janoisemmaksi. Juhlat ovat K18.
      </p>
      <h2>Pukukoodi</h2>
      <p>Pukukoodina toimii kesäinen juhlava pukeutuminen.</p>
      <h2>Muistamiset</h2>
      <p>
        Meille on tärkeintä että saavut jakamaan tämän päivän kanssamme, mutta
        jos haluat muistaa jotenkin niin voit tukea meidän häämatkaamme Japaniin
        haluamallasi rahasummalla tilille: <strong>{accountNumber}</strong>.
      </p>
      <h2>Valokuvaus</h2>
      <p>
        Paikalla on koko päivän valokuvaaja ikuistamassa kaikki tärkeät hetket,
        joten voit jättää oman kameran kotiin. Jos otat omia kuvia, niin jaathan
        ne meidänkin kanssamme.
      </p>
      <h2>Majoittuminen</h2>
      <p>
        Mikäli ajattelit majoittua häiden aikaan Helsingissä hotellissa,
        suosittelemme tekemään varauksen mahdollisimman aikaisin. Vuoden 2020
        Flow-festivaalit saattavat osua samalle viikonlopulle ja voivat
        aiheuttaa majoitusongelmia.
      </p>
      <h2>Ilmoittautuminen</h2>
      <p>
        Ilmoitathan tulostasi <a href="rsvp">RSVP</a>:n kautta 1.6.2020
        mennessä. Kerro samalla mahdollisista allergioista. Jos ilmoittautuminen
        sivujen kautta ei onnistu, ilmoittaudu tekstiviestillä/sähköpostilla
        hääparille. Yhteystiedot löytyvät <a href="contact">täältä</a>.
      </p>
    </div>
  );
};
