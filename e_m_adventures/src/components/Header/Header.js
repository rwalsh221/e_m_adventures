import React from 'react';

import HeaderNavigation from './HeaderNavigation/HeaderNavigation';
import HeaderSearch from './HeaderSearch/HeaderSearch';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <HeaderNavigation />
      <HeaderSearch />
      <h1 className={classes.heading}>Made possible by e &amp; m</h1>
    </header>
  );
};

export default Header;
