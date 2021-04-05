import React, { useRef, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import classes from './DropdownMenu.module.css';

const DropdownMenu = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  // const [error, setError] = useState('');

  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    // setError('');

    try {
      await logout();
      setIsActive(false);
      history.pushState('/');
    } catch {
      console.log('Failed to logout');
    }
  };

  const loggedInContent = (
    <ul>
      <li className={classes.listItem}>
        <Link to="/dashboard">My Account</Link>
      </li>
      <li className={classes.listItem}>
        <button className={classes.linkBtn} onClick={handleLogout}>
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
      <button onClick={onClick} className={classes.menuTrigger}>
        <ion-icon name="menu-outline"></ion-icon>
        <ion-icon name="people-circle-outline"></ion-icon>
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
