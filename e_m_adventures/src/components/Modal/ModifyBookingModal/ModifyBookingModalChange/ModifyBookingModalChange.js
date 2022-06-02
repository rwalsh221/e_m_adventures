import React from 'react';
import classes from './ModifyBookingModalChange.module.css';

const ModifyBookingModalChange = () => (
  <div>
    <h2>Change Your Booking</h2>
    <form className={classes.searchForm}>
      <div className={classes.start}>
        <h6>Carnforth Forest Lodge</h6>
      </div>
      <div className={classes.date}>
        <label htmlFor="checkIn" className={classes.dateCheckin}>
          Check-in
        </label>
        <input type="date" id="checkIn" ref={newCheckInRef} />
      </div>
      <div className={classes.date}>
        <label htmlFor="checkOut" className={classes.dateCheckout}>
          Check-out
        </label>
        <input type="date" id="checkOut" ref={newCheckOutRef} />
      </div>
    </form>
    <div className={classes.backdropBtnContainer}>
      <button
        type="button"
        className={classes.submitBtn}
        onClick={validateChangeBookingForm}
      >
        Submit
      </button>
      <button
        type="button"
        className={classes.submitBtn}
        onClick={() => setShowBackdrop(false)}
      >
        Cancel
      </button>
    </div>
    {/* <HeaderSearch /> */}
  </div>
);
