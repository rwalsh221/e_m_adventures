import React from 'react';
import classes from './AccommodationSearch.module.css';

const AccommodationSearch = ({ basePriceProps }) => (
  <div className={classes.accommodationSearch}>
    <div className={classes.searchCard}>
      <div className={classes.header}>
        <p>
          <span data-boldfont>£{basePriceProps}</span>&nbsp;/ night
        </p>
        <p data-boldfont>
          <ion-icon name="star-outline" />
          5.0
          <span className={classes.dot} />
          <span data-underlinefont>16 reviews</span>
        </p>
      </div>
      <div className={classes.searchContainer}>
        <div className={classes.searchContainer__checkIn}>checkin</div>
        <div className={classes.searchContainer__checkOut}>checkout</div>
        <div className={classes.searchContainer__guest}>guest</div>
      </div>
      <div className={classes.searchButton}>
        <button type="button">Search</button>
      </div>
      <div className={classes.price}>
        <p>you wont be charged yet</p>
      </div>
    </div>
  </div>
);

export default AccommodationSearch;
