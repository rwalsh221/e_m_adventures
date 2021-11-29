import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import ErrorComponent from '../ErrorComponent/ErrorComponent';
import errorTimeout from '../../../helpers/error/errorTimeout';

import classes from './DropdownMenu.module.css';

const DropdownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState('');

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    // setError('');

    try {
      await logout();
      setIsActive(false);
      history.pushState('/');
    } catch {
      errorTimeout(setError);
    }
  };

  const loggedInContent = (
    <ul>
      <li className={classes.listItem}>
        <Link to="/dashboard">My Account</Link>
      </li>
      <li className={classes.listItem}>
        <button
          type="button"
          className={classes.linkBtn}
          onClick={handleLogout}
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const loggedOutContent = (
    <ul>
      <li className={classes.listItem}>
        <Link to="/login">Login</Link>
      </li>
      <li className={classes.listItem}>
        <Link to="/signup">SignUp</Link>
      </li>
    </ul>
  );

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };
    // If the item is active (ie open) then listen for clicks
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }

    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [isActive]);

  const onClick = () => setIsActive(!isActive);

  return (
    <div className={classes.menuContainer}>
      {error && <ErrorComponent message={error} />}
      <button type="button" onClick={onClick} className={classes.menuTrigger}>
        <ion-icon name="menu-outline" />
        <ion-icon name="people-circle-outline" />
      </button>
      <nav
        ref={dropdownRef}
        className={`${classes.menu} ${
          isActive ? classes.active : classes.inactive
        }`}
      >
        {currentUser ? loggedInContent : loggedOutContent}
      </nav>
    </div>
  );
};

export default DropdownMenu;
