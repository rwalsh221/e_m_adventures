import React from 'react';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../helpers/utilities';
import ErrorContent from '../../ErrorContent/ErrorContent';

import classes from './BookingConfirmationContent.module.css';

const BookingConfirmationContent = () => {
  const reduxState = useSelector((state) => state);

  if (Object.keys(reduxState).length === 0) {
    return <ErrorContent />;
  }

  return (
    <main className={classes.main}>
      <h1 className={classes.heading}>Your Going To Carnforth</h1>
      <div className={classes.bookingCard}>
        <div className={classes.checkIn}>
          <h3>Check In:</h3>
          <p>{formatDate(reduxState.headerSearch.checkIn)}</p>
        </div>
        <div className={classes.checkOut}>
          <h3>Check Out:</h3>
          <p>{formatDate(reduxState.headerSearch.checkOut)}</p>
        </div>
        <h2 className={classes.cardHeading}>ENJOY YOUR STAY!</h2>
      </div>
    </main>
  );
};

export default BookingConfirmationContent;
