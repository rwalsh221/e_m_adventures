import React, { useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validateDate } from '../../../helpers/validation';
import { dateToMilliseconds, getFullDays } from '../../../helpers/utilities';
import ErrorComponent from '../../miniComponents/ErrorComponent/ErrorComponent';
import { nanoid } from 'nanoid';
import { bookingIsAvaliable } from '../../../helpers/booking/bookingIsAvaliable';
import { deleteTimeout } from '../../../helpers/booking/deleteTimeout';

import * as actionTypes from './HeaderSearchSlice';

import classes from './HeaderSearch.module.css';

// TODO: LOOK AT HAVING CURRENT HOLD BOOKING STATE SO IF USER HAS HOLD BOOKING THEY CAN GO BACK IF THEY MESS UP
// TODO: TIMEOUT FUNCTION TO CANCEL SUMMARY AFTER 5MIN

const mapDispatch = { ...actionTypes };

const HeaderSearch = (props) => {
  const dispatch = useDispatch();

  const [error, setError] = useState();

  const checkIn = useRef();
  const checkOut = useRef();
  const history = useHistory();

  let formIsValid = false;

  const holdCurrentBooking = async (checkIn, checkOut) => {
    const database =
      'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

    const patchConfig = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const putConfig = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const fullDays = getFullDays(checkIn, checkOut);

    const currentBooking = {
      checkIn: checkIn,
      checkOut: checkOut,
      fullDays: fullDays,
      timeStamp: Date.now(),
    };

    const ref = `ref${nanoid()}`;

    try {
      // ADD CURRENT BOOKING TO DATABASE
      const patchHoldBookings = await fetch(
        `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...patchConfig,
          body: JSON.stringify({
            [ref]: {
              ...currentBooking,
            },
          }),
        }
      );
      if (!patchHoldBookings.ok) throw new Error('patch hold bookign failed');

      const getHoldBookings = await fetch(
        `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
      );
      const getHoldBookingsJson = await getHoldBookings.json();

      if (!getHoldBookings.ok) throw new Error('get hold bookign failed');

      // DELETE CURRENT BOOKING FROM DATABASE FOR SEARCH
      delete getHoldBookingsJson[ref];

      let getHoldBookingsJsonTimeout = deleteTimeout(getHoldBookingsJson);

      if (
        bookingIsAvaliable(getHoldBookingsJsonTimeout, currentBooking, setError)
      ) {
        // ADD CURRENT BOOKING BACK TO HOLDBOOKING DB
        getHoldBookingsJsonTimeout = {
          ...getHoldBookingsJsonTimeout,
          [ref]: currentBooking,
        };

        const patchHoldBookings = await fetch(
          `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
          {
            ...putConfig,
            body: JSON.stringify({
              ...getHoldBookingsJsonTimeout,
            }),
          }
        );
        if (!patchHoldBookings.ok) throw new Error('patch hold bookign failed');

        return true;
      } else {
        const patchHoldBookings = await fetch(
          `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
          {
            ...putConfig,
            body: JSON.stringify({
              ...getHoldBookingsJsonTimeout,
            }),
          }
        );
        if (!patchHoldBookings.ok) throw new Error('patch hold bookign failed');
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitSearchHandler = async () => {
    formIsValid = validateDate(checkIn.current.value, checkOut.current.value);
    if (formIsValid) {
      if (
        await holdCurrentBooking(
          dateToMilliseconds(checkIn.current.value),
          dateToMilliseconds(checkOut.current.value)
        )
      ) {
        dispatch(
          actionTypes.booking({
            checkIn: dateToMilliseconds(checkIn.current.value),
            checkOut: dateToMilliseconds(checkOut.current.value),
          })
        );
        history.push('/summary', {
          pathname: 'summary',
          state: { holdStatus: false },
        });
      } else {
        history.push({
          pathname: 'summary',
          state: { holdStatus: true },
        });
      }
    } else {
      setError('Please try again');
    }
  };

  return (
    <div>
      <div className={classes.searchContainer}>
        <form className={classes.searchForm}>
          <div className={classes.start}>
            <h6>Start Your Adventure</h6>
          </div>
          <div className={classes.date}>
            <label htmlFor="checkIn" className={classes.searchLabel}>
              Check-in
            </label>
            <input type="date" id="checkIn" ref={checkIn}></input>
          </div>
          <div className={classes.date}>
            <label htmlFor="checkOut" className={classes.searchLabel}>
              Check-out
            </label>
            <input type="date" id="checkOut" ref={checkOut}></input>
          </div>
          <div className={classes.guests}>
            <label htmlFor="guests" className={classes.searchLabel}>
              Guests
            </label>
            <select id="guests">
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
              <option value="four">Four</option>
            </select>
          </div>

          <button
            className={classes.btnSubmit}
            onClick={async (e) => {
              e.preventDefault();
              submitSearchHandler();
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
      {error && <ErrorComponent message={error} />}
    </div>
  );
};

export default connect(null, mapDispatch)(HeaderSearch);
