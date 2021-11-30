import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import classes from './MapBoxContainer.module.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoicmlja3lyaWNhcmRpbmhvIiwiYSI6ImNrdnJsczBsNTA5ODIyb2x5bGExbDlscHMifQ.UA26VXh63_0G21WVA8d_Ug';

const MapBoxContainer = React.memo(() => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const longitude = -2.767456;
  const latitude = 54.128879;
  const zoom = 13;

  useEffect(() => {
    if (mapboxgl.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className={classes.mapContainer} />
    </div>
  );
});

export default MapBoxContainer;
