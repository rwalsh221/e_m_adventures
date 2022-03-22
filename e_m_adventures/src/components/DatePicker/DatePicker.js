import React, { useState } from 'react';
import classes from './DatePicker.module.css';

const DatePicker = () => {
  const [datePickerState, setdatePickerState] = useState({
    displayMonthLeft: new Date().getMonth(),
    displayMonthRight: new Date().getMonth() + 1,
    displayYear: new Date().getFullYear(),
  });

  // TODO: LOOK AT VARIIABLE NAMES> THERE MESSED UP
  // TODO: Change month useState to datePickerState
  // TODO: MIGHT NEED LEFT RIGHT RENDER FUNCTIONS. BASE RIGHT SIDE ON LEFT SIDE AS LEFT SIDE SHOULD BE THE MAIN VS REIGHT SIDE SECONDARY

  // TODO: error in date picker. month increases past 11. so never get febuary. need to add year to state and reset month to 0 for january and render new date.
  // TODO: might need seperate function for each side of date picker because date is rendering the same on both sides

  // CHECKS IF YEAR IS LEAP YEAR
  const checkLeapYear = () =>
    new Date(datePickerState.displayYear, 1, 29).getDate() === 29;

  // ARRAY OF MONTHS
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

  // ARRAY OF DAYS
  const dayArray = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];

  // RETURNS THE NUMBER OF DAYS IN A MONTH AND CHECKS IF FEB IS LEAP YEAR
  const getNumDays = (month) => {
    let numDays;

    if (month === 1) {
      const leapYear = checkLeapYear();
      numDays = leapYear ? 29 : 28;
    } else if (month === 3 || month === 5 || month === 8 || month === 10) {
      numDays = 30;
    } else {
      numDays = 31;
    }

    return numDays;
  };

  // FINDS THE START DAY OF THE MONTH FOR CSS GRID AREA
  const getDayOffsetCSSGrid = (date) => {
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

  const renderDays = (
    date,
    dayOffset,
    numDays,
    displayYear = datePickerState.displayYear
  ) => {
    const renderDaysArr = [];

    for (let i = 1; i <= numDays; i += 1) {
      date.setDate(i);

      const dayDate = date.getDate(); // returns the day of the month
      const dayISOString = date.toISOString().slice(0, 10); // returns date as yyyy-mm-dd
      const dayGridPosition = dayDate + dayOffset;

      renderDaysArr.push({
        dayDate,
        dayISOString,
        dayGridPosition,
        displayYear,
      });
    }

    return renderDaysArr;
  };

  const getDaysLeft = (state) => {
    const numDays = getNumDays(state.displayMonthLeft);
    const date = new Date();
    date.setFullYear(state.displayYear, state.displayMonthLeft);
    const dayOffset = getDayOffsetCSSGrid(date);

    return renderDays(date, dayOffset, numDays);
  };

  const getDaysRight = (state) => {
    let year = state.displayYear;

    if (state.displayMonthRight === 0) {
      year = state.displayYear + 1;
    }

    const numDays = getNumDays(state.displayMonthRight);
    const date = new Date();
    date.setFullYear(year, state.displayMonthRight);
    const dayOffset = getDayOffsetCSSGrid(date);

    return renderDays(date, dayOffset, numDays);
  };

  const nextMonthHandler = () => {
    const currentSetMonthLeft = datePickerState.displayMonthLeft;
    const currentSetMonthRight = datePickerState.displayMonthRight;

    const datePickerStateCopy = { ...datePickerState };

    let { displayMonthLeft, displayMonthRight } = datePickerStateCopy;

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
      setdatePickerState({
        ...datePickerState,
        displayMonthLeft,
        displayMonthRight,
        left: 0,
        right: 1,
        displayYear: datePickerState.displayYear + 1,
      });
    } else {
      setdatePickerState({
        ...datePickerState,
        displayMonthLeft,
        displayMonthRight,
        left: currentSetMonthLeft + 1,
        right: currentSetMonthRight + 1,
      });
    }
  };

  const prevMonthHandler = () => {
    const d = new Date();

    if (d.getMonth() < datePickerState.displayMonthLeft) {
      const currentSetMonthLeft = datePickerState.displayMonthLeft;
      const currentSetMonthRight = datePickerState.displayMonthRight;

      setdatePickerState({
        left: currentSetMonthLeft - 1,
        right: currentSetMonthRight - 1,
      });
    }
  };

  const leftContent = getDaysLeft(datePickerState).map((element) => (
    <div
      style={{ gridArea: `d${element.dayGridPosition}` }}
      className={classes.dayCard}
      id={element.dayISOString}
    >
      <p>{element.dayDate}</p>
    </div>
  ));

  const rightContent = getDaysRight(datePickerState).map((element) => (
    <div
      style={{ gridArea: `d${element.dayGridPosition}` }}
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
              {monthsArray[datePickerState.displayMonthLeft]}{' '}
              {datePickerState.displayYear}
            </h3>
          </div>

          {dayNameContent}
          {leftContent}
        </div>
        <div className={classes.cardGrid}>
          <div className={classes.cardGridHeader}>
            <h3 className={classes.displayMonth}>
              {monthsArray[datePickerState.displayMonthRight]}{' '}
              {datePickerState.displayMonthRight === 0
                ? datePickerState.displayYear + 1
                : datePickerState.displayYear}
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
