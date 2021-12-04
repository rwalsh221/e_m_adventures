import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { LoremIpsum } from 'react-lorem-ipsum';
import { useSelector } from 'react-redux';

import { formatDate } from '../../../../helpers/utilities';
import classes from './BookingAvailable.module.css';
import caraBig from '../../../../assets/img/bookingSummary/caraBig.jpg';
import caraMed from '../../../../assets/img/bookingSummary/caraMed.jpg';
import caraSml from '../../../../assets/img/bookingSummary/caraSml.jpg';

const BookingAvailable = ({ submitHandlerProps }) => {
  // TODO: CHECK DELETE HOLD IN CHROME CONSOLE
  const reduxState = useSelector((state) => state);

  const history = useHistory();

  // USER HAS 5 MINUTES TO CONFIRM BOOKING
  setTimeout(async () => {
    history.replace('/timeout');
  }, 300000); // TIMEOUT IN 5 MINUTES

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
        <p>{formatDate(reduxState.headerSearch.checkIn / 1000)}</p>
        <h5 className={classes.summarySubHeading}>CheckOut:</h5>
        <p>{formatDate(reduxState.headerSearch.checkOut / 1000)}</p>
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
