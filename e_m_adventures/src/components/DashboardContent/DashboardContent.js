import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { LoremIpsum } from 'react-lorem-ipsum';

import classes from './DashboardContent.module.css';

const DashboardContent = () => {
  const [error, setError] = useState('');

  const { currentUser, logout } = useAuth();

  const history = useHistory();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
      history.pushState('/home');
    } catch {
      setError('Failed to logout');
    }
  };

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
        <div className={classes.bookingCardContent}>
          <ul>
            <li>Check In: 08/08/2021</li>
            <li>Check Out: 08/08/2021</li>
          </ul>
        </div>
        <div className={classes.bookingCardContent}>
          <ul>
            <li>Check In: 08/08/2021</li>
            <li>Check Out: 08/08/2021</li>
          </ul>
        </div>
        <div className={classes.bookingCardContent}>
          <ul>
            <li>Check In: 08/08/2021</li>
            <li>Check Out: 08/08/2021</li>
          </ul>
        </div>
        <div className={classes.bookingCardContent}>
          <ul>
            <li>Check In: 08/08/2021</li>
            <li>Check Out: 08/08/2021</li>
          </ul>
        </div>
      </div>
      {/* <React.Fragment>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong> {currentUser.email}
            <Link to="/update-profile" className={'btn btn-primary w-100 mt-3'}>
              Update Profile
            </Link>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          <Button variant={'link'} onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </React.Fragment> */}
    </main>
  );
};

export default DashboardContent;
