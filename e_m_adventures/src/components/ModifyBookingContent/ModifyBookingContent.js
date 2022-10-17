import React, { useState } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import getBookingData from '../../helpers/booking/getBookingData';
import { useAuth } from '../../contexts/AuthContext';

import errorTimeout from '../../helpers/error/errorTimeout';

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

import ModifyBookingModal from '../Modal/ModifyBookingModal/ModifyBookingModal';
import ErrorContent from '../ErrorContent/ErrorContent';

const mapDispatch = { ...actionTypes };

const ModifyBookingContent = () => {
  const [showModal, setShowModal] = useState({
    showModal: false,
    content: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const reduxState = useSelector((state) => state.modifyBooking);

  const { currentUser } = useAuth();

  if (Object.keys(reduxState).length === 0) {
    return <ErrorContent />;
  }

  const cancelBookingHandler = async () => {
    try {
      await cancelBooking(reduxState, currentUser, history);
    } catch (error) {
      console.error(error);
    }
  };

  const changeBookingHandler = async (
    newCheckInDate,
    newCheckOutDate,
    setError
  ) => {
    const newCheckIn = dateToMilliseconds(newCheckInDate);
    const newCheckOut = dateToMilliseconds(newCheckOutDate);

    const fullDays = getFullDays(newCheckIn, newCheckOut);

    const newBooking = {
      checkIn: newCheckIn,
      checkOut: newCheckOut,
      fullDays,
    };

    try {
      const { allBookingsJson } = await getBookingData(currentUser);
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

  const setShowModalHandler = (content) => {
    setShowModal({
      showModal: true,
      content,
    });
  };

  return (
    <main className={classes.main}>
      <h1 className={classes.mainHeading}>Change Your Booking</h1>
      <h2 className={classes.secHeading}>
        Your Going to Carnforth Forest Lodge
      </h2>
      <ul className={classes.bookingInfo}>
        <li>
          Booking Reference:&nbsp;<span>{reduxState.bookingRef}</span>
        </li>
        <li>
          Check In:&nbsp;<span>{formatDate(reduxState.checkIn)}</span>
        </li>
        <li>
          Check Out:&nbsp;<span>{formatDate(reduxState.checkOut)}</span>
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
