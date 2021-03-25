import React from 'react';
import { Link } from 'react-router-dom';

import HeaderSearch from '../../../Header/HeaderSearch/HeaderSearch';
import classes from './BookingUnavailable.module.css';

const BookingUnavailable = () => {
  return (
    <main className={classes.main}>
      <div className={classes.card}>
        <h1 className={classes.header}>
          Unfortunatley those dates are unavaliable. Please try again
        </h1>
      </div>
      <HeaderSearch />
      <Link to={'/home'} className={classes.test}>
        Return to Home
      </Link>
    </main>
  );
};

export default BookingUnavailable;
