import React from 'react';
import classes from './ShowMoreModalCancellation.module.css';

const ShowMoreModalCancellation = () => {
  return (
    <div className={classes.showMoreModalCancellation}>
      <button>X</button>
      <h2>Cancellation Policy</h2>
      <div className={classes.cancellationCard}>
        <div className={classes.cancellationCardLeft}>
          <p>48 Hours</p>
          <p>after booking</p>
        </div>
        <div className={classes.cancellationCardRight}>Full Refund</div>
      </div>
      <div className={classes.cancellationCard}>
        <div className={classes.cancellationCardLeft}>
          <p>2 Weeks</p>
          <p>untill booking</p>
        </div>
        <div className={classes.cancellationCardRight}>50% Refund</div>
      </div>
      <div className={classes.cancellationCard}>
        <div className={classes.cancellationCardLeft}>
          <p>48 Hours</p>
          <p>until check-in</p>
        </div>
        <div className={classes.cancellationCardRight}>0% Refund</div>
      </div>
    </div>
  );
};

export default ShowMoreModalCancellation;
