import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import getBookingData from '../../helpers/booking/getBookingData';
import { useAuth } from '../../contexts/AuthContext';

import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import errorTimeout from '../../helpers/error/errorTimeout';
import Backdrop from '../miniComponents/Backdrop/Backdrop';

import validateDate from '../../helpers/validation';
import {
  dateToMilliseconds,
  getFullDays,
  formatDate,
} from '../../helpers/utilities';
import cancelBooking from '../../helpers/booking/cancelBooking';

import bookingIsAvaliable from '../../helpers/booking/bookingIsAvaliable';
import holdCurrentBooking from '../../helpers/booking/holdCurrentBooking';

import * as actionTypes from '../Header/HeaderSearch/HeaderSearchSlice';

import classes from './ModifyBookingContent.module.css';

const mapDispatch = { ...actionTypes };

const ModifyBookingContent = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [backdropContent, setBackdropContent] = useState('');
  const [error, setError] = useState('');

  const backdropRef = useRef(null);
  const newCheckInRef = useRef();
  const newCheckOutRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const reduxState = useSelector((state) => state.modifyBooking);

  // const database =
  //   'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const { currentUser } = useAuth();

  // USEEFFECT FOR SHOWBACKDROP
  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (
        backdropRef.current !== null &&
        !backdropRef.current.contains(e.target)
      ) {
        setError('');
        setShowBackdrop(false);
      }
    };
    // If the item is active (ie open) then listen for clicks
    if (showBackdrop) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [showBackdrop]);

  // const getBookingData = async () => {
  //   // GET CURENT USERS BOOKINGS
  //   const userBookings = await fetch(
  //     `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  //   );

  //   const userBookingsJson = await userBookings.json();
  //   // GET FULLDAYS
  //   const fullDays = await fetch(
  //     `${database}/fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  //   );

  //   const fullDaysJson = await fullDays.json();

  //   // GET ALL BOOKINGS
  //   const allBookings = await fetch(
  //     `${database}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  //   );

  //   const allBookingsJson = await allBookings.json();

  //   return { userBookingsJson, fullDaysJson, allBookingsJson };
  // };

  const cancelBookingHandler = async () => {
    try {
      await cancelBooking(reduxState, currentUser, history);
    } catch (errror) {
      console.error(error);
    }
  };

  const submitHandler = async () => {
    const checkIn = dateToMilliseconds(newCheckInRef.current.value);
    const checkOut = dateToMilliseconds(newCheckOutRef.current.value);

    const fullDays = getFullDays(checkIn, checkOut);

    const currentBooking = {
      checkIn,
      checkOut,
      fullDays,
    };

    try {
      const { allBookingsJson } = await getBookingData(currentUser);

      delete allBookingsJson[reduxState.bookingRef];

      if (
        bookingIsAvaliable(allBookingsJson, currentBooking, setError) === true
      ) {
        const ref = `ref${nanoid()}`;
        if (
          await holdCurrentBooking(
            dateToMilliseconds(newCheckInRef.current.value),
            dateToMilliseconds(newCheckOutRef.current.value),
            setError,
            ref
          )
        ) {
          dispatch(
            actionTypes.booking({
              checkIn: dateToMilliseconds(newCheckInRef.current.value),
              checkOut: dateToMilliseconds(newCheckOutRef.current.value),
              holdRef: ref,
            })
          );

          history.push({
            pathname: 'summary',
            state: { holdStatus: false, modify: true },
          });
        } else {
          history.push({
            pathname: 'summary',
            state: { holdStatus: true },
          });
        }
      } else {
        errorTimeout(setError, 'Unfortunatley Those Dates Are Unavaliable');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // VALIDATE CHANGE BOOKING FORM
  const validateChangeBookingForm = async () => {
    let formIsValid = false;

    formIsValid = validateDate(
      newCheckInRef.current.value,
      newCheckOutRef.current.value
    );

    if (formIsValid) {
      submitHandler();
    }
  };

  const cancelBookingBackdropContent = () => {
    setBackdropContent(
      <div>
        {error && <ErrorComponent messageProps={error} />}
        <h2>Are You Sure You Want To Cancel Your Booking?</h2>
        <div className={classes.backdropBtnContainer}>
          <button
            type="button"
            className={classes.submitBtn}
            onClick={cancelBookingHandler}
          >
            YES
          </button>
          <button
            type="button"
            className={classes.submitBtn}
            onClick={() => setShowBackdrop(false)}
          >
            NO
          </button>
        </div>
      </div>
    );
    setShowBackdrop(true);
  };

  const changeBookingBackdropContent = () => {
    setBackdropContent(
      <div>
        <h2>Change Your Booking</h2>
        <form className={classes.searchForm}>
          <div className={classes.start}>
            <h6>Start Your Adventure</h6>
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
      </div>
    );
    setShowBackdrop(true);
  };

  return (
    <main className={classes.main}>
      {error && <ErrorComponent messageProps={error} />}
      <Backdrop showProps={showBackdrop} ref={backdropRef}>
        {backdropContent}
      </Backdrop>
      <h1 className={classes.mainHeading}>Change Your Booking</h1>
      <h2 className={classes.secHeading}>
        Your Going to Carnforth Forest Lodge
      </h2>
      <ul className={classes.bookingInfo}>
        <li>
          Booking Reference:&nbsp;<span>{reduxState.bookingRef}</span>
        </li>
        <li>
          Check In:&nbsp;<span>{formatDate(reduxState.checkIn / 1000)}</span>
        </li>
        <li>
          Check Out:&nbsp;<span>{formatDate(reduxState.checkOut / 1000)}</span>
        </li>
      </ul>
      <button
        type="button"
        className={classes.submitBtn}
        onClick={cancelBookingBackdropContent}
      >
        Cancel Your Booking
      </button>
      <button
        type="button"
        onClick={changeBookingBackdropContent}
        className={classes.submitBtn}
      >
        Change Your Booking
      </button>
    </main>
  );
};

export default connect(null, mapDispatch)(ModifyBookingContent);
