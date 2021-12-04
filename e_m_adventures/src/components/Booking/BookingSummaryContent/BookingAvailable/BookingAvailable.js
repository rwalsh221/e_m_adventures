import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../helpers/utilities';

import classes from './BookingAvailable.module.css';
import caraBig from '../../../../assets/img/bookingSummary/caraBig.jpg';
import caraMed from '../../../../assets/img/bookingSummary/caraMed.jpg';
import caraSml from '../../../../assets/img/bookingSummary/caraSml.jpg';

const BookingAvailable = ({ submitHandlerProps }) => {
  // TODO: CHECK DELETE HOLD IN CHROME CONSOLE
  const state = useSelector((state) => state);

  const history = useHistory();

  const deleteHold = async () => {
    console.log('DELETE HOLD?????');
    const database =
      'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

    const putConfig = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    try {
      const getHoldCurrentBooking = await fetch(
        `${database}/holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
      );

      const getHoldCurrentBookingJson = await getHoldCurrentBooking.json();
      console.log(getHoldCurrentBookingJson);
      delete getHoldCurrentBookingJson[state.headerSearch.holdRef];

      const putHoldBookings = await fetch(
        `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...putConfig,
          body: JSON.stringify({
            ...getHoldCurrentBookingJson,
          }),
        }
      );
      if (!putHoldBookings.ok) throw new Error('patch hold bookign failed');
    } catch (error) {
      console.error(error);
    }
  };

  // USER HAS 5 MINUTES TO CONFIRM BOOKING
  setTimeout(async () => {
    history.replace('/timeout');
  }, 300000); // TIMEOUT IN 5 MINUTES
  // TODO: FIX UNMOUNT DELETE HOLD BOOKING MOVE TO PARENT
  useEffect(() => {
    // IF USER NAVIGATES AWAY FROM SUMMARY
    console.log();
    return async () => {
      console.log('unmount');
      await deleteHold();
    };
  });
  return (
    <main className="contentGrid">
      <h1 className={classes.heading}>Booking Summary</h1>
      <h2 className={classes.headingSecondary}>Your Place:</h2>
      <div className={classes.placeGrid}>
        <div className={classes.placeHeading}>
          <h3>CarnForth Forest Lodge</h3>
          <LoremIpsum p={2} />
        </div>

        <img
          src={caraBig}
          className={`${classes.imgBig} ${classes.imgBig1}`}
          alt="img"
        />
        <img
          src={caraMed}
          className={`${classes.imgMed} ${classes.imgMed1}`}
          alt="img"
        />
        <img
          src={caraBig}
          className={`${classes.imgBig} ${classes.imgBig2}`}
          alt="img"
        />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
      </div>
      <div className={classes.summaryCard}>
        <h4 className={classes.summaryHeading}>Your Dates</h4>
        <h5 className={classes.summarySubHeading}>CheckIn:</h5>
        <p>{formatDate(state.headerSearch.checkIn / 1000)}</p>
        <h5 className={classes.summarySubHeading}>CheckOut:</h5>
        <p>{formatDate(state.headerSearch.checkOut / 1000)}</p>
        <button
          type="button"
          className={classes.summaryBtn}
          onClick={submitHandlerProps}
        >
          Confirm
        </button>
      </div>
    </main>
  );
};

BookingAvailable.propTypes = { submitHandlerProps: PropTypes.func.isRequired };

export default BookingAvailable;
