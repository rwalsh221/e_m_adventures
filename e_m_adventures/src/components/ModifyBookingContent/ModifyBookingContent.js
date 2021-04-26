import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

import classes from './ModifyBookingContent.module.css';

const ModifyBookingContent = () => {
  const state = useSelector((state) => state.modifyBooking);

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const { currentUser } = useAuth();

  const getBookingObj = async () => {
    const patchConfig = {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      const bookingObj = await fetch(
        `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
      );

      const bookingObjJson = await bookingObj.json();

      console.log(bookingObjJson);
      const bookingObjKeys = Object.keys(bookingObjJson);
      console.log(bookingObjKeys);

      bookingObjKeys.filter((bookingKey, index) => {
        if (bookingObjJson[bookingKey].bookingRef === state.bookingRef) {
          console.log(bookingKey);
          console.log(bookingObjJson[bookingKey].bookingRef);
          console.log(index);
          delete bookingObjJson[bookingKey];
          console.log(bookingObjJson);
        }
        // console.log(bookingObjJson[bookingKey].bookingRef);
      });

      // SEND UPDATED BOOING OBJECT TO DATABASE. FIREST NEED TO GET FULL DAYS AND UPADTE AND GET ALL BOOKINGS AND UPDATE
      //   const updateUserBookings = await fetch(
      //     `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`,
      //     { ...patchConfig, body: JSON.stringify({ ...bookingObjJson }) }
      //   );
    } catch (error) {
      console.error(error);
    }
  };

  //   getBookingObj();

  return (
    <main className={classes.main}>
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
      <Link
        role={'button'}
        // to={'/'}
        className={classes.submitBtn}
        onClick={getBookingObj}
      >
        Cancel Your Booking
      </Link>
    </main>
  );
};

export default ModifyBookingContent;
