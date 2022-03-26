import React, { useState, useRef } from 'react';
import classes from './HeaderSearch.module.css';

import DatePicker from './DatePicker/DatePicker';
import HeaderSearchAccommodation from './HeaderSearchAccommodation/HeaderSearchAccommodation';
import HeaderSearchGuests from './HeaderSearchGuests/HeaderSearchGuests';

const HeaderSearch = () => {
  // TODO: PROP VALIDATION
  // TODO: CHECK KEYS ON CHILDREN
  // TODO: CONNECT TO BOOKING SYSTEM

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

  const [selectedAccommodation, setSelectedAccommodation] = useState({
    accommodationId: null,
    accommodationName: null,
  });

  const [selectedGuests, setSelectedGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const checkInBtnRef = useRef();

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

  const startBtnContent = selectedAccommodation.accommodationName ? (
    selectedAccommodation.accommodationName
  ) : (
    <>
      <span className={classes.startBtn__heading}>Start Your Adventure</span>
      <br />
      where are you going?
    </>
  );

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
          {startBtnContent}
        </button>
        <button
          className={`${classes.checkInBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('datePicker');
            setCheckInCheckoutHandler('checkIn');
          }}
          ref={checkInBtnRef}
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
          onClick={() => {
            showMenuHandler('guests');
          }}
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
        {showMenu.accommodation && (
          <HeaderSearchAccommodation
            selectedAccommodationProps={selectedAccommodation}
            setSelectedAccommodationProps={setSelectedAccommodation}
            showMenuHandlerProps={showMenuHandler}
            checkInBtnRefProps={checkInBtnRef}
          />
        )}
        {showMenu.guests && (
          <HeaderSearchGuests
            selectedGuestsProps={selectedGuests}
            setSelectedGuestsProps={setSelectedGuests}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderSearch;
