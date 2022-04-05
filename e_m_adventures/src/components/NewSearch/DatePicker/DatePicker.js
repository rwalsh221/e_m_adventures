import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './DatePicker.module.css';

import { dateToMilliseconds, getFullDays } from '../../../helpers/utilities';
import { validateDisplayDate } from '../../../helpers/validation';

const DatePicker = ({ selectedDateProps, setSelectedDateProps }) => {
  const [datePickerState, setdatePickerState] = useState({
    displayMonthLeft: new Date().getMonth(),
    displayMonthRight: new Date().getMonth() + 1,
    displayYear: new Date().getFullYear(),
  });

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

  // CHECKS IF YEAR IS LEAP YEAR
  const checkLeapYear = () =>
    new Date(datePickerState.displayYear, 1, 29).getDate() === 29;

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
    date.setDate(1); // set date parameter to first day of month
    const getDay = date.getDay(); // returns 0 - 6. 0 is sunday so 0 needs to be changed to 7;
    if (getDay === 0) {
      day = 7;
    } else {
      day = getDay;
    }
    return day - 1; // minus 1 to get correct offset to add to date. i.e monday is 1. 1 - 1 = 0. + first day of month = postion 1
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
      const dayInMilliseconds = dateToMilliseconds(dayISOString);
      const dayGridPosition = dayDate + dayOffset;

      renderDaysArr.push({
        dayDate,
        dayISOString,
        dayGridPosition,
        displayYear,
        dayInMilliseconds,
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
    let { displayMonthLeft, displayMonthRight, displayYear } = datePickerState;

    if (displayMonthLeft >= 11) {
      displayMonthLeft = 0;
      displayYear += 1;
    } else {
      displayMonthLeft += 1;
    }

    if (displayMonthRight >= 11) {
      displayMonthRight = 0;
    } else {
      displayMonthRight += 1;
    }

    setdatePickerState({
      ...datePickerState,
      displayMonthLeft,
      displayMonthRight,
      displayYear,
    });
  };

  const prevMonthHandler = () => {
    let { displayMonthLeft, displayMonthRight, displayYear } = datePickerState;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    // STOPS THE DATE PICKER GOING INTO THE PAST
    if (currentMonth === displayMonthLeft && currentYear === displayYear) {
      return;
    }

    if (displayMonthLeft <= 0) {
      displayMonthLeft = 11;
      displayYear -= 1;
    } else {
      displayMonthLeft -= 1;
    }

    if (displayMonthRight <= 0) {
      displayMonthRight = 11;
    } else {
      displayMonthRight -= 1;
    }

    setdatePickerState({
      ...datePickerState,
      displayMonthLeft,
      displayMonthRight,
      displayYear,
    });
  };

  const selectDateHandler = (event) => {
    if (event.target.tagName === 'DIV') {
      const selectedDateCopy = { ...selectedDateProps };

      selectedDateCopy[selectedDateProps.checkInCheckOut] = event.target.id;

      if (selectedDateProps.checkInCheckOut === 'checkIn') {
        selectedDateCopy.checkInCheckOut = 'checkOut';
        setSelectedDateProps({ ...selectedDateCopy });
      } else {
        selectedDateCopy.fullDays = getFullDays(
          dateToMilliseconds(selectedDateCopy.checkIn),
          dateToMilliseconds(selectedDateCopy.checkOut)
        );

        setSelectedDateProps({ ...selectedDateCopy });
      }
    }
  };

  const styleSelectedDateHandler = (dayISOString, dayMillisecond) => {
    if (selectedDateProps.checkIn === null) {
      return classes.dayCard;
    }

    if (
      selectedDateProps.checkIn === dayISOString ||
      selectedDateProps.checkOut === dayISOString
    ) {
      // const test = classes.checkIn
      return `${classes.dayCard} ${classes.checkInCheckOut}`;
    }
    if (selectedDateProps.fullDays.indexOf(dayMillisecond) !== -1) {
      return `${classes.dayCard} ${classes.fullDay}`;
    }

    return classes.dayCard;
  };

  // RENDERS CONTENT FOR LEFT SIDE OF DATEPICER
  const leftContent = getDaysLeft(datePickerState).map((element) => (
    <div
      key={element.dayInMilliseconds}
      style={{ gridArea: `d${element.dayGridPosition}` }}
      className={styleSelectedDateHandler(
        element.dayISOString,
        element.dayInMilliseconds
      )}
      id={element.dayISOString}
      data-day-milliseconds={element.dayInMilliseconds}
      onClick={(e) => selectDateHandler(e)}
      disabled={validateDisplayDate(
        element.dayISOString,
        selectedDateProps.checkIn
      )}
      aria-hidden
    >
      <p>{element.dayDate}</p>
    </div>
  ));

  // const test = classes.checkIn;

  // RENDERS CONTENT FOR RIGHT SIDE OF DATEPICKER
  const rightContent = getDaysRight(datePickerState).map((element) => (
    <div
      key={element.dayInMilliseconds}
      style={{ gridArea: `d${element.dayGridPosition}` }}
      className={styleSelectedDateHandler(
        element.dayISOString,
        element.dayInMilliseconds
      )}
      id={element.dayISOString}
      onClick={(e) => selectDateHandler(e)}
      disabled={validateDisplayDate(
        element.dayISOString,
        selectedDateProps.checkIn
      )}
      aria-hidden
      // {styleSelectedDateHandler()}
    >
      <p>{element.dayDate}</p>
    </div>
  ));

  // RENDERS DAY NAMES AT TOP OF DATE PIKER
  const dayNameContent = dayArray.map((element) => (
    <h6 key={element} className={classes.dayName} style={{ gridArea: element }}>
      {element}
    </h6>
  ));
  return (
    <div className={classes.datePickerContainer}>
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

DatePicker.propTypes = {
  selectedDateProps: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedDateProps: PropTypes.func.isRequired,
};
