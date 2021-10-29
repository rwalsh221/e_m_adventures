import React from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from '../../miniComponents/DropdownMenu/DropdownMenu';

import logoWhite from '../../../assets/img/logo-white.png';
import classes from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  return (
    <nav className={classes.navigation}>
      <img
        src={logoWhite}
        alt="e and m logo"
        className={classes.logo}
        onClick={() => {}}
      ></img>
      <div className={classes.navBtnContainer}>
        {/* <button className={classes.navBtn}>Our Accommodation</button> */}
        <Link
          className={classes.foodBtn}
          role="button"
          to={'/accommodation'}
          // onClick={props.clicked}
        >
          Our Accommodation
        </Link>
        <button className={classes.navBtn}>Experiences</button>
        <button className={classes.navBtn}>Local Eats</button>
      </div>
      <div className={classes.loginContainer}>
        <p className={classes.loginManage}>manage your ADVENTURE</p>
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default HeaderNavigation;
