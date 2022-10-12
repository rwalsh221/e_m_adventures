import React, { useState } from 'react';

import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
// import HeaderSearch from './HeaderSearch/HeaderSearch';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import classes from './Header.module.css';
import SearchPopUp from './OLDHeaderSearch/SearchPopUP/SearchPopUp';

import hero from '../../assets/img/caravan.jpg';

const Header = () => {
  const [popUp, setPopUp] = useState('none');

  const setPopUpHandler = (open) => {
    if (open) {
      setPopUp('none');
    } else {
      setPopUp('block');
    }
  };

  return (
    <header className={classes.header}>
      <HeaderNavigation />
      <HeaderSearch />
      <div className={classes.header_img_container}>
        <img src={hero} alt="hero" />
      </div>
      <div className={classes.line_break} />
      {/* <button
        type="button"
        className={classes.btnPopUp}
        onClick={() => {
          setPopUpHandler(false);
        }}
      >
        START YOUR ADVENTURE
      </button>

      <SearchPopUp displayProps={popUp} />
      <button
        type="button"
        className={classes.btnClose}
        onClick={() => {
          setPopUpHandler(true);
        }}
        style={{ display: popUp }}
      >
        X
      </button> */}
      <div className={classes.header_heading_container}>
        <h1 className={classes.heading}>
          Made possible by
          <br /> e &amp; m
        </h1>
      </div>
    </header>
  );
};

export default Header;
