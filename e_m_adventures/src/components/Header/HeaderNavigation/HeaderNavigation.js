import React from 'react';
import { Link } from 'react-router-dom';

import { LoginButton } from '../../miniComponents/Buttons/Buttons';

import logoWhite from '../../../assets/img/logo-white.png';
import classes from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  return (
    <nav className={classes.navigation}>
      <img
        src={logoWhite}
        alt="e and m logo"
        className={classes.logo}
        onClick={() => {
          console.log('clclclcl');
        }}
      ></img>
      <div className={classes.navBtnContainer}>
        <button className={classes.navBtn}>Our Place</button>
        <button className={classes.navBtn}>Experiences</button>
        <button className={classes.navBtn}>Local Eats</button>
      </div>
      <div className={classes.loginContainer}>
        <Link to={'/dashboard'}>
          <p>manage your ADVENTURE</p>
        </Link>
        <LoginButton />
      </div>
    </nav>
  );
};

export default HeaderNavigation;
