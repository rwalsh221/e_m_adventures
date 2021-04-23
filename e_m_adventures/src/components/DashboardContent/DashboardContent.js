import React, { useEffect, useRef, useState } from 'react';
// import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoremIpsum } from 'react-lorem-ipsum';
import { formatDate } from '../../helpers/utilities';

import Backdrop from '../miniComponents/Backdrop/Backdrop';

import classes from './DashboardContent.module.css';

const DashboardContent = () => {
  // const [error, setError] = useState('');
  const [bookingsFuture, setBookingsFuture] = useState(null);
  const [bookingsPast, setBookingsPast] = useState(null);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [backDropContent, setBackdropContent] = useState(null);

  const { currentUser, logout } = useAuth();

  const backdropRef = useRef(null);
  const bookingRef = useRef(null);

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const history = useHistory();

  const sortArray = (arr, key = 'checkIn') => {
    arr.sort((a, b) => parseFloat(a[key]) - parseFloat(b[key]));
  };

  const handleLogout = async () => {
    // setError('');

    try {
      await logout();
      history.pushState('/');
    } catch {
      console.log('Failed to logout');
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        // GET BOOKINGS FROM DATABASE
        const myBookings = await fetch(
          `${database}/users/${currentUser.uid}/booking.json?auth=${process.env.REACT_APP_FIREBASE_DATABASE_SECRET}`
        );

        let myBookingsData = await myBookings.json();
        let myBookingsDataArrFuture = [];
        let myBookingsDataArrPast = [];

        // PUSH BOOKINGS TOO ARRAY
        for (let key in myBookingsData) {
          // GET TODAYS DATE
          const date = new Date();

          if (myBookingsData[key].checkIn > date.getTime()) {
            myBookingsDataArrFuture.push(myBookingsData[key]);
          } else if (myBookingsData[key].checkIn < date.getTime()) {
            myBookingsDataArrPast.push(myBookingsData[key]);
          }
        }

        // SORT ARRAY BY DATE
        sortArray(myBookingsDataArrFuture);
        sortArray(myBookingsDataArrPast);

        // SET STATES WITH SORTED ARRAY
        setBookingsFuture(myBookingsDataArrFuture);
        setBookingsPast(myBookingsDataArrPast);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookings();
  }, [currentUser.uid]);

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (
        backdropRef.current !== null &&
        !backdropRef.current.contains(e.target)
      ) {
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

  let contentFuture = [];
  let contentPast = [];

  // RENDER FUTURE BOOKING CONTENT
  for (let key in bookingsFuture) {
    contentFuture.push(
      <div
        className={classes.bookingCardContent}
        id={key}
        key={key}
        onClick={(e) => {
          if (e.target.tagName === 'LI')
            setBackdropContent(
              bookingsFuture[e.target.parentNode.parentNode.id]
            );
          setShowBackdrop(true);
        }}
      >
        <ul>
          <li>
            Ref:
            <span className={classes.ref}>
              {bookingsFuture[key].bookingRef}
            </span>
          </li>
          <li>{`Check In: ${formatDate(
            bookingsFuture[key].checkIn / 1000
          )}`}</li>
          <li>{`Check Out: ${formatDate(
            bookingsFuture[key].checkOut / 1000
          )}`}</li>
        </ul>
      </div>
    );
  }

  // RENDER PAST BOOKINGS CONTENT
  for (let key in bookingsPast) {
    contentPast.push(
      <div className={classes.bookingCardContent} key={key}>
        <ul>
          <li>
            Ref:
            <span className={classes.ref}>
              {bookingsFuture[key].bookingRef}
            </span>
          </li>
          <li>{`Check In: ${formatDate(bookingsPast[key].checkIn / 1000)}`}</li>
          <li>{`Check Out: ${formatDate(
            bookingsPast[key].checkOut / 1000
          )}`}</li>
        </ul>
      </div>
    );
  }

  return (
    <main className={classes.grid}>
      <Backdrop
        show={showBackdrop}
        content={backDropContent}
        ref={backdropRef}
      />
      <h1 className={classes.header}>{currentUser.email}'s DashBoard</h1>
      <div className={classes.profile}>
        <h2 className={classes.profileHeading}>Profile</h2>
        <ul>
          <li>Name: currentUser Name</li>
          <li>
            BIO: <LoremIpsum p={1} />
          </li>
        </ul>
      </div>
      <div className={classes.btnContainer}>
        <button onClick={handleLogout} className={classes.logoutBtn}>
          Logout
        </button>
        <Link to={'/update-profile'} className={classes.updateBtn}>
          Update Profile
        </Link>
      </div>
      <h3 className={classes.bookingHeading}>Your Upcoming Bookings</h3>
      <div className={classes.futureDateContainer}>
        {contentFuture.length === 0 ? (
          <div className={classes.bookingCardContent}>
            YOU HAVE NO UPCOMING BOOKINGS
          </div>
        ) : (
          contentFuture
        )}
      </div>
      <h3 className={classes.bookingHeading}>Your past Bookings</h3>
      <div className={classes.pastDateContainer}>
        {contentPast.length === 0 ? (
          <div className={classes.bookingCardContent}>
            YOU HAVE NO PAST BOOKINGS
          </div>
        ) : (
          contentPast
        )}
      </div>
    </main>
  );
};

export default DashboardContent;
