import React from 'react';
import classes from './SectionHeading.module.css';

const SectionHeading = ({ accomNameProps, accomCityProps }) => (
  <section className={classes.sectionHeading}>
    <h1 className={classes.mainHeading}>{accomNameProps}</h1>
    <ul className={classes.headingInformation}>
      <li>
        <ion-icon name="star" />
        4.99 (100 reviews)
      </li>
      <li>
        <ion-icon name="location" />
        {accomCityProps}
      </li>
      <li>
        <ion-icon name="share-outline" />
        Share
      </li>
    </ul>
  </section>
);

export default SectionHeading;
