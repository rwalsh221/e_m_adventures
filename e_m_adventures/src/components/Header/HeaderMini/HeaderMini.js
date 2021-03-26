import React from 'react';

import classes from './HeaderMini.module.css';

import logoWhite from '../../../assets/img/logo-white.png';

const HeaderMini = () => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} src={logoWhite} alt={'logo'}></img>
    </header>
  );
};

export default HeaderMini;
