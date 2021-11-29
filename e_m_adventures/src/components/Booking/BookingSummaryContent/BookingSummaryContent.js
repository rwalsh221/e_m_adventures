import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { useAuth } from '../../../contexts/AuthContext';
import { cancelBooking } from '../../../helpers/booking/cancelBooking';

import BookingUnavailable from './BookingUnavailable/BookingUnavailable';
import BookingAvailable from './BookingAvailable/BookingAvailable';
import Spinner from '../../miniComponents/Spinner/Spinner';

const BookingSummaryContent = () => {
  const state = useSelector((state) => state);

  const history = useHistory();

  const { currentUser } = useAuth();

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const [bookedDays, setBookedDays] = useState([]);
  const [content, setContent] = useState(<Spinner />);

  const location = useLocation();

  // const bookingData = getBookingData(currentUser);

  useEffect(() => {
    const dateAvaliable = async () => {
      try {
        const unavaliableDays = await fetch(
          `${database}fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
        );

        const unavaliableDaysData = await unavaliableDays.json();

        if (unavaliableDaysData) {
          setBookedDays([...unavaliableDaysData]);
        }
        // unavaliableDaysData
        //   ? setBookedDays([...unavaliableDaysData])
        //   : setBookedDays([]);
      } catch (error) {
        console.error(error);
      }
    };

    dateAvaliable();
  }, []);

  const submitHandler = useCallback(async () => {
    const data = { ...state.headerSearch };
    let newBookedDays = [];
    const ref = `ref${nanoid()}`;
    if (bookedDays) newBookedDays = [...bookedDays];
    // bookedDays ? (newBookedDays = [...bookedDays]) : (newBookedDays = []);
    newBookedDays.push(data.checkIn, ...data.fullDays);

    const patchConfig = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    const postConfig = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    try {
      // send booking to booking database key
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

      // send booking to user database key
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

      // update fulldays database key
      const submitFulldays = await fetch(
        `${database}fulldays.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
        { ...patchConfig, body: JSON.stringify({ ...newBookedDays }) }
      );

      if (!submitFulldays.ok) throw new Error(submitFulldays.message);

      if (location.state.modify) {
        await cancelBooking(state.modifyBooking, currentUser, history);
      }

      history.push('/confirmation');
    } catch (err) {
      console.error(err.message);
    }
  }, [
    bookedDays,
    history,
    state.headerSearch,
    state.modifyBooking,
    currentUser,
    location.state.modify,
  ]);

  useEffect(() => {
    if (bookedDays === undefined) {
      // return;
    } else if (bookedDays.includes(state.headerSearch.checkIn)) {
      setContent(<BookingUnavailable />);
    } else if (location.state.holdStatus) {
      setContent(<BookingUnavailable holdBookingProps />);
    } else {
      setContent(
        <BookingAvailable
          submitHandlerProps={submitHandler}
          ref={location.state.ref}
        />
      );
    }
  }, [
    bookedDays,
    state.headerSearch.checkIn,
    submitHandler,
    location.state.holdStatus,
    location.state.ref,
  ]);

  return content;
};

export default BookingSummaryContent;
