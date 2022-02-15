import { current } from '@reduxjs/toolkit';
import { element } from 'prop-types';
import React, { useState } from 'react';
import classes from './DatePicker.module.css';

const DatePicker = () => {
  const [month, setMonth] = useState({ left: 1, right: 2 });

  const todayDate = new Date();

  const focusMonth = [];
  const nextMonth = [];

  const checkLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;

  const getNumDays = (month) => {
    let numDays;
    // let leapYear = true;
    if (month === 1) {
      const d = new Date();
      const leapYear = checkLeapYear(d.getFullYear());

      numDays = leapYear ? 29 : 28;
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
      numDays = 30;
    } else {
      numDays = 31;
    }

    return numDays;
  };

  // create seperate func for init setup. setstate for current mont and current month +1. then use getdays() for forward / back

  const getDays = (month = null, arr) => {
    const currentDay = todayDate.getDate();
    const numDays = getNumDays(month);
    const d = new Date();

    if (month) {
      d.setMonth(month);
    }

    // month ? d.setMonth(month) : d.setMonth(d.getMonth());

    const x = new Date('July 21, 1983 01:15:00');

    // d.setMinutes(0);
    // d.setHours(0);
    for (let i = 1; i <= numDays; i += 1) {
      // i = i + 32;

      d.setDate(i);

      arr.push(d.toDateString());
    }
  };

  const nextMonthHandler = () => {
    const currentSetMonthLeft = month.left;
    const currentSetMonthRight = month.right;

    setMonth({
      left: currentSetMonthLeft + 1,
      right: currentSetMonthRight + 1,
    });
  };

  const prevMonthHandler = () => {
    const currentSetMonthLeft = month.left;
    const currentSetMonthRight = month.right;

    setMonth({
      left: currentSetMonthLeft - 1,
      right: currentSetMonthRight - 1,
    });
  };

  getDays(month.left, focusMonth);
  getDays(month.right, nextMonth);

  const leftContent = focusMonth.map((element) => (
    <div className={classes.dayCard}>
      <p>{element}</p>
    </div>
  ));

  const rightContent = nextMonth.map((element) => (
    <div className={classes.dayCard}>
      <p>{element}</p>
    </div>
  ));
  return (
    <section className={classes.datePicker}>
      <div className={classes.leftCardContainer}>{leftContent}</div>
      <div className={classes.rightCardContainer}>{rightContent}</div>
      <button onClick={nextMonthHandler}>forward</button>
      <button onClick={prevMonthHandler}>back</button>
    </section>
  );
};

export default DatePicker;
