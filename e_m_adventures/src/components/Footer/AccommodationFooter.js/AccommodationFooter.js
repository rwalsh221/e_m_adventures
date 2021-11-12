import React from 'react';

import classes from './AccommodationFooter.module.css';

const AccommodationFooter = () => {
  return (
    <section className={classes.accommodationFooter}>
      <div className={classes.accommodationFooterTop} />
      <h2>Explore our other Locations</h2>
      <div className={classes.footerLocationContainer}>
        <ul>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
          <li>Location</li>
        </ul>
      </div>
    </section>
  );
};
export default AccommodationFooter;
