import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
// import { dateToMilliseconds } from '../../../helpers/utilities';

import BookingUnavailable from './BookingUnavailable/BookingUnavailable';
import BookingAvailable from './BookingAvailable/BookingAvailable';
import { current } from 'immer';
import { useAuth } from '../../../contexts/AuthContext';

const BookingSummaryContent = (props) => {
  const state = useSelector((state) => state);
  const history = useHistory();

  const { currentUser } = useAuth();

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const [loading, setLoading] = useState(true);
  const [bookedDays, setBookedDays] = useState([]);
  const [content, setContent] = useState('hellow there');

  // add function to take props.checkin.
  // get all bookings from db.
  // add to array and search for checkin.
  // if -1 content = content. usstaete loading falese

  useEffect(() => {
    const dateAvaliable = async () => {
      try {
        const bookedDays = await fetch(`${database}fulldays.json`);

        let bookedDaysData = await bookedDays.json();
        console.log(bookedDaysData);
        setBookedDays([...bookedDaysData]);
      } catch (error) {
        console.error(error);
      }
    };

    dateAvaliable();
  }, []);

  const submitHandler = useCallback(async () => {
    const data = { ...state.headerSearch };
    let newBookedDays;
    const ref = `ref${nanoid()}`;
    bookedDays ? (newBookedDays = [...bookedDays]) : (newBookedDays = []);
    newBookedDays.push(data.checkIn, data.checkOut, ...data.fullDays);

    axios
      .patch(
        `${database}booking.json`,
        {
          [ref]: {
            ...data,
          },
        },
        { timeout: 2000 }
      )
      .catch((error) => {
        console.error(error);
      });

    axios
      .post(`${database}users/${currentUser.uid}/booking.json`, {
        bookingRef: ref,
        checkIn: data.checkIn,
        checkOut: data.checkOut,
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .patch(`${database}fulldays.json`, {
        ...newBookedDays,
      })
      .then((response) => {
        if (response.status === 200) history.push('/confirmation');
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookedDays, history, state.headerSearch, currentUser.uid]);

  useEffect(() => {
    if (
      bookedDays === null ||
      bookedDays.includes(state.headerSearch.checkIn)
    ) {
      setLoading(false);
      setContent(<BookingUnavailable />);
      console.log('date unavaliable');
    } else {
      setContent(<BookingAvailable submitHandler={submitHandler} />);
      setLoading(false);
    }
  }, [bookedDays, state.headerSearch.checkIn, submitHandler]);

  return loading ? <p>IS LOADING</p> : content;
};

export default BookingSummaryContent;
