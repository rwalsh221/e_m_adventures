import React, { useState, useEffect, useRef } from 'react';
import classes from './MapBoxContainer.module.css';

import mapboxgl from '!mapbox-gl';
import { style } from 'dom-helpers';

mapboxgl.accessToken =
  'pk.eyJ1Ijoicmlja3lyaWNhcmRpbmhvIiwiYSI6ImNrdnJsczBsNTA5ODIyb2x5bGExbDlscHMifQ.UA26VXh63_0G21WVA8d_Ug';

const MapBoxContainer = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [longitude, setLongitude] = useState(-2.767456);
  const [latitude, setlatitude] = useState(54.128879);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    if (mapboxgl.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className={classes.mapContainer}></div>
    </div>
  );
};

export default MapBoxContainer;
