import React, { useRef, useEffect } from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './index.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = Leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

interface Marker {
  lat: number;
  long: number;
}

export interface MapProps {
  lat: number;
  long: number;
  zoom: number;
  marker?: Marker;
}

function onMapClick(e: any) {
  console.log('You clicked the map at ' + e.latlng);
}

export const Map = (props: MapProps) => {
  const element = useRef(null);

  useEffect(() => {
    const { lat, long, zoom, marker } = props;

    let map = Leaflet.map(element.current as any).setView([lat, long], zoom);

    Leaflet.tileLayer(
      'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    ).addTo(map);

    map.on('click', onMapClick);

    if (marker) {
      Leaflet.marker([marker.lat, marker.long]).addTo(map);
    }

    return () => {
      map.remove();
    };
  }, [props]);

  return <div ref={element} className="map" />;
};
