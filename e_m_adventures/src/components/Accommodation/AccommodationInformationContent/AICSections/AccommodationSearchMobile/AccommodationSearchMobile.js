import React from 'react';
import PropTypes from 'prop-types';
import classes from './AccommodationSearchMobile.module.css';

const AccommodationSearchMobile = ({ basePriceProps }) => (
  <div className={classes.mobile_search}>
    <div className={classes.mobile_search_content}>
      <p>
        <span data-boldfont>£{basePriceProps}</span>&nbsp;/ night
      </p>
      <p data-boldfont>
        <ion-icon name="star-outline" />
        5.0
        <span className={classes.dot} />
        <span data-underlinefont>16 reviews</span>
      </p>
      <button className={classes.mobile_search_btn} type="button">
        book
      </button>
    </div>
  </div>
);

AccommodationSearchMobile.propTypes = {
  basePriceProps: PropTypes.number.isRequired,
};

export default AccommodationSearchMobile;
