import React from 'react';
import classes from './AccommodationInformationModalCancellation.module.css';

const AccommodationInformationModalCancellation = () => (
  <div className={classes.ModalCancellation}>
    <h2>Cancellation Policy</h2>
    <div className={classes.cancellationCard}>
      <div className={classes.cancellationCardLeft}>
        <p>48 Hours</p>
        <p>after booking</p>
      </div>
      <div className={classes.cancellationCardRight}>
        <p>Full Refund</p>
      </div>
    </div>
    <div className={classes.cancellationCard}>
      <div className={classes.cancellationCardLeft}>
        <p>2 Weeks</p>
        <p>untill booking</p>
      </div>
      <div className={classes.cancellationCardRight}>
        <p>50% Refund</p>
      </div>
    </div>
    <div className={classes.cancellationCard}>
      <div className={classes.cancellationCardLeft}>
        <p>48 Hours</p>
        <p>until check-in</p>
      </div>
      <div className={classes.cancellationCardRight}>
        <p>0% Refund</p>
      </div>
    </div>
  </div>
);

export default AccommodationInformationModalCancellation;
