import React, { useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validateDate } from '../../../helpers/validation';
import { dateToMilliseconds, getFullDays } from '../../../helpers/utilities';
import ErrorComponent from '../../miniComponents/ErrorComponent/ErrorComponent';
import { nanoid } from 'nanoid';

import * as actionTypes from './HeaderSearchSlice';

import classes from './HeaderSearch.module.css';

const mapDispatch = { ...actionTypes };

const HeaderSearch = (props) => {
  const dispatch = useDispatch();

  const [error, setError] = useState();

  const checkIn = useRef();
  const checkOut = useRef();
  const history = useHistory();

  let formIsValid = false;

  const checkFullDays = (checkIn, checkOut, arr) => {
    console.log('check full day');
    console.log(checkIn);
    console.log(arr);
    const fullDayUnavailable = [];
    // const checkInMilli = dateToMilliseconds(checkIn);
    // const checkOutMilli = dateToMilliseconds(checkOut);
    // console.log(checkInMilli);
    console.log(checkIn);
    console.log(checkOut);
    const newBookingFullDays = getFullDays(checkIn, checkOut);

    console.log(newBookingFullDays);
    arr.forEach((el) => {
      const element = el;
      if (newBookingFullDays.indexOf(element) !== -1) {
        fullDayUnavailable.push(element);
      }
      // newBookingFullDays.find((el) => {
      //   if (el === element) {
      //     fullDayUnavailable.push(element);
      //   }
      // });
    });
    console.log(fullDayUnavailable);
    if (
      arr.indexOf(checkIn) === -1 &&
      arr.indexOf(checkOut) === -1 &&
      fullDayUnavailable.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const holdBookingAvaliable = (allHoldBookings, currentBooking) => {
    if (allHoldBookings === {}) return true;
    console.log(currentBooking.fullDays);
    setError('');
    // COMPARISON ARRAYS
    let checkInArr = [];
    let checkOutArr = [];
    let fullDayArr = [];
    try {
      // const { allBookingsJson } = await getBookingData();

      const allHoldBookingsKeys = Object.keys(allHoldBookings);
      console.log(allHoldBookingsKeys);

      // // GET FULL DAYS OF MODIFIED BOOKING

      // const stateFullDays = getFullDays(currentBooking.checkIn, currentBooking.checkOut);

      // TODO: maybe findinex - this not working
      // ADD VALUES TO COMPARISON ARRAY IF NOT EQUAL TO CURRENT BOOKING
      allHoldBookingsKeys.forEach((el) => {
        // FULL DAYS
        console.log(allHoldBookings[el].fullDays);
        console.log(currentBooking.fullDays);
        if (allHoldBookings[el].fullDays !== undefined) {
          allHoldBookings[el].fullDays.forEach((el) => {
            const bookingFullday = el;
            console.log(bookingFullday);

            if (
              currentBooking.fullDays.indexOf(bookingFullday) !== -1 ||
              currentBooking.fullDays.length === 0
            ) {
              console.log('PUUUSHSHSHSHSHSS');
              fullDayArr.push(bookingFullday);
            } else {
              console.log('nofind');
            }
          });
        }

        console.log(fullDayArr);

        // CHECKIN
        if (allHoldBookings[el].checkIn !== currentBooking.checkIn) {
          checkInArr.push(allHoldBookings[el].checkIn);
        }
        // CHECKOUT
        if (allHoldBookings[el].checkOut !== currentBooking.checkOut) {
          checkOutArr.push(allHoldBookings[el].checkOut);
        }
      });

      // SEARCH COMPARISON ARRAYS TO SEE IF NEW BOOKING IS AVALIABLE
      console.log('test1');
      const passFullDay = checkFullDays(
        currentBooking.checkIn,
        currentBooking.checkOut,
        fullDayArr
      );

      console.log(passFullDay);
      console.log('test');

      if (
        checkInArr.indexOf(currentBooking.checkIn) === -1 &&
        checkOutArr.indexOf(currentBooking.checkOut) === -1 &&
        passFullDay === true
      ) {
        // dispatch(
        //   actionTypes.booking({
        //     checkIn: dateToMilliseconds(currentBooking.checkIn),
        //     checkOut: dateToMilliseconds(currentBooking.checkOut),
        //   })
        // );
        console.log('tiss true');
        return true;
      } else {
        console.log('/bookingUnavaliable');
      }
    } catch {}
  };

  const holdBookingTime = (allHoldBookings) => {
    const bookings = allHoldBookings;
    const allHoldBookingsKeys = Object.keys(bookings);

    // 10 MINUTES IN MILLI
    const bookingTimeOut = 600000;

    const deleteArr = [];

    console.log(allHoldBookingsKeys);

    allHoldBookingsKeys.forEach((el) => {
      const futureTime = bookings[el].timeStamp + bookingTimeOut;
      if (futureTime < Date.now()) {
        deleteArr.push(el);
      }
    });

    console.log(deleteArr);
    deleteArr.forEach((el) => {
      delete bookings[el];
    });

    return bookings;
  };

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

      // const copyGetHoldBookingsJson = { ...getHoldBookingsJson };
      console.log(getHoldBookingsJson);
      console.log(getHoldBookingsJson[ref]);
      delete getHoldBookingsJson[ref];
      console.log(getHoldBookingsJson);

      const getHoldBookingsJsonTimeout = holdBookingTime(getHoldBookingsJson);
      console.log(getHoldBookingsJsonTimeout);
      console.log(
        holdBookingAvaliable(getHoldBookingsJsonTimeout, currentBooking)
      );

      if (holdBookingAvaliable(getHoldBookingsJsonTimeout, currentBooking)) {
        console.log('pass');
        const patchHoldBookings = await fetch(
          `${database}holdCurrentBooking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
          {
            ...patchConfig,
            body: JSON.stringify({
              ...getHoldBookingsJsonTimeout,
            }),
          }
        );
        if (!patchHoldBookings.ok) throw new Error('patch hold bookign failed');
        console.log('true');
        return true;
      } else {
        console.log('false');
        return false;
      }
    } catch (error) {
      console.error(error);
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
              console.log(checkIn.current.value);
              console.log(checkOut.current.value);
              console.log();

              formIsValid = validateDate(
                checkIn.current.value,
                checkOut.current.value
              );
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
                  history.push('/summary');
                } else {
                  console.log('unfor unavalible');
                }

                // console.log('if');
                // await holdCurrentBooking(
                //   dateToMilliseconds(checkIn.current.value),
                //   dateToMilliseconds(checkOut.current.value)
                // );
              } else {
                setError('Please try again');
              }
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
