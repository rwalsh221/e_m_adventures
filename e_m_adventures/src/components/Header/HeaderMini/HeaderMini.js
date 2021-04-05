import React from 'react';
import { Link } from 'react-router-dom';

import classes from './HeaderMini.module.css';

import logoWhite from '../../../assets/img/logo-white.png';

const HeaderMini = () => {
  return (
    <header className={classes.head}>
      <Link to="/">
        <img className={classes.logoooooo} src={logoWhite} alt={'logo'}></img>
      </Link>
    </header>
  );
};

export default HeaderMini;
