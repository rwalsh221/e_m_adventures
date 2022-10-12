import React from 'react';
import { Link } from 'react-router-dom';

import HeaderSearch from '../HeaderSearch/HeaderSearch';

import classes from './TimeoutContent.module.css';

const TimeoutContent = () => (
  <main className={classes.timeout}>
    <h1 className={classes.header}>YOUR BOOKING HAS TIMED OUT</h1>
    <p className={classes.content}>
      Unfortulnatley the booking you were looking at has timed out. Please try
      again
    </p>
    <HeaderSearch />
    <div className={classes.btnContainer}>
      <Link to="/" className={classes.btn}>
        Return to Home
      </Link>
    </div>
  </main>
);

export default TimeoutContent;
