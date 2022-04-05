import React, { useState, useRef } from 'react';

import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import DatePicker from './DatePicker/DatePicker';
import HeaderSearchAccommodation from './HeaderSearchAccommodation/HeaderSearchAccommodation';
import HeaderSearchGuests from './HeaderSearchGuests/HeaderSearchGuests';

import { validateDate } from '../../helpers/validation';
import { dateToMilliseconds } from '../../helpers/utilities';
// import ErrorComponent from '../../miniComponents/ErrorComponent/ErrorComponent';

import holdCurrentBooking from '../../helpers/booking/holdCurrentBooking';
import errorTimeout from '../../helpers/error/errorTimeout';
import classes from './HeaderSearch.module.css';
import * as actionTypes from '../Header/HeaderSearch/HeaderSearchSlice';

const mapDispatch = { ...actionTypes };

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

  console.log(selectedDate);
  // TODO: REFACTOR CANCEL AND MODIFY WITH BOOKING HELPERS

  const dispatch = useDispatch();

  const [error, setError] = useState();

  const checkIn = useRef();
  const checkOut = useRef();
  const history = useHistory();

  // let formIsValid = false;

  const submitSearchHandler = async () => {
    const formIsValid = true;
    // formIsValid = validateDate(checkIn.current.value, checkOut.current.value);
    if (formIsValid) {
      const ref = `ref${nanoid()}`;
      const checkInMilliseconds = dateToMilliseconds(selectedDate.checkIn);
      const checkOutMilliseconds = dateToMilliseconds(selectedDate.checkOut);
      if (
        await holdCurrentBooking(
          checkInMilliseconds,
          checkOutMilliseconds,
          setError,
          ref
        )
      ) {
        dispatch(
          actionTypes.booking({
            checkIn: checkInMilliseconds,
            checkOut: checkOutMilliseconds,
            holdRef: ref,
          })
        );
        history.push('/summary', {
          pathname: 'summary',
          state: { holdStatus: false },
        });
      } else {
        history.push({
          pathname: 'summary',
          state: { holdStatus: true },
        });
      }
    } else {
      errorTimeout(setError, 'Please check your dates and try again');
    }
  };

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
    <span className={classes.startBtn__heading}>
      {selectedAccommodation.accommodationName}
    </span>
  ) : (
    <>
      <span className={classes.startBtn__heading}>Start Your Adventure</span>
      <br />
      where are you going?
    </>
  );

  const formIsValid = () => {
    let validForm = false;

    if (selectedDate.checkOut === null || selectedDate.checkIn === null) {
      validForm = true;
      return validForm;
    }

    if (!validateDate(selectedDate.checkIn, selectedDate.checkOut)) {
      validForm = true;
    }

    return validForm;
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
          {selectedDate.checkIn ? selectedDate.checkIn : 'Check-in'}
        </button>
        <button
          className={`${classes.checkOutBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('datePicker');
            setCheckInCheckoutHandler('checkOut');
          }}
        >
          {selectedDate.checkOut ? selectedDate.checkOut : 'Check-out'}
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
          onClick={async () => {
            submitSearchHandler();
          }}
          disabled={formIsValid()}
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

export default connect(null, mapDispatch)(HeaderSearch);
