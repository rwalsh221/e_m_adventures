import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.footerTopContent}>
          <Link to={'/ourplace'}>Our Place</Link>
          <Link to={'/'}>Home</Link>
        </div>
        <div className={classes.footerTopContent}>
          <Link to={'/explore'}>Explore</Link>
          <Link to={'/'}>Investors</Link>
        </div>
        <div className={classes.footerTopContent}>
          <Link to={'/food'}>Local Eats</Link>
          <Link to={'/'}>Careers</Link>
        </div>
        <div className={classes.footerTopContent}>
          <Link to={'/login'}>Login</Link>
          <Link to={'/covid'}>Covid 19 Information</Link>
        </div>
      </div>
      <div className={classes.footerBtm}>
        <div className={classes.footerBtmContent}>
          <p>&copy; 2021 e &amp; m Adventures. All rights reserved</p>
          <p>
            Website built and designed by{' '}
            <a href={'https://github.com/rwalsh221'}>Consultio/Consultius</a>
          </p>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <a href={'https://github.com/rwalsh221'}>
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <a href={'https://en-gb.facebook.com/'}>
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <a href={'https://twitter.com/'}>
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <a href={'https://www.instagram.com/'}>
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
