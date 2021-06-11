import React, { useEffect } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { useSelector } from 'react-redux';
import { formatDate } from '../../../../helpers/utilities';

import classes from './BookingAvailable.module.css';
import caraBig from '../../../../assets/img/bookingSummary/caraBig.jpg';
import caraMed from '../../../../assets/img/bookingSummary/caraMed.jpg';
import caraSml from '../../../../assets/img/bookingSummary/caraSml.jpg';
import { useHistory } from 'react-router';

const BookingAvailable = (props) => {
  const state = useSelector((state) => state);

  const history = useHistory();

  const deleteHold = async () => {
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
  }, 10000);

  useEffect(() => {
    // IF USER NAVIGATES AWAY FROM SUMMARY
    return async () => {
      await deleteHold();
    };
  });
  return (
    <main className={'contentGrid'}>
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
          alt={'img'}
        ></img>
        <img
          src={caraMed}
          className={`${classes.imgMed} ${classes.imgMed1}`}
          alt={'img'}
        ></img>
        <img
          src={caraBig}
          className={`${classes.imgBig} ${classes.imgBig2}`}
          alt={'img'}
        ></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
      </div>
      <div className={classes.summaryCard}>
        <h4 className={classes.summaryHeading}>Your Dates</h4>
        <h5 className={classes.summarySubHeading}>CheckIn:</h5>
        <p>{formatDate(state.headerSearch.checkIn / 1000)}</p>
        <h5 className={classes.summarySubHeading}>CheckOut:</h5>
        <p>{formatDate(state.headerSearch.checkOut / 1000)}</p>
        <button className={classes.summaryBtn} onClick={props.submitHandler}>
          Confirm
        </button>
      </div>
    </main>
  );
};

export default BookingAvailable;
