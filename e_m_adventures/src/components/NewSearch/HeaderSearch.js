import React, { useState } from 'react';
import classes from './HeaderSearch.module.css';

import DatePicker from './DatePicker/DatePicker';
import HeaderSearchAccommodation from './HeaderSearchAccommodation/HeaderSearchAccommodation';

const HeaderSearch = () => {
  const [showMenu, setShowMenu] = useState({
    datePicker: false,
    accommodation: false,
    guests: false,
  });

  const [selectedDate, setSelectedDate] = useState({
    checkInCheckOut: 'checkIn',
    checkIn: null,
    checkOut: null,
    fullDays: [],
  });

  const [selectedAccommodation, setSelectedAccommodation] = useState({});

  const showMenuHandler = (menu) => {
    const showMenuCopy = { ...showMenu };

    Object.keys(showMenuCopy).forEach((element) => {
      if (element === menu) {
        showMenuCopy[element] = true;
      } else {
        showMenuCopy[element] = false;
      }
    });

    setShowMenu({ ...showMenuCopy });
  };

  const setCheckInCheckoutHandler = (input) => {
    if (showMenu.datePicker) {
      setSelectedDate({ ...selectedDate, checkInCheckOut: input });
    }
  };

  return (
    <div className={classes.headerSearchContainer}>
      <div className={classes.headerSearch}>
        <button
          className={`${classes.startBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('accommodation');
          }}
        >
          <h6>Start Your Adventure</h6>
          where are you going?
        </button>
        <button
          className={`${classes.checkInBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('datePicker');
            setCheckInCheckoutHandler('checkIn');
          }}
        >
          Check-in
        </button>
        <button
          className={`${classes.checkOutBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('datePicker');
            setCheckInCheckoutHandler('checkOut');
          }}
        >
          Check-out
        </button>
        <button
          className={`${classes.guestBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('guests');
          }}
        >
          Guests
        </button>

        <button
          type="button"
          className={`${classes.submitBtn} ${classes.searchBtn}`}
          onClick={() => {}}
        >
          SUBMIT
        </button>
      </div>
      <div className={classes.menuContainer}>
        {showMenu.datePicker && (
          <DatePicker
            selectedDateProps={selectedDate}
            setSelectedDateProps={setSelectedDate}
          />
        )}
        {showMenu.accommodation && <HeaderSearchAccommodation />}
      </div>
    </div>
  );
};

export default HeaderSearch;
