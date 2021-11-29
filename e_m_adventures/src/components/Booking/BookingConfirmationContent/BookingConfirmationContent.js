import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../helpers/utilities';

import classes from './BookingConfirmationContent.module.css';

const BookingConfirmationContent = () => {
  const state = useSelector((state) => state);

  return (
    <main className={classes.main}>
      <h1 className={classes.heading}>Your Going To Carnforth</h1>
      <div className={classes.bookingCard}>
        <div className={classes.checkIn}>
          <h3>Check In:</h3>
          <p>{formatDate(state.headerSearch.checkIn / 1000)}</p>
        </div>
        <div className={classes.checkOut}>
          <h3>Check Out:</h3>
          <p>{formatDate(state.headerSearch.checkOut / 1000)}</p>
        </div>
        <h2 className={classes.cardHeading}>ENJOY YOUR STAY!</h2>
      </div>
    </main>
  );
};

export default BookingConfirmationContent;
