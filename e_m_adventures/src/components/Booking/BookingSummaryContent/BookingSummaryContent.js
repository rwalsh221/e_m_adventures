import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

import deleteHoldCurrentBooking from '../../../helpers/booking/deleteHoldCurrentBooking';
import {
  database,
  patchConfig,
  postConfig,
} from '../../../helpers/AsyncHelpers/AsyncConfig';
import { useAuth } from '../../../contexts/AuthContext';
import cancelBooking from '../../../helpers/booking/cancelBooking';

import BookingUnavailable from './BookingUnavailable/BookingUnavailable';
import BookingAvailable from './BookingAvailable/BookingAvailable';
import Spinner from '../../miniComponents/Spinner/Spinner';

const BookingSummaryContent = () => {
  const reduxState = useSelector((state) => state);

  const history = useHistory();

  const { currentUser } = useAuth();

  const [unavaliableDaysState, setUnavaliableDaysState] = useState({
    loading: true,
    data: [],
  });
  const [content, setContent] = useState(<Spinner />);

  const location = useLocation();

  let bookingTimeout;

  // TODO: check google
  const setBookingTimeOut = useCallback(() => {
    console.log('BOOKING TIMEOUT START');
    bookingTimeout = setTimeout(async () => {
      history.replace('/timeout');
    }, 300000); // TIMEOUT IN 5 MINUTES
  }, [bookingTimeout]);

  useEffect(() => {
    const setBookedDaysState = async () => {
      try {
        const unavaliableDays = await fetch(
          `${database}fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
        );

        const unavaliableDaysData = await unavaliableDays.json();

        if (unavaliableDaysData) {
          setUnavaliableDaysState({
            loading: false,
            data: [...unavaliableDaysData],
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    setBookedDaysState();
    return () => {
      clearTimeout(bookingTimeout);
      deleteHoldCurrentBooking(reduxState.headerSearch.holdRef);
    };
  }, [reduxState.headerSearch.holdRef, bookingTimeout]);

  const submitHandler = useCallback(async () => {
    const data = { ...reduxState.headerSearch };

    let newUnavaliableDays = [];
    if (!unavaliableDaysState.loading)
      newUnavaliableDays = [...unavaliableDaysState.data];
    const ref = `ref${nanoid()}`;

    newUnavaliableDays.push(data.checkIn, ...data.fullDays);

    try {
      // SEND BOOKING TO BOOKING DATABASE
      const submitBooking = await fetch(
        `${database}booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...patchConfig,
          body: JSON.stringify({
            [ref]: {
              ...data,
            },
          }),
        }
      );

      if (!submitBooking.ok) throw Error(submitBooking.message);

      // SEND BOOKING TO USER DATABASE
      const submitUserBookings = await fetch(
        `${database}users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        {
          ...postConfig,
          body: JSON.stringify({
            bookingRef: ref,
            checkIn: data.checkIn,
            checkOut: data.checkOut,
          }),
        }
      );

      if (!submitUserBookings.ok) throw new Error(submitUserBookings.message);

      // UPDATE FULLDAYS DATABASE WITH NEW BOOKING
      const submitFulldays = await fetch(
        `${database}fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        { ...patchConfig, body: JSON.stringify({ ...newUnavaliableDays }) }
      );

      if (!submitFulldays.ok) throw new Error(submitFulldays.message);

      // IF USER IS MODIFYING A CURRENT BOOKING
      if (location.state.modify) {
        await cancelBooking(reduxState.modifyBooking, currentUser, history);
      }

      history.push('/confirmation');
    } catch (err) {
      console.error(err.message);
    }
  }, [
    reduxState,
    unavaliableDaysState,
    history,
    currentUser,
    location.state.modify,
  ]);

  useEffect(() => {
    if (!unavaliableDaysState.loading) {
      if (unavaliableDaysState.data.includes(reduxState.headerSearch.checkIn)) {
        setContent(<BookingUnavailable />);
      } else if (location.state.holdStatus) {
        setContent(<BookingUnavailable holdBookingProps />);
      } else {
        setBookingTimeOut();
        setContent(
          <BookingAvailable
            submitHandlerProps={submitHandler}
            setBookingTimeOutProps={setBookingTimeOut}
          />
        );
      }
    }
  }, [
    unavaliableDaysState,
    reduxState.headerSearch.checkIn,
    submitHandler,
    location.state.holdStatus,
    location.state.ref,
    setBookingTimeOut,
  ]);

  return content;
};

export default BookingSummaryContent;
