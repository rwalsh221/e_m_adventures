import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoremIpsum } from 'react-lorem-ipsum';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { dateToMilliseconds } from '../../../helpers/utilities';

import caraBig from '../../../assets/img/bookingSummary/caraBig.jpg';
import caraMed from '../../../assets/img/bookingSummary/caraMed.jpg';
import caraSml from '../../../assets/img/bookingSummary/caraSml.jpg';

import classes from './BookingSummaryContent.module.css';

const BookingSummaryContent = (props) => {
  const state = useSelector((state) => state);
  const history = useHistory();

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const [loading, SetLoading] = useState(true);

  // add function to take props.checkin.
  // get all bookings from db.
  // add to array and search for checkin.
  // if -1 content = content. usstaete loading falese

  const date = state.headerSearch.checkIn;

  const dateAvaliable = async () => {
    try {
      // NEEDS LONG LAT FOR SEARCH. GET FROM CURRENTWEATHER.
      const bookedDays = await fetch(`${database}.fullday.json`);

      let bookedDaysData = await bookedDays.json();
      console.log(bookedDaysData);
    } catch (error) {
      console.error(error);
    }
  };

  dateAvaliable();

  const submitHandler = async () => {
    const data = { ...state.headerSearch };

    // const ref = `ref${nanoid()}`;
    const ref = `ref${nanoid()}`;
    axios
      .patch(
        `${database}booking.json`,
        {
          [ref]: {
            ...data,
          },
        },
        { timeout: 2000 }
      )
      .then((response) => {
        console.log(response);
        if (response.status === 200) history.push('/confirmation');
      })
      .catch((error) => {
        console.error(error);
        console.log('errrrorororororororor');
      });
  };

  let content = 'spinner';

  if (loading === false) {
    content = 'be,ow content';
  }

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
        <p>{state.headerSearch.checkIn}</p>
        <h5 className={classes.summarySubHeading}>CheckOut:</h5>
        <p>{state.headerSearch.checkOut}</p>
        <button className={classes.summaryBtn} onClick={submitHandler}>
          Confirm
        </button>
      </div>
    </main>
  );
};

export default BookingSummaryContent;
