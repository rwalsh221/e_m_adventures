import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './NavigationBtn.module.css';

const NavigationBtn = ({ btnContentProps, routeProps }) => (
  <Link className={classes.navBtn} role="button" to={routeProps}>
    {btnContentProps}
  </Link>
);

NavigationBtn.propTypes = {
  btnContentProps: PropTypes.string.isRequired,
  routeProps: PropTypes.string.isRequired,
};

export default NavigationBtn;
