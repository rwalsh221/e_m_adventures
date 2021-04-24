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
      <div className={classes.contentLeft}>
        <h2>Your Going To Capernwray</h2>
        <ul className={classes.content}>
          <li>
            <span className={classes.subHeading}>Booking Reference:&nbsp;</span>
            {props.content.bookingRef}
          </li>
          <li>
            <span className={classes.subHeading}>Check In:&nbsp;</span>
            {props.content.checkIn}
          </li>
          <li>
            <span className={classes.subHeading}>Check Out:&nbsp;</span>
            {props.content.checkOut}
          </li>
        </ul>
      </div>
      <div className={classes.contentRight}>
        <img src={img} alt={'backdrop'}></img>
      </div>
      <div className={classes.contentBtm}>
        <Link className={classes.modifyBtn} role={'button'} to={'/'}>
          Change Your Booking
        </Link>
      </div>
    </div>
  ) : null;
});

export default Backdrop;
