import React from 'react';
import { Link } from 'react-router-dom';

import HeaderSearch from '../../../Header/HeaderSearch/HeaderSearch';
import classes from './BookingUnavailable.module.css';

const BookingUnavailable = (props) => {
  let content = 'Unfortunatley those dates are unavaliable. Please try again';

  if (props.holdBooking) {
    content =
      'Unfortunatley those dates are temporally unavaliable. Please try again in a few minutes';
  }

  return (
    <main className={classes.main}>
      <div className={classes.card}>
        <h1 className={classes.header}>{content}</h1>
      </div>
      <HeaderSearch />
      <Link to={'/'} className={classes.homeLink}>
        Return to Home
      </Link>
    </main>
  );
};

export default BookingUnavailable;
