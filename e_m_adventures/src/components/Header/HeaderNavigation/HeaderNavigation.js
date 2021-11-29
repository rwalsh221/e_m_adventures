import React from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from '../../miniComponents/DropdownMenu/DropdownMenu';

import logoWhite from '../../../assets/img/logo-white.png';
import classes from './HeaderNavigation.module.css';

const HeaderNavigation = () => (
  <nav className={classes.navigation}>
    <img
      aria-hidden
      src={logoWhite}
      alt="e and m logo"
      className={classes.logo}
      onClick={() => {}}
    />
    <div className={classes.navBtnContainer}>
      <Link className={classes.foodBtn} role="button" to="/accommodation">
        Our Accommodation
      </Link>
      <button type="button" className={classes.navBtn}>
        Experiences
      </button>
      <button type="button" className={classes.navBtn}>
        Local Eats
      </button>
    </div>
    <div className={classes.loginContainer}>
      <p className={classes.loginManage}>manage your ADVENTURE</p>
      <DropdownMenu />
    </div>
  </nav>
);

export default HeaderNavigation;
