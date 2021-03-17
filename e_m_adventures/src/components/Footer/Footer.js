import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.footerTopContent}>
          <Link to={'/ourplace'}>Our Place</Link>
          <Link to={'/home'}>Home</Link>
        </div>
        <div className={classes.footerTopContent}>
          <Link to={'/explore'}>Explore</Link>
          <Link to={'/home'}>Investors</Link>
        </div>
        <div className={classes.footerTopContent}>
          <Link to={'/eat'}>Local Eats</Link>
          <Link to={'/home'}>Careers</Link>
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
            <Link to={'https://github.com/rwalsh221'}>
              Consultio/Consultius
            </Link>{' '}
          </p>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <Link to={'https://github.com/rwalsh221'}>
            <ion-icon name="logo-github"></ion-icon>
          </Link>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <Link to={'https://en-gb.facebook.com/'}>
            <ion-icon name="logo-facebook"></ion-icon>
          </Link>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <Link to={'https://twitter.com/'}>
            <ion-icon name="logo-twitter"></ion-icon>
          </Link>
        </div>
        <div className={classes.footerBtmContentIcon}>
          <Link to={'https://www.instagram.com/'}>
            <ion-icon name="logo-instagram"></ion-icon>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
