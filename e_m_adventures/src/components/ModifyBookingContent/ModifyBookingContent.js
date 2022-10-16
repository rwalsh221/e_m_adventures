import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import getBookingData from '../../helpers/booking/getBookingData';
import { useAuth } from '../../contexts/AuthContext';

// import HeaderSearch from '../NewSearch/HeaderSearch';

import ErrorComponent from '../miniComponents/ErrorComponent/ErrorComponent';
import errorTimeout from '../../helpers/error/errorTimeout';
import Backdrop from '../miniComponents/Backdrop/Backdrop';

import { validateDate } from '../../helpers/validation';
import {
  dateToMilliseconds,
  getFullDays,
  formatDate,
} from '../../helpers/utilities';
import cancelBooking from '../../helpers/booking/cancelBooking';

import bookingIsAvaliable from '../../helpers/booking/bookingIsAvaliable';
import holdCurrentBooking from '../../helpers/booking/holdCurrentBooking';

import * as actionTypes from '../HeaderSearch/HeaderSearchSlice';

import classes from './ModifyBookingContent.module.css';
import ChangeBooking from './ChangeBooking/ChangeBooking';
import ModifyBookingModal from '../Modal/ModifyBookingModal/ModifyBookingModal';

const mapDispatch = { ...actionTypes };

const ModifyBookingContent = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [backdropContent, setBackdropContent] = useState('');
  const [error, setError] = useState('');
  const [changeBooking, setChangeBooking] = useState('true');

  const backdropRef = useRef(null);
  const newCheckInRef = useRef();
  const newCheckOutRef = useRef();

  const dispatch = useDispatch();
  const history = useHistory();

  const reduxState = useSelector((state) => state.modifyBooking);

  // const database =
  //   'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/';

  const { currentUser } = useAuth();

  // // USEEFFECT FOR SHOWBACKDROP
  // useEffect(() => {
  //   const pageClickEvent = (e) => {
  //     // If the active element exists and is clicked outside of
  //     if (
  //       backdropRef.current !== null &&
  //       !backdropRef.current.contains(e.target)
  //     ) {
  //       setError('');
  //       setShowBackdrop(false);
  //     }
  //   };
  //   // If the item is active (ie open) then listen for clicks
  //   if (showBackdrop) {
  //     window.addEventListener('click', pageClickEvent);
  //   }

  //   return () => {
  //     window.removeEventListener('click', pageClickEvent);
  //   };
  // }, [showBackdrop]);

  const cancelBookingHandler = async () => {
    try {
      await cancelBooking(reduxState, currentUser, history);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(reduxState);

  // WAS SUBMITHANDLER
  const changeBookingHandler = async (newCheckInDate, newCheckOutDate) => {
    const newCheckIn = dateToMilliseconds(newCheckInDate);
    const newCheckOut = dateToMilliseconds(newCheckOutDate);

    const fullDays = getFullDays(newCheckIn, newCheckOut);

    const newBooking = {
      newCheckIn,
      newCheckOut,
      fullDays,
    };

    try {
      const { allBookingsJson } = await getBookingData(currentUser);
      console.log(allBookingsJson);
      const oldBooking = reduxState;

      delete allBookingsJson[oldBooking.bookingRef];

      if (bookingIsAvaliable(allBookingsJson, newBooking, setError) === true) {
        const ref = `ref${nanoid()}`;
        if (
          await holdCurrentBooking(
            dateToMilliseconds(newCheckInDate),
            dateToMilliseconds(newCheckOutDate),
            setError,
            ref
          )
        ) {
          dispatch(
            actionTypes.booking({
              checkIn: dateToMilliseconds(newCheckInDate),
              checkOut: dateToMilliseconds(newCheckOutDate),
              holdRef: ref,
            })
          );

          history.push({
            pathname: 'summary',
            state: { holdStatus: false, modify: true },
          });
        } else {
          history.push({
            pathname: 'summary',
            state: { holdStatus: true },
          });
        }
      } else {
        errorTimeout(setError, 'Unfortunatley Those Dates Are Unavaliable');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // // VALIDATE CHANGE BOOKING FORM
  // const validateChangeBookingForm = async () => {
  //   let formIsValid = false;

  //   formIsValid = validateDate(
  //     newCheckInRef.current.value,
  //     newCheckOutRef.current.value
  //   );

  //   if (formIsValid) {
  //     submitHandler();
  //   }
  // };

  // const cancelBookingBackdropContent = () => {
  //   setBackdropContent(
  //     <div>
  //       {error && <ErrorComponent messageProps={error} />}
  //       <h2>Are You Sure You Want To Cancel Your Booking?</h2>
  //       <div className={classes.backdropBtnContainer}>
  //         <button
  //           type="button"
  //           className={classes.submitBtn}
  //           onClick={cancelBookingHandler}
  //         >
  //           YES
  //         </button>
  //         <button
  //           type="button"
  //           className={classes.submitBtn}
  //           onClick={() => setShowBackdrop(false)}
  //         >
  //           NO
  //         </button>
  //       </div>
  //     </div>
  //   );
  //   setShowBackdrop(true);
  // };

  // const changeBookingBackdropContent = () => {
  //   setBackdropContent(
  //     <div>
  //       <h2>Change Your Booking</h2>
  //       <form className={classes.searchForm}>
  //         <div className={classes.start}>
  //           <h6>Carnforth Forest Lodge</h6>
  //         </div>
  //         <div className={classes.date}>
  //           <label htmlFor="checkIn" className={classes.dateCheckin}>
  //             Check-in
  //           </label>
  //           <input type="date" id="checkIn" ref={newCheckInRef} />
  //         </div>
  //         <div className={classes.date}>
  //           <label htmlFor="checkOut" className={classes.dateCheckout}>
  //             Check-out
  //           </label>
  //           <input type="date" id="checkOut" ref={newCheckOutRef} />
  //         </div>
  //       </form>
  //       <div className={classes.backdropBtnContainer}>
  //         <button
  //           type="button"
  //           className={classes.submitBtn}
  //           onClick={validateChangeBookingForm}
  //         >
  //           Submit
  //         </button>
  //         <button
  //           type="button"
  //           className={classes.submitBtn}
  //           onClick={() => setShowBackdrop(false)}
  //         >
  //           Cancel
  //         </button>
  //       </div>
  //       {/* <HeaderSearch /> */}
  //     </div>
  //   );
  //   setShowBackdrop(true);
  // };

  const [showModal, setShowModal] = useState({
    showModal: false,
    content: '',
  });

  const setShowModalHandler = (content) => {
    setShowModal({
      showModal: true,
      content,
    });
  };

  return (
    <main className={classes.main}>
      {/* {error && <ErrorComponent messageProps={error} />}
      <Backdrop showProps={showBackdrop} ref={backdropRef}>
        {backdropContent}
      </Backdrop> */}
      <h1 className={classes.mainHeading}>Change Your Booking</h1>
      <h2 className={classes.secHeading}>
        Your Going to Carnforth Forest Lodge
      </h2>
      <ul className={classes.bookingInfo}>
        <li>
          Booking Reference:&nbsp;<span>{reduxState.bookingRef}</span>
        </li>
        <li>
          Check In:&nbsp;<span>{formatDate(reduxState.checkIn / 1000)}</span>
        </li>
        <li>
          Check Out:&nbsp;<span>{formatDate(reduxState.checkOut / 1000)}</span>
        </li>
      </ul>
      <button
        type="button"
        className={classes.submitBtn}
        onClick={() => setShowModalHandler('cancel')}
      >
        Cancel Your Booking
      </button>
      <button
        type="button"
        onClick={() => setShowModalHandler('modify')}
        className={classes.submitBtn}
      >
        Change Your Booking
      </button>
      {showModal.showModal && (
        <ModifyBookingModal
          showModalProps={showModal}
          setShowModalParentProps={setShowModal}
          cancelBookingHandlerProps={cancelBookingHandler}
          changeBookingHandlerProps={changeBookingHandler}
          currentBookingProps={reduxState}
        />
      )}
    </main>
  );
};

export default connect(null, mapDispatch)(ModifyBookingContent);
