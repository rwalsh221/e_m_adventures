import React from 'react';
import { Link } from 'react-router-dom';

import HeaderSearch from '../HeaderSearch/HeaderSearch';
import DropdownMenu from '../../miniComponents/DropdownMenu/DropdownMenu';

import logoWhite from '../../../assets/img/logo-white.png';
import classes from './HeaderSmall.module.css';

const HeaderSmall = () => {
  return (
    <header className={classes.headerSmall}>
      <Link to={'/'}>
        <img src={logoWhite} alt="e and m logo" className={classes.logo}></img>
      </Link>
      <HeaderSearch className={classes.search} />
      <div className={classes.loginContainer}>
        <p>manage your ADVENTURE</p>
        <DropdownMenu />
      </div>
    </header>
  );
};

export default HeaderSmall;
