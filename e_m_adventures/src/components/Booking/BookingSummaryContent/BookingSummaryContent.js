import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import caraBig from '../../../assets/img/bookingSummary/caraBig.jpg';
import caraMed from '../../../assets/img/bookingSummary/caraMed.jpg';
import caraSml from '../../../assets/img/bookingSummary/caraSml.jpg';

import classes from './BookingSummaryContent.module.css';

const BookingSummaryContent = (props) => {
  return (
    <main className={`contentGrid`}>
      <h1 className={classes.heading}>Booking Summary</h1>
      <h2 className={classes.headingSecondary}>Your Place:</h2>
      <div className={classes.placeGrid}>
        <div className={classes.placeHeading}>
          <h3>CarnForth Forest Lodge</h3>
          <LoremIpsum p={2} />
        </div>

        <img
          src={caraBig}
          className={`${classes.imgBig} ${classes.imgBig1}`}
          alt={'img'}
        ></img>
        <img
          src={caraMed}
          className={`${classes.imgMed} ${classes.imgMed1}`}
          alt={'img'}
        ></img>
        <img
          src={caraBig}
          className={`${classes.imgBig} ${classes.imgBig2}`}
          alt={'img'}
        ></img>
        {/* <img
          src={caraMed}
          className={`${classes.imgMed} ${classes.imgMed2}`}
          alt={'img'}
        ></img> */}
        {/* <img
          src={caraBig}
          className={`${classes.imgBig} ${classes.imgBig3}`}
          alt={'img'}
        ></img> */}
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
        <img src={caraSml} className={classes.imgSml} alt={'img'}></img>
      </div>
      <div className={classes.summaryCard}>
        <h4 className={classes.summaryHeading}>Your Dates</h4>
        <h5 className={classes.summarySubHeading}>CheckIn:</h5>
        <p>08/08/2021</p>
        <h5 className={classes.summarySubHeading}>CheckOut:</h5>
        <p>08/08/2021</p>
        <button className={classes.summaryBtn}>Confirm</button>
      </div>
    </main>
  );
};

export default BookingSummaryContent;
