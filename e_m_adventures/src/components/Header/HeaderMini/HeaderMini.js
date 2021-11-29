import React from 'react';
import { Link } from 'react-router-dom';

import classes from './HeaderMini.module.css';

import logoWhite from '../../../assets/img/logo-white.png';

const HeaderMini = () => (
  <header className={classes.head}>
    <Link to="/">
      <img className={classes.logo} src={logoWhite} alt="logo" />
    </Link>
  </header>
);

export default HeaderMini;
