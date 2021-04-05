import React, { useEffect, useState } from 'react';
// import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoremIpsum } from 'react-lorem-ipsum';
import { formatDate } from '../../helpers/utilities';

import classes from './DashboardContent.module.css';

const DashboardContent = () => {
  // const [error, setError] = useState('');
  const [bookings, setBookings] = useState(null);

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const { currentUser, logout } = useAuth();

  const history = useHistory();

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
        const myBookings = await fetch(
          `${database}/users/${currentUser.uid}/booking.json`
        );

        console.log(myBookings);
        let myBookingsData = await myBookings.json();
        console.log(myBookingsData);
        setBookings(myBookingsData);
        // console.log(bookings);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBookings();
  }, [currentUser.uid]);

  let content = [];

  for (let key in bookings) {
    content.push(
      <div className={classes.bookingCardContent} key={key}>
        <ul>
          <li>
            Ref:<span className={classes.ref}>{bookings[key].bookingRef}</span>
          </li>
          <li>{`Check In: ${formatDate(bookings[key].checkIn / 1000)}`}</li>
          <li>{`Check Out: ${formatDate(bookings[key].checkOut / 1000)}`}</li>
        </ul>
      </div>
    );
  }

  return (
    <main className={'contentGrid'}>
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
      <h3 className={classes.bookingHeading}>Your Bookings</h3>
      <div className={classes.bookingCard}>
        {content.length === 0 ? null : content}
      </div>
    </main>
  );
};

export default DashboardContent;
