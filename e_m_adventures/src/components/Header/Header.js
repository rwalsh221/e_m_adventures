import React from 'react';

import HeaderNavigation from './HeaderNavigation/HeaderNavigation';

import HeaderSearch from '../HeaderSearch/HeaderSearch';
import classes from './Header.module.css';

import hero from '../../assets/img/caravan.jpg';

const Header = () => (
  <header className={classes.header}>
    <HeaderNavigation />
    <HeaderSearch />
    <div className={classes.header_img_container}>
      <img src={hero} alt="hero" />
    </div>
    <div className={classes.line_break} />
    <div className={classes.header_heading_container}>
      <h1 className={classes.heading}>
        Made possible by
        <br /> e &amp; m
      </h1>
    </div>
  </header>
);

export default Header;
