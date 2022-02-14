import { element } from 'prop-types';
import React from 'react';
import classes from './DatePicker.module.css';

const DatePicker = () => {
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

  const getDays = (month) => {
    const currentDay = todayDate.getDate();
    const numDays = getNumDays(month);
    const d = new Date();

    d.setMonth(month);
    console.log(d.getTimezoneOffset());
    // d.setMinutes(0);
    // d.setHours(0);
    for (let i = 1; i <= numDays; i += 1) {
      i = i + 36000;
      console.log(d.setDate(i));
      focusMonth.push(d.setDate(i));
    }
  };

  console.log(getNumDays(todayDate.getMonth()));
  getDays(6);
  console.log(focusMonth);

  const content = focusMonth.map((element) => (
    <div className={classes.dayCard}>
      <p>{element}</p>
    </div>
  ));

  return (
    <section>
      <div className={classes.cardContainer}>{content}</div>
    </section>
  );
};

export default DatePicker;
