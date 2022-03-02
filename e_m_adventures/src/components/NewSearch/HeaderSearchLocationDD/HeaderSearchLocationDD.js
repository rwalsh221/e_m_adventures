import React from 'react';
import classes from './HeaderSearchLocationDD.module.css';

const HeaderSearchLocationDD = () => (
  <div className={classes.headerSearchLocationDD}>
    <div className={classes.locationHeading}>
      <p>Our Accomodation</p>
    </div>
    <div className={classes.accommodationCardContainer}>
      <div className={classes.accommodationCard}>
        <div className={classes.cardImgTest} />
        <p>Carnforth Forest Lodge</p>
      </div>
      <div className={classes.accommodationCard}>
        <div className={classes.cardImgTest} />
        <p>Carnforth Forest Lodge</p>
      </div>
      <div className={classes.accommodationCard}>
        <div className={classes.cardImgTest} />
        <p>Carnforth Forest Lodge</p>
      </div>
    </div>
  </div>
);

export default HeaderSearchLocationDD;
