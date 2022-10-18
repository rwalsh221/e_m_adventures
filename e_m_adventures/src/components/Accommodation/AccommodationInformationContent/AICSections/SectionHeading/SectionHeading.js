import React from 'react';
import PropTypes from 'prop-types';
import classes from './SectionHeading.module.css';

const SectionHeading = ({ accomNameProps, accomCityProps }) => (
  <section className={classes.sectionHeading}>
    <h1 data-capitalizefont>{accomNameProps}</h1>
    <ul className={classes.headingInformation}>
      <li>
        <ion-icon name="star" />
        4.99 (100 reviews)
      </li>
      <li data-capitalizefont>
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

SectionHeading.propTypes = {
  accomNameProps: PropTypes.string.isRequired,
  accomCityProps: PropTypes.string.isRequired,
};

export default SectionHeading;
