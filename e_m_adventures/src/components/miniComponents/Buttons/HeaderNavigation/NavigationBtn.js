import React from 'react';

import { Link } from 'react-router-dom';
import classes from './NavigationBtn.module.css';

const NavigationBtn = ({ btnContentProps, routeProps }) => (
  <Link className={classes.navBtn} role="button" to={routeProps}>
    {btnContentProps}
  </Link>
);

export default NavigationBtn;
