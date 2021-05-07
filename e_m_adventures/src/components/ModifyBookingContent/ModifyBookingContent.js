import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import Backdrop from '../miniComponents/Backdrop/Backdrop';

import { validateDate } from '../../helpers/validation';
import { dateToMilliseconds, getFullDays } from '../../helpers/utilities';

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

  // TODO: CREATE FUCNTION FOR GETTING DATA
  // const testFunc = () => {
  //   let test1 = 1;
  //   let test2 = 2;
  //   let test3 = 3;

  //   return { test1, test2, test3 };
  // };

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

  const cancelBooking = async () => {
    const patchConfig = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      //GET USER BOOKING
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

      // DELETE BOOKING FROM USER BOOKING DATABASE
      const userBookingsKeys = Object.keys(userBookingsJson);

      userBookingsKeys.filter((bookingKey) => {
        if (userBookingsJson[bookingKey].bookingRef === state.bookingRef) {
          delete userBookingsJson[bookingKey];
        }
      });

      // DELETE BOOKING FROM FULLDAYS

      // get checkin
      const bookingFullDaysArr = [];
      bookingFullDaysArr.push(allBookingsJson[state.bookingRef].checkIn);

      // get fulldays if any
      if (allBookingsJson[state.bookingRef].fullDays) {
        allBookingsJson[state.bookingRef].fullDays.forEach((element) => {
          bookingFullDaysArr.push(element);
        });
      }

      // delete from fulldays database
      for (let i = 0; i < bookingFullDaysArr.length; i++) {
        let index = fullDaysJson.findIndex((val) => {
          return val === bookingFullDaysArr[i];
        });
        console.log(index);
        if (index !== -1) fullDaysJson.splice(index, 1);
      }

      // DELETE BOOKING FROM ALL BOOKINGS

      delete allBookingsJson[state.bookingRef];

      // SEND UPDATED BOOKING OBJECT TO DATABASE.
      const updateUserBookingsDatabase = await fetch(
        `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        { ...patchConfig, body: JSON.stringify({ ...userBookingsJson }) },
        console.log('sent'),
        console.log(userBookingsJson)
      );

      if (!updateUserBookingsDatabase.ok)
        throw Error(updateUserBookingsDatabase.message);

      const updateFullDaysDatabase = await fetch(
        `${database}fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        { ...patchConfig, body: JSON.stringify({ ...fullDaysJson }) }
      );

      const test = await updateFullDaysDatabase.json();
      console.log(test);

      if (!updateFullDaysDatabase.ok)
        throw Error(updateFullDaysDatabase.message);

      const updateBookingDatabase = await fetch(
        `${database}booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...patchConfig,
          body: JSON.stringify({
            ...allBookingsJson,
          }),
        }
      );

      if (!updateBookingDatabase.ok) throw Error(updateBookingDatabase.message);

      history.push('/dashBoard');
    } catch (error) {
      console.error(error);
    }
  };

  // VALIDATE CHANGE BOOKING FORM
  const validateChangeBookingForm = () => {
    let formIsValid = false;

    formIsValid = validateDate(
      newCheckInRef.current.value,
      newCheckOutRef.current.value
    );

    if (formIsValid) newBookingAvaliable();
  };

  const checkFullDays = (checkIn, checkOut, arr) => {
    const fullDayUnavailable = [];
    const checkInMilli = dateToMilliseconds(checkIn);
    const checkOutMilli = dateToMilliseconds(checkOut);

    const newBookingFullDays = getFullDays(checkInMilli, checkOutMilli);

    arr.forEach((el) => {
      const element = el;
      newBookingFullDays.find((el) => {
        if (el === element) {
          fullDayUnavailable.push(element);
        }
      });
    });
    console.log(arr);
    console.log(newBookingFullDays);
    console.log(fullDayUnavailable);
    if (
      arr.find((el) => el === checkInMilli) === undefined &&
      arr.find((el) => el === checkOutMilli) === undefined &&
      fullDayUnavailable.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const newBookingAvaliable = async () => {
    setError('');
    // COMPARISON ARRAYS
    let checkInArr = [];
    let checkOutArr = [];
    let fullDayArr = [];
    try {
      // GET ALL BOOKINGS
      const allBookings = await fetch(
        `${database}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
      );

      const allBookingsJson = await allBookings.json();

      const allBookingsJsonKeys = Object.keys(allBookingsJson);

      // GET FULL DAYS OF MODIFIED BOOKING

      const stateFullDays = getFullDays(state.checkIn, state.checkOut);
      console.log(stateFullDays);

      // ADD VALUES TO COMPARISON ARRAY IF NOT EQUAL TO CURRENT BOOKING
      allBookingsJsonKeys.forEach((el) => {
        console.log(allBookingsJson[el]);

        // FULL DAYS
        if (allBookingsJson[el].fullDays !== undefined) {
          allBookingsJson[el].fullDays.forEach((el) => {
            const bookingFullday = el;
            console.log(bookingFullday);

            if (
              stateFullDays.find((el) => {
                console.log(el);
                return el !== bookingFullday;
              }) === undefined ||
              stateFullDays.length === 0
            ) {
              console.log('PUSH FULL DAY');
              console.log(el);
              fullDayArr.push(bookingFullday);
            }
          });
        }

        // CHECKIN
        if (allBookingsJson[el].checkIn !== state.checkIn) {
          checkInArr.push(allBookingsJson[el].checkIn);
        }
        // CHECKOUT
        if (allBookingsJson[el].checkOut !== state.checkOut) {
          checkOutArr.push(allBookingsJson[el].checkOut);
        }
        // if (allBookingsJson[el].fullDay !== state.fullDay) {
        //   fullDayArr.push(allBookingsJson[el].fullDay);
        // }
      });

      console.log(checkInArr);
      console.log(checkOutArr);
      console.log(fullDayArr);

      // SEARCH COMPARISON ARRAYS TO SEE IF NEW BOOKING IS AVALIABLE
      // TODO: GET THE FULLDAYS AND COMPARE

      const passFullDay = checkFullDays(
        newCheckInRef.current.value,
        newCheckOutRef.current.value,
        fullDayArr
      );
      console.log(passFullDay);
      // console.log(dateToMilliseconds(newCheckInRef.current.value));
      // if (
      //   fullDayArr.find(
      //     (el) => el === dateToMilliseconds(newCheckInRef.current.value)
      //   ) === undefined &&
      //   fullDayArr.find(
      //     (el) => el === dateToMilliseconds(newCheckOutRef.current.value)
      //   ) === undefined
      // ) {
      //   passFullDay = true;
      // }

      if (
        checkInArr.find(
          (el) => el === dateToMilliseconds(newCheckInRef.current.value)
        ) === undefined &&
        checkOutArr.find(
          (el) => el === dateToMilliseconds(newCheckOutRef.current.value)
        ) === undefined &&
        passFullDay === true
      ) {
        console.log('PASS');
        dispatch(
          actionTypes.booking({
            checkIn: dateToMilliseconds(newCheckInRef.current.value),
            checkOut: dateToMilliseconds(newCheckOutRef.current.value),
          })
        );
        history.push('/summary');
      } else {
        console.log(passFullDay);
        console.log('FFFFAILLLLLL');
        setError('Unfortunatley Those Dates Are Unavaliable');
      }
      // if (
      //   checkOutArr.find(
      //     (el) => el === dateToMilliseconds(newCheckOutRef.current.value)
      //   ) === undefined &&
      //   passFullDay === true
      // ) {
      //   console.log('PASS');
      // } else {
      //   console.log('FFFFAILLLLLL');
      //   setError('Unfortunatley Those Dates Are Unavaliable checkout');
      // }
      console.log(allBookingsJson);
    } catch {}
  };

  const cancelBookingBackdropContent = () => {
    setBackdropContent(
      <div>
        {error && <ErrorComponent message={error} />}
        <h2>Are You Sure You Want To Cancel Your Booking?</h2>
        <div className={classes.backdropBtnContainer}>
          <button className={classes.submitBtn} onClick={cancelBooking}>
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
          Check In:&nbsp;<span>{state.checkIn}</span>
        </li>
        <li>
          Check Out:&nbsp;<span>{state.checkOut}</span>
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
