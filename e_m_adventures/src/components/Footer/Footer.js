import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = ({ children }) => (
  <footer className={classes.footer}>
    {children}
    <div className={classes.footerTop}>
      <div className={classes.footerTopContent}>
        <Link to="/ourplace">Our Place</Link>
        <Link to="/">Home</Link>
      </div>
      <div className={classes.footerTopContent}>
        <Link to="/explore">Explore</Link>
        <Link to="/">Investors</Link>
      </div>
      <div className={classes.footerTopContent}>
        <Link to="/food">Local Eats</Link>
        <Link to="/">Careers</Link>
      </div>
      <div className={classes.footerTopContent}>
        <Link to="/login">Login</Link>
        <Link to="/covid">Covid 19 </Link>
      </div>
    </div>
    <div className={classes.footerBtm}>
      <div className={classes.footerBtmContent}>
        <p>&copy; 2021 e &amp; m Adventures. All rights reserved</p>
        <p>
          Website built and designed by{' '}
          <a href="https://github.com/rwalsh221">Consultio/Consultius</a>
        </p>
      </div>
      <div className={classes.footerBtmContentIcon}>
        <a href="https://github.com/rwalsh221">
          <ion-icon name="logo-github" />
        </a>
      </div>
      <div className={classes.footerBtmContentIcon}>
        <a href="https://en-gb.facebook.com/">
          <ion-icon name="logo-facebook" />
        </a>
      </div>
      <div className={classes.footerBtmContentIcon}>
        <a href="https://twitter.com/">
          <ion-icon name="logo-twitter" />
        </a>
      </div>
      <div className={classes.footerBtmContentIcon}>
        <a href="https://www.instagram.com/">
          <ion-icon name="logo-instagram" />
        </a>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
