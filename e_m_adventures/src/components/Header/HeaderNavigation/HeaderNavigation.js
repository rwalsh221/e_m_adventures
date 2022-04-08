import React from 'react';
import { Link } from 'react-router-dom';

import DropdownMenu from '../../miniComponents/DropdownMenu/DropdownMenu';
import NavigationBtn from '../../miniComponents/Buttons/HeaderNavigation/NavigationBtn';

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
      <NavigationBtn
        btnContentProps="our accommodation"
        routeProps="/accommodation"
      />
      <NavigationBtn btnContentProps="expriences" routeProps="/" />
      <NavigationBtn btnContentProps="local eats" routeProps="/" />
    </div>
    <div className={classes.loginContainer}>
      <p className={classes.loginManage}>manage your ADVENTURE</p>
      <DropdownMenu />
    </div>
  </nav>
);

export default HeaderNavigation;
