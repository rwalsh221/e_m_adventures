import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { LoremIpsum } from 'react-lorem-ipsum';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { dateToMilliseconds } from '../../../helpers/utilities';

import BookingUnavailable from './BookingUnavailable/BookingUnavailable';
import BookingAvailable from './BookingAvailable/BookingAvailable';
import caraBig from '../../../assets/img/bookingSummary/caraBig.jpg';
import caraMed from '../../../assets/img/bookingSummary/caraMed.jpg';
import caraSml from '../../../assets/img/bookingSummary/caraSml.jpg';

import classes from './BookingSummaryContent.module.css';

const BookingSummaryContent = (props) => {
  const state = useSelector((state) => state);
  const history = useHistory();

  const database =
    'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const [loading, setLoading] = useState(true);
  const [bookedDays, setBookedDays] = useState([]);
  const [content, setContent] = useState('hellow there');

  // let content = 'hello there';

  // add function to take props.checkin.
  // get all bookings from db.
  // add to array and search for checkin.
  // if -1 content = content. usstaete loading falese

  useEffect(() => {
    const dateAvaliable = async () => {
      try {
        const bookedDays = await fetch(`${database}fulldays.json`);

        let bookedDaysData = await bookedDays.json();
        console.log(bookedDaysData);
        setBookedDays([...bookedDaysData]);
      } catch (error) {
        console.error(error);
      }
    };

    dateAvaliable();
  }, []);

  // useCallback(()=>{})
  const submitHandler = useCallback(async () => {
    const data = { ...state.headerSearch };
    let newBookedDays;
    const ref = `ref${nanoid()}`;
    bookedDays ? (newBookedDays = [...bookedDays]) : (newBookedDays = []);
    newBookedDays.push(data.checkIn, data.checkOut, ...data.fullDays);

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
      // .patch(`${database}fulldays.json`, {
      //   ...newBookedDays,
      // })
      // .then((response) => {
      //   if (response.status === 200) history.push('/confirmation');
      // })
      .catch((error) => {
        console.error(error);
      });

    axios
      .patch(`${database}fulldays.json`, {
        ...newBookedDays,
      })
      .then((response) => {
        if (response.status === 200) history.push('/confirmation');
      })
      .catch((error) => {
        console.error(error);
      });
  }, [bookedDays, history, state.headerSearch]);

  // const submitHandler = async () => {};

  const main = (
    <React.Fragment>
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
    </React.Fragment>
  );

  useEffect(() => {
    if (
      bookedDays === null ||
      bookedDays.includes(state.headerSearch.checkIn)
    ) {
      setLoading(false);
      setContent(<BookingUnavailable />);
      console.log('date unavaliable');
    } else {
      setContent(<BookingAvailable submitHandler={submitHandler} />);
      setLoading(false);
    }
  }, [bookedDays, state.headerSearch.checkIn, submitHandler]);

  // const dateAvaliable = async () => {
  //   try {
  //     const bookedDays = await fetch(`${database}fulldays.json`);

  //     let bookedDaysData = await bookedDays.json();
  //     console.log(bookedDaysData);
  //     if (bookedDaysData === null || bookedDaysData.includes(checkInDate)) {
  //       content = 'date unavalible please try agin :)';
  //       setLoading(false);
  //       console.log('THE DATE IS UNAVALIABLE');
  //     }
  //     bookedDaysData
  //       ? (newBookedDays = [...bookedDaysData])
  //       : (newBookedDays = []);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // dateAvaliable();

  // let content = 'spinner';

  // if (loading === false) {
  //   content = 'be,ow content';
  // }

  return loading ? <p>IS LOADING</p> : content;
};

export default BookingSummaryContent;
