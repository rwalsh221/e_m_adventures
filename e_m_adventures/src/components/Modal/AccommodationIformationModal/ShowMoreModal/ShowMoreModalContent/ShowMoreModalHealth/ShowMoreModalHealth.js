import React from 'react';
import classes from './ShowMoreModalHealth.module.css';

const ShowMoreModalHealth = () => {
  return (
    <div className={classes.showMoreModalHealth}>
      <h2>Health &amp; Safety</h2>
      <ul className={classes.healthSafety}>
        <li>
          <div className={classes.ionIconContainer}>
            <ion-icon name="checkmark-circle" />
          </div>
          <p>Committed to e &amp; m's enhanced cleaning process. </p>
        </li>
        <li>
          <div className={classes.ionIconContainer}>
            <ion-icon name="checkmark-circle" />
          </div>
          <p>
            During the COVID-19 pandemic, all hosts and guests must review and
            follow Airbnb's social distancing and other COVID-19-related
            guidelines.
          </p>
        </li>
        <li>
          <div className={classes.ionIconContainer}>
            <ion-icon name="checkmark-circle" />
          </div>
          <p>Smoke alarm</p>
        </li>
        <li>
          <div className={classes.ionIconContainer}>
            <ion-icon name="checkmark-circle" />
          </div>
          <p>Carbon monoxide detector</p>
        </li>
      </ul>
      <h3>You must acknowledge</h3>
      <ul>
        <li>
          <div className={classes.ionIconContainer}>
            <ion-icon name="checkmark-circle" />
          </div>
          <p>Must Climb Stairs</p>
        </li>
      </ul>
    </div>
  );
};

export default ShowMoreModalHealth;
