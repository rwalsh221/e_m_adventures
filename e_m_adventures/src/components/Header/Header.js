import React, { useState } from 'react';

import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import classes from './Header.module.css';
import SearchPopUp from './HeaderSearch/SearchPopUP/SearchPopUp';

const Header = (props) => {
  const [popUp, setPopUp] = useState('none');
  console.log('REDEEDEDDDDDDD');

  let test = 'none';
  const setPopUpHandler = (open) => {
    if (open) {
      setPopUp('none');
    } else {
      setPopUp('block');
    }
  };

  // let test = 'none';
  return (
    <header className={classes.header}>
      <HeaderNavigation />
      <HeaderSearch />
      <button
        className={classes.btnPopUp}
        onClick={() => {
          setPopUpHandler(false);
        }}
      >
        START YOUR ADVENTURE
      </button>
      <SearchPopUp display={popUp} />
      <button
        className={classes.btnClose}
        onClick={() => {
          setPopUpHandler(true);
        }}
        style={{ display: popUp }}
      >
        X
      </button>
      <h1 className={classes.heading}>Made possible by e &amp; m</h1>
    </header>
  );
};

export default Header;
