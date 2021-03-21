import React from 'react';

import classes from './BookingConfirmationContent.module.css';

const BookingConfirmationContent = (props) => {
  return (
    <main className={classes.main}>
      <h1 className={classes.heading}>Your Going To Carnforth</h1>
      <div className={classes.bookingCard}>
        <div className={classes.checkIn}>
          <h3>Check In:</h3>
          <p>08/08/2021</p>
        </div>
        <div className={classes.checkOut}>
          <h3>Check Out:</h3>
          <p>08/08/2021</p>
        </div>
        <h2 className={classes.cardHeading}>ENJOY YOUR STAY!</h2>
      </div>
    </main>
  );
};

export default BookingConfirmationContent;
