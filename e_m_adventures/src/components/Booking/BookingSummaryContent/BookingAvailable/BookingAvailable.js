import React from 'react';
import PropTypes from 'prop-types';

import { LoremIpsum } from 'react-lorem-ipsum';
import { useSelector } from 'react-redux';

import { formatDate } from '../../../../helpers/utilities';
import classes from './BookingAvailable.module.css';
import caraBig from '../../../../assets/img/bookingSummary/caraBig.jpg';
import caraMed from '../../../../assets/img/bookingSummary/caraMed.jpg';
import caraSml from '../../../../assets/img/bookingSummary/caraSml.jpg';

const BookingAvailable = ({ submitHandlerProps }) => {
  const reduxState = useSelector((state) => state);

  return (
    <main className="contentGrid">
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
          alt="img"
        />
        <img
          src={caraMed}
          className={`${classes.imgMed} ${classes.imgMed1}`}
          alt="img"
        />
        <img
          src={caraBig}
          className={`${classes.imgBig} ${classes.imgBig2}`}
          alt="img"
        />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
        <img src={caraSml} className={classes.imgSml} alt="img" />
      </div>
      <div className={classes.summaryCard}>
        <h4 className={classes.summaryHeading}>Your Dates</h4>
        <h5 className={classes.summarySubHeading}>CheckIn:</h5>
        <p>{formatDate(reduxState.headerSearch.checkIn)}</p>
        <h5 className={classes.summarySubHeading}>CheckOut:</h5>
        <p>{formatDate(reduxState.headerSearch.checkOut)}</p>
        <button
          type="button"
          className={classes.summaryBtn}
          onClick={submitHandlerProps}
        >
          Confirm
        </button>
      </div>
    </main>
  );
};

BookingAvailable.propTypes = { submitHandlerProps: PropTypes.func.isRequired };

export default BookingAvailable;
