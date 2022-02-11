import React from 'react';

import ShowMoreModalBtn from '../../../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';
import MapBoxContainer from '../../../../miniComponents/MapboxContainer/MapBoxContainer';

import classes from './SectionMap.module.css';

const SectionMap = ({
  cityProps,
  showModalProps,
  countryProps,
  locationDescriptionProps,
  latlonProps,
}) => (
  <section className={classes.sectionMap}>
    <h2>Where you&apos;ll be</h2>
    <div className={classes.mapBoxContainer}>
      <MapBoxContainer latlonProps={latlonProps} />
    </div>
    <h3 data-capitalizefont>
      {cityProps},&nbsp;<span data-uppercasefont>{countryProps}</span>
    </h3>
    <p>{locationDescriptionProps}</p>
    <ShowMoreModalBtn clickHandler={() => showModalProps('map')} />
  </section>
);

export default SectionMap;
