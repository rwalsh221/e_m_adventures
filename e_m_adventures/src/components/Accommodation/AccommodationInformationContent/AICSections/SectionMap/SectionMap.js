import React from 'react';

import ShowMoreModalBtn from '../../../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';
import MapBoxContainer from '../../../../miniComponents/MapboxContainer/MapBoxContainer';

import classes from './SectionMap.module.css';

const SectionMap = ({ accomCityProps, showModalProps }) => (
  <section className={classes.sectionMap}>
    <h2>Where you&apos;ll be</h2>
    <div className={classes.mapBoxContainer}>
      <MapBoxContainer />
    </div>
    <h3 data-capitalizefont>{accomCityProps}, United Kingdom</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia
      quis vel eros donec ac odio tempor. Mauris rhoncus aenean vel elit
      scelerisque mauris pellentesque pulvinar pellentesque. Gravida dictum
      fusce ut placerat orci nulla. Pellentesque habitant morbi tristique
      senectus et netus. Felis eget velit aliquet sagittis. Odio pellentesque
      diam volutpat commodo sed egestas egestas fringilla. Proin fermentum leo
      vel orci porta non. Bibendum enim facilisis gravida neque convallis.
      Volutpat odio facilisis mauris sit. Netus et malesuada fames ac. Eget mi
      proin sed libero enim. Vel orci porta non pulvinar neque laoreet
      suspendisse. Risus in hendrerit gravida rutrum quisque non tellus orci ac.
      Erat pellentesque adipiscing commodo elit at imperdiet.
    </p>
    <ShowMoreModalBtn clickHandler={() => showModalProps('map')} />
  </section>
);

export default SectionMap;
