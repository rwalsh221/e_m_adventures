import React from 'react';

import classes from './Footer.module.css';

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.footerTopContent}>
          <a href={'/ourplace'}>Our Place</a>
          <a href={'/home'}>Home</a>
        </div>
        <div className={classes.footerTopContent}>
          <a href={'/explore'}>Explore</a>
          <a href={'/home'}>Investors</a>
        </div>
        <div className={classes.footerTopContent}>
          <a href={'/eat'}>Local Eats</a>
          <a href={'/home'}>Careers</a>
        </div>
        <div className={classes.footerTopContent}>
          <a href={'/login'}>Login</a>
          <a href={'/covid'}>Covid 19 Information</a>
        </div>
      </div>
      <div className={classes.footerBtm}>
        <div className={classes.footerBtmContent}>
          <p>&copy; 2021 e &amp; m Adventures. All rights reserved</p>
          <p>
            Website built and designed by{' '}
            <a href={'https://github.com/rwalsh221'}>Consultio/Consultius</a>{' '}
            Design Ltd
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
