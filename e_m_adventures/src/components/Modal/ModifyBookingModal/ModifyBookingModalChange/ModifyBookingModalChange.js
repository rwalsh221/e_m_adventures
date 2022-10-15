import React, { useState, useRef } from 'react';
import classes from './ModifyBookingModalChange.module.css';

import { HeaderSearchBtnDelete } from '../../../miniComponents/Buttons/HeaderSearchBtn/HeaderSearchBtn';
import DatePicker from '../../../HeaderSearch/DatePicker/DatePicker';

// const ModifyBookingModalChange = () => (
//   <div>
//     <h2>Change Your Booking</h2>
//     <form className={classes.searchForm}>
//       <div className={classes.start}>
//         <h6>Carnforth Forest Lodge</h6>
//       </div>
//       <div className={classes.date}>
//         <label htmlFor="checkIn" className={classes.dateCheckin}>
//           Check-in
//         </label>
//         <input type="date" id="checkIn" ref={newCheckInRef} />
//       </div>
//       <div className={classes.date}>
//         <label htmlFor="checkOut" className={classes.dateCheckout}>
//           Check-out
//         </label>
//         <input type="date" id="checkOut" ref={newCheckOutRef} />
//       </div>
//     </form>
//     <div className={classes.backdropBtnContainer}>
//       <button
//         type="button"
//         className={classes.submitBtn}
//         onClick={validateChangeBookingForm}
//       >
//         Submit
//       </button>
//       <button
//         type="button"
//         className={classes.submitBtn}
//         onClick={() => setShowBackdrop(false)}
//       >
//         Cancel
//       </button>
//     </div>
//     {/* <HeaderSearch /> */}
//   </div>
// );

const ModifyBookingModalChange = ({
  changeBookingHandlerProps,
  setShowBackdropProps,
}) => {
  // STATE TO SHOW DATE PICKER
  const [showDatePicker, setShowDatePicker] = useState(false);

  // STATE TO SET SLECTED CHECKIN CHECKOUT DATE
  const [selectedDate, setSelectedDate] = useState({
    checkInCheckOut: 'checkIn',
    checkIn: null,
    checkOut: null,
    fullDays: [],
  });

  console.log(selectedDate);

  // SAVE INITIAL STATE WHEN COMPONENT MOUNTED - USED TO RESET STATE TO INIT WHEN CANCEL BTN USED
  const initSelectedDate = useRef(selectedDate);

  const setCheckInCheckoutHandler = (input) => {
    // INPUT EITHER CHECKIN OR CHECKOUT TO SET RESPECTIVE DATES FROM DATE PICKER COMPONENT
    if (showDatePicker) {
      setSelectedDate({ ...selectedDate, checkInCheckOut: input });
    }
  };

  // REMOVE THE SELECTED DATE FROM SELECTEDDATE STATE AND BTN DISPLAY
  const deleteSearchHandler = (initObject, state, key) => {
    state({ ...initObject.current });
    // showMenuHandler(key);
  };

  return (
    <div>
      {/* {error && <ErrorComponent messageProps={error} />} */}
      <h2>Do you want to change your booking?</h2>
      {/* CHECKIN BTN  */}
      <div
        role="button"
        aria-hidden
        className={`${classes.checkInBtn} ${classes.searchBtn}`}
        type="button"
        onClick={() => {
          setShowDatePicker(true);
          setCheckInCheckoutHandler('checkIn');
        }}
        // ref={checkInBtnRef}
      >
        <span>{selectedDate.checkIn ? selectedDate.checkIn : 'Check-in'}</span>
      </div>
      {/* CHECKOUT BTN */}
      <div
        role="button"
        aria-hidden
        className={`${classes.checkOutBtn} ${classes.searchBtn}`}
        type="button"
        onClick={() => {
          setShowDatePicker(true);
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
      {/* {showDatePicker && (
        <DatePicker
          selectedDateProps={selectedDate}
          setSelectedDateProps={setSelectedDate}
        />
      )} */}
      <div className={classes.datePicker_container}>
        <DatePicker
          selectedDateProps={selectedDate}
          setSelectedDateProps={setSelectedDate}
        />
      </div>

      <div className={classes.backdropBtnContainer}>
        <button
          type="button"
          className={classes.submitBtn}
          onClick={changeBookingHandlerProps}
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
export default ModifyBookingModalChange;
