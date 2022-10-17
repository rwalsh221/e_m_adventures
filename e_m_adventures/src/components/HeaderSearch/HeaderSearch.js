import React, { useState, useRef } from 'react';

import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import DatePicker from './DatePicker/DatePicker';
import HeaderSearchAccommodation from './HeaderSearchAccommodation/HeaderSearchAccommodation';
import HeaderSearchGuests from './HeaderSearchGuests/HeaderSearchGuests';

import { validateDate } from '../../helpers/validation';
import { dateToMilliseconds } from '../../helpers/utilities';
import { HeaderSearchBtnDelete } from '../miniComponents/Buttons/HeaderSearchBtn/HeaderSearchBtn';
// import ErrorComponent from '../../miniComponents/ErrorComponent/ErrorComponent';

import holdCurrentBooking from '../../helpers/booking/holdCurrentBooking';
import errorTimeout from '../../helpers/error/errorTimeout';
import classes from './HeaderSearch.module.css';
import * as actionTypes from './HeaderSearchSlice';

const mapDispatch = { ...actionTypes };

const HeaderSearch = () => {
  // TODO: LOOK AT SHOW MENU STATE. MAYBE DONT NEED OBJECT
  // TODO: ADD datePicker to modify booking -- create custom hook for modal state -- change accominof modal to generix to be reused.
  // TODO: ADD NEW SEARCH TO BOOKING UNAVALIBALE
  // TODO: ADD ACOMM ID TO BOOKING SYSTEM
  // TODO: LOOK AT / 1000 in FORMATDATE HELPER IN CHANGEBOOKING
  // TODO: ADD ERROR ON BOOKING UNAVALIBLE IN CHANGEBOOKING
  // TODO: ERROR IF YOU CLICK CHECKOUT DAY FIRST ADD IF CHECK
  // TODO: ADD WINDOW CLICK LISTNER TO CLOSE HEADER

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

  const [error, setError] = useState();

  // SAVE INITIAL STATE WHEN COMPONENT MOUNTED - USED TO RESET STATE TO INIT WHEN CANCEL BTN USED
  const initSelectedDate = useRef(selectedDate);
  const initSelectedAccommodation = useRef(selectedAccommodation);
  const initSelectedGuests = useRef(selectedGuests);

  // TODO: REFACTOR CANCEL AND MODIFY WITH BOOKING HELPERS

  const dispatch = useDispatch();

  // const [error, setError] = useState();

  const history = useHistory();

  // let formIsValid = false;

  const submitSearchHandler = async () => {
    // FORM WILL BE VALID AS SEARCH BTN WILL BE DISABLED UNTIL CHECKIN AND CHECKOUT DAYS ARE SET
    const formIsValid = true;
    // formIsValid = validateDate(checkIn.current.value, checkOut.current.value);
    if (formIsValid) {
      const ref = `ref${nanoid()}`;
      const checkInMilliseconds = dateToMilliseconds(selectedDate.checkIn);
      const checkOutMilliseconds = dateToMilliseconds(selectedDate.checkOut);
      console.log(checkInMilliseconds, checkOutMilliseconds);
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
      // errorTimeout('Please check your dates and try again');
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
    // INPUT EITHER CHECKIN OR CHECKOUT TO SET RESPECTIVE DATES FROM DATE PICKER COMPONENT
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
      {/* <br />
      <span>where are you going?</span> */}
    </>
  );

  const formIsValid = () => {
    let inValidForm = false;

    if (selectedDate.checkOut === null || selectedDate.checkIn === null) {
      inValidForm = true;
      return inValidForm;
    }

    if (!validateDate(selectedDate.checkIn, selectedDate.checkOut)) {
      inValidForm = true;
    }

    return inValidForm;
  };

  const deleteSearchHandler = (initObject, state, key) => {
    state({ ...initObject.current });
    showMenuHandler(key);
  };

  return (
    <div className={classes.headerSearchContainer}>
      <div className={classes.headerSearch}>
        <div
          className={`${classes.startBtn} ${classes.searchBtn}`}
          // role="button"
          onClick={() => {
            showMenuHandler('accommodation');
          }}
          aria-hidden
        >
          <div>{startBtnContent}</div>
          {selectedAccommodation.accommodationId && (
            <HeaderSearchBtnDelete
              onClickProps={() =>
                deleteSearchHandler(
                  initSelectedAccommodation,
                  setSelectedAccommodation,
                  'accommodation'
                )
              }
            />
          )}
        </div>
        <div
          role="button"
          aria-hidden
          className={`${classes.checkInBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('datePicker');
            setCheckInCheckoutHandler('checkIn');
          }}
          ref={checkInBtnRef}
        >
          <span>
            {selectedDate.checkIn ? selectedDate.checkIn : 'Check-in'}
          </span>
        </div>
        <div
          role="button"
          aria-hidden
          className={`${classes.checkOutBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('datePicker');
            setCheckInCheckoutHandler('checkOut');
          }}
        >
          <span>
            {selectedDate.checkOut ? selectedDate.checkOut : 'Check-out'}
          </span>
          {selectedDate.checkOut && (
            <HeaderSearchBtnDelete
              onClickProps={() =>
                deleteSearchHandler(
                  initSelectedDate,
                  setSelectedDate,
                  'datePicker'
                )
              }
            />
          )}
        </div>
        <div
          role="button"
          aria-hidden
          className={`${classes.guestBtn} ${classes.searchBtn}`}
          type="button"
          onClick={() => {
            showMenuHandler('guests');
          }}
        >
          <span>Guests</span>
          {selectedGuests.adults > 0 && (
            <HeaderSearchBtnDelete
              onClickProps={() =>
                deleteSearchHandler(
                  initSelectedGuests,
                  setSelectedGuests,
                  'guests'
                )
              }
            />
          )}
        </div>
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
