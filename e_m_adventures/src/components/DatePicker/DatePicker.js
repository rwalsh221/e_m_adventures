import React, { useState } from 'react';
import classes from './DatePicker.module.css';

const DatePicker = () => {
  // const [month, setMonth] = useState({
  //   left: 1,
  //   right: 2,
  //   displayMonthLeft: 1,
  //   displayMonthRight: 2,
  //   displayYear: 2022,
  // });

  const [monthState, setMonthState] = useState({
    left: 1,
    right: 2,
    displayMonthLeft: 1,
    displayMonthRight: 2,
    displayYear: 2022,
  });

  // TODO: LOOK AT VARIIABLE NAMES> THERE MESSED UP
  // TODO: Change month useState to MonthState
  // TODO: MIGHT NEED LEFT RIGHT RENDER FUNCTIONS. BASE RIGHT SIDE ON LEFT SIDE AS LEFT SIDE SHOULD BE THE MAIN VS REIGHT SIDE SECONDARY

  // TODO: error in date picker. month increases past 11. so never get febuary. need to add year to state and reset month to 0 for january and render new date.
  // TODO: might need seperate function for each side of date picker because date is rendering the same on both sides

  const focusMonth = [];
  const nextMonth = [];

  const checkLeapYear = () =>
    new Date(monthState.displayYear, 1, 29).getDate() === 29;

  const monthsArray = [
    'january',
    'febuary',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
  ];

  const dayArray = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

  const getNumDays = (month) => {
    console.log(` THE MONTH IS ${month} ************************`);
    let numDays;
    // let leapYear = true;
    if (month === 1) {
      console.log('FEB ******************************************************');
      const d = new Date();
      const leapYear = checkLeapYear();

      numDays = leapYear ? 29 : 28;
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
      numDays = 30;
    } else {
      numDays = 31;
    }

    return numDays;
  };

  const getDayOffset = (date) => {
    let day;
    date.setDate(1);
    const getDay = date.getDay();
    if (getDay === 0) {
      day = 7;
    } else {
      day = getDay;
    }
    return day - 1; // minus 1 to get correct day js month starts at 1 not zero
  };

  // create seperate func for init setup. setstate for current mont and current month +1. then use getdays() for forward / back

  const getDays = (month = undefined, arr, monthObject) => {
    const numDays = getNumDays(month);
    const d = new Date();
    console.log(month);
    if (month !== undefined) {
      d.setFullYear(monthState.displayYear, month);
    }

    const dayOffset = getDayOffset(d);
    console.log(dayOffset);
    // month ? d.setMonth(month) : d.setMonth(d.getMonth());

    // d.setMinutes(0);
    // d.setHours(0);
    for (let i = 1; i <= numDays; i += 1) {
      // i = i + 32;

      d.setDate(i);
      // d.setMonth(month.displayMonthLeft);
      // d.setFullYear(monthState.displayYear, monthState.displayMonthLeft, i);
      // d.setFullYear(monthObject.displayYear, monthObject.left, i);
      console.log(monthState.displayYear);
      console.log(d);
      console.log(monthObject.displayYear);
      const dayDate = d.getDate(); // returns the day of the month
      const dayISOString = d.toISOString().slice(0, 10); // returns date as yyyy-mm-dd
      const displayDay = dayDate + dayOffset;

      arr.push({
        dayDate,
        dayISOString,
        displayDay,
      });
    }
  };

  const nextMonthHandler = () => {
    const currentSetMonthLeft = monthState.left;
    const currentSetMonthRight = monthState.right;

    const monthStateCopy = { ...monthState };

    let { displayMonthLeft, displayMonthRight } = monthStateCopy;

    // console.log(`display month ${displayMonth}`);

    if (displayMonthLeft >= 11) {
      displayMonthLeft = 0;
    } else {
      displayMonthLeft += 1;
    }

    if (displayMonthRight >= 11) {
      displayMonthRight = 0;
    } else {
      displayMonthRight += 1;
    }

    if (currentSetMonthLeft >= 11) {
      setMonthState({
        ...monthState,
        displayMonthLeft,
        displayMonthRight,
        left: 0,
        right: 1,
        displayYear: monthState.displayYear + 1,
      });
      console.log('set monthe greater than 11', monthState.displayYear);
    } else {
      setMonthState({
        ...monthState,
        displayMonthLeft,
        displayMonthRight,
        left: currentSetMonthLeft + 1,
        right: currentSetMonthRight + 1,
      });
    }
  };

  const prevMonthHandler = () => {
    const d = new Date();

    if (d.getMonth() < monthState.left) {
      const currentSetMonthLeft = monthState.left;
      const currentSetMonthRight = monthState.right;

      setMonthState({
        left: currentSetMonthLeft - 1,
        right: currentSetMonthRight - 1,
      });
    }

    // const currentSetMonthLeft = month.left;
    // const currentSetMonthRight = month.right;

    // setMonth({
    //   left: currentSetMonthLeft - 1,
    //   right: currentSetMonthRight - 1,
    // });
  };

  getDays(monthState.left, focusMonth, monthState);
  getDays(monthState.right, nextMonth, monthState);

  const leftContent = focusMonth.map((element) => (
    <div
      style={{ gridArea: `d${element.displayDay}` }}
      className={classes.dayCard}
      id={element.dayISOString}
    >
      <p>{element.dayDate}</p>
    </div>
  ));

  const rightContent = nextMonth.map((element) => (
    <div
      style={{ gridArea: `d${element.displayDay}` }}
      className={classes.dayCard}
      id={element.dayISOString}
    >
      <p>{element.dayDate}</p>
    </div>
  ));

  const dayNameContent = dayArray.map((element) => (
    <h6 className={classes.dayName} style={{ gridArea: element }}>
      {element}
    </h6>
  ));
  return (
    <div className={classes.testContainer}>
      <div className={classes.datePicker}>
        <div className={classes.cardGrid}>
          <div className={classes.cardGridHeader}>
            <button
              type="button"
              onClick={prevMonthHandler}
              className={classes.changeMonthBtn}
            >
              <ion-icon name="caret-back-outline" />
            </button>
            <h3 className={classes.displayMonth}>
              {monthsArray[monthState.displayMonthLeft]}{' '}
              {monthState.displayYear}
            </h3>
          </div>

          {dayNameContent}
          {leftContent}
        </div>
        <div className={classes.cardGrid}>
          <div className={classes.cardGridHeader}>
            <h3 className={classes.displayMonth}>
              {monthsArray[monthState.displayMonthRight]}{' '}
              {monthState.displayYear}
            </h3>
            <button
              type="button"
              className={classes.changeMonthBtn}
              onClick={nextMonthHandler}
            >
              <ion-icon name="caret-forward-outline" />
            </button>
          </div>
          {dayNameContent}
          {rightContent}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
