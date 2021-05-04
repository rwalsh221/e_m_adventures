import classes from './Backdrop.module.css';
import React from 'react';

import { Link } from 'react-router-dom';

import img from '../../../assets/img/morecambe.jpg';

const Backdrop = React.forwardRef((props, ref) => {
  // const database =
  //   'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  // const { currentUser } = useAuth();

  // const getBookingObj = async () => {
  //   try {
  //     const bookingObj = await fetch(
  //       `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
  //     );

  //     const bookingObjJson = await bookingObj.json();

  //     console.log(bookingObjJson);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // if (props.show) getBookingObj();

  return props.show ? (
    <div ref={ref} className={`${classes.backdrop}`}>
      {props.children}
    </div>
  ) : null;
});

export default Backdrop;
