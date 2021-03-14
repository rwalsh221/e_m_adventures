import React from 'react';

import logoWhite from '../../../assets/img/logo-white.png';
import classes from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  return (
    <nav className={classes.navigation}>
      <img src={logoWhite} alt="e and m logo" className={classes.logo}></img>
      <div className={classes.navBtnContainer}>
        <button className={classes.navBtn}>Our Place</button>
        <button className={classes.navBtn}>Experiences</button>
        <button className={classes.navBtn}>Local Eats</button>
      </div>
      <div className={classes.loginContainer}>
        <p>manage your ADVENTURE</p>
        <button className={classes.loginBtn}>
          <ion-icon name="menu-outline"></ion-icon>
          <ion-icon name="people-circle-outline"></ion-icon>
        </button>
      </div>
    </nav>
  );
};

export default HeaderNavigation;
