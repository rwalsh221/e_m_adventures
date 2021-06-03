import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import Backdrop from '../miniComponents/Backdrop/Backdrop';

import { validateDate } from '../../helpers/validation';
import { dateToMilliseconds, getFullDays } from '../../helpers/utilities';
import { cancelBooking } from '../../helpers/cancelBooking';
import { formatDate } from '../../helpers/utilities';

import { bookingIsAvaliable } from '../../helpers/booking/bookingIsAvaliable';
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

  const state = useSelector((state) => state.modifyBooking);

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

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

  const getBookingData = async () => {
    //GET CURENT USERS BOOKINGS
    const userBookings = await fetch(
      `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
    );

    const userBookingsJson = await userBookings.json();
    // GET FULLDAYS
    const fullDays = await fetch(
      `${database}/fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
    );

    let fullDaysJson = await fullDays.json();

    // GET ALL BOOKINGS
    const allBookings = await fetch(
      `${database}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
    );

    const allBookingsJson = await allBookings.json();

    return { userBookingsJson, fullDaysJson, allBookingsJson };
  };

  const cancelBookingHandler = async () => {
    try {
      await cancelBooking(state, currentUser, history);
    } catch (errror) {
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

  const submitHandler = async () => {
    // TODO: NOT WORKING SEE NOTES BELOW IN BOKINGAVLIABLE FUNCTION: NOW WORKING
    // TODO: EXPORT HOLDBOOKING FROM HEADERSEARCH
    const checkIn = dateToMilliseconds(newCheckInRef.current.value);
    const checkOut = dateToMilliseconds(newCheckOutRef.current.value);

    const fullDays = getFullDays(checkIn, checkOut);

    const currentBooking = {
      checkIn: checkIn,
      checkOut: checkOut,
      fullDays: fullDays,
    };

    try {
      const { allBookingsJson } = await getBookingData();

      delete allBookingsJson[state.bookingRef];

      if (
        bookingIsAvaliable(allBookingsJson, currentBooking, setError) === true
      ) {
        if (
          await holdCurrentBooking(
            dateToMilliseconds(newCheckInRef.current.value),
            dateToMilliseconds(newCheckOutRef.current.value),
            setError
          )
        ) {
          dispatch(
            actionTypes.booking({
              checkIn: dateToMilliseconds(newCheckInRef.current.value),
              checkOut: dateToMilliseconds(newCheckOutRef.current.value),
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
        setError('Unfortunatley Those Dates Are Unavaliable');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const cancelBookingBackdropContent = () => {
    setBackdropContent(
      <div>
        {error && <ErrorComponent message={error} />}
        <h2>Are You Sure You Want To Cancel Your Booking?</h2>
        <div className={classes.backdropBtnContainer}>
          <button className={classes.submitBtn} onClick={cancelBookingHandler}>
            YES
          </button>
          <button
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
            <label htmlFor="checkIn" className={classes.searchLabel}>
              Check-in
            </label>
            <input type="date" id="checkIn" ref={newCheckInRef}></input>
          </div>
          <div className={classes.date}>
            <label htmlFor="checkOut" className={classes.searchLabel}>
              Check-out
            </label>
            <input type="date" id="checkOut" ref={newCheckOutRef}></input>
          </div>
        </form>
        <div className={classes.backdropBtnContainer}>
          <button
            className={classes.submitBtn}
            onClick={validateChangeBookingForm}
          >
            Submit
          </button>
          <button
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
      {error && <ErrorComponent message={error} />}
      <Backdrop show={showBackdrop} ref={backdropRef}>
        {backdropContent}
      </Backdrop>
      <h1>Change Your Booking</h1>
      <h2>Your Going to Carnforth Forest Lodge</h2>
      <ul className={classes.bookingInfo}>
        <li>
          Booking Reference:&nbsp;<span>{state.bookingRef}</span>
        </li>
        <li>
          Check In:&nbsp;<span>{formatDate(state.checkIn / 1000)}</span>
        </li>
        <li>
          Check Out:&nbsp;<span>{formatDate(state.checkOut / 1000)}</span>
        </li>
      </ul>
      <button
        className={classes.submitBtn}
        onClick={cancelBookingBackdropContent}
      >
        Cancel Your Booking
      </button>
      <button
        onClick={changeBookingBackdropContent}
        className={classes.submitBtn}
      >
        Change Your Booking
      </button>
    </main>
  );
};

export default connect(null, mapDispatch)(ModifyBookingContent);
