import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './ModifyBookingModalChange.module.css';

import HeaderSearchBtnDelete from '../../../miniComponents/Buttons/HeaderSearchBtn/HeaderSearchBtn';
import { formatDate } from '../../../../helpers/utilities';
import DatePicker from '../../../HeaderSearch/DatePicker/DatePicker';

const ModifyBookingModalChange = ({
  changeBookingHandlerProps,
  setShowBackdropProps,
  currentBookingProps,
}) => {
  // STATE TO SET SLECTED CHECKIN CHECKOUT DATE
  const [selectedDate, setSelectedDate] = useState({
    checkInCheckOut: 'checkIn',
    checkIn: null,
    checkOut: null,
    fullDays: [],
  });

  const [error, setError] = useState();

  // SAVE INITIAL STATE WHEN COMPONENT MOUNTED - USED TO RESET STATE TO INIT WHEN CANCEL BTN USED
  const initSelectedDate = useRef(selectedDate);

  // REMOVE THE SELECTED DATE FROM SELECTEDDATE STATE AND BTN DISPLAY
  const deleteSearchHandler = (initObject, state) => {
    state({ ...initObject.current });
  };

  const searchBtnDisabled = () => {
    if (selectedDate.checkOut) {
      return false;
    }
    return true;
  };

  return (
    <div className={classes.modifyBookingModalChange}>
      {/* {error && <ErrorComponent messageProps={error} />} */}
      <h2>Do you want to change your booking?</h2>

      <div className={classes.changeBooking_grid}>
        <div className={classes.changeBooking_reset}>
          {/* RESET DATE PICKER BUTTON */}
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
        <div className={classes.changeBooking_heading}>
          <h3>Current Booking</h3>
        </div>
        <div className={classes.changeBooking_heading}>
          <h3>New Booking</h3>
        </div>

        <div className={classes.changeBooking_current}>
          <p>Check-in: {formatDate(currentBookingProps.checkIn)}</p>
          <p>Check-out: {formatDate(currentBookingProps.checkOut)}</p>
        </div>
        <div className={classes.changeBooking_new}>
          <p>
            {selectedDate.checkIn
              ? `New Check-in: ${selectedDate.checkIn}`
              : 'New Check-in:'}
          </p>
          <p>
            {selectedDate.checkOut
              ? `New Check-out: ${selectedDate.checkOut}`
              : 'New Check-out:'}
          </p>
        </div>
      </div>
      {error && <p className={classes.errorMessage}>{error}</p>}
      <div className={classes.datePicker_container}>
        <DatePicker
          selectedDateProps={selectedDate}
          setSelectedDateProps={setSelectedDate}
        />
      </div>
      <div className={classes.backdropBtnContainer}>
        <button
          type="button"
          className={`${classes.submitBtn} ${classes.searchBtn}`}
          onClick={() =>
            changeBookingHandlerProps(
              selectedDate.checkIn,
              selectedDate.checkOut,
              setError
            )
          }
          disabled={searchBtnDisabled()}
        >
          Search
        </button>
        <button
          type="button"
          className={classes.submitBtn}
          onClick={() => setShowBackdropProps(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

ModifyBookingModalChange.propTypes = {
  changeBookingHandlerProps: PropTypes.func.isRequired,
  setShowBackdropProps: PropTypes.func.isRequired,
  currentBookingProps: PropTypes.shape({
    bookingRef: PropTypes.string,
    checkIn: PropTypes.number,
    checkOut: PropTypes.number,
  }).isRequired,
};
export default ModifyBookingModalChange;
