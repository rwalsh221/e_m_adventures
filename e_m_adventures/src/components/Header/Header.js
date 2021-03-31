import React, { useState } from 'react';

import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import classes from './Header.module.css';
import { useAuth } from '../../contexts/AuthContext';

const Header = (props) => {
  const [popUp, setPopUp] = useState(true);

  return (
    <header className={classes.header}>
      <HeaderNavigation />
      <HeaderSearch />
      <button className={classes.btnPopUp} onClick={() => setPopUp(true)}>
        START YOUR ADVENTURE
      </button>
      <h1 className={classes.heading}>Made possible by e &amp; m</h1>
    </header>
  );
};

export default Header;
