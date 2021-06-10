import React, { useRef, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { validateDate } from '../../../../helpers/validation';
import { dateToMilliseconds } from '../../../../helpers/utilities';
import holdCurrentBooking from '../../../../helpers/booking/holdCurrentBooking';

import classes from './SearchPopUp.module.css';

import * as actionTypes from '../HeaderSearchSlice';

const mapDispatch = { ...actionTypes };

const SearchPopUp = (props) => {
  const dispatch = useDispatch();

  const [error, setError] = useState();

  const checkInPop = useRef();
  const checkOutPop = useRef();
  const history = useHistory();

  let formIsValid = false;

  const submitSearchHandler = async () => {
    formIsValid = validateDate(
      checkInPop.current.value,
      checkOutPop.current.value
    );
    if (formIsValid) {
      const ref = `ref${nanoid()}`;
      if (
        await holdCurrentBooking(
          dateToMilliseconds(checkInPop.current.value),
          dateToMilliseconds(checkOutPop.current.value),
          setError,
          ref
        )
      ) {
        // CURRENT BOOKING IS NOT BEING HELD/RESERVED
        dispatch(
          actionTypes.booking({
            checkIn: dateToMilliseconds(checkInPop.current.value),
            checkOut: dateToMilliseconds(checkOutPop.current.value),
          })
        );
        console.log(ref);
        history.push({
          pathname: 'summary',
          state: { holdStatus: false },
        });
      } else {
        // CURRENT BOOKING IS HELD/RESERVED
        history.push({
          pathname: 'summary',
          state: { holdStatus: true },
        });
      }
    } else {
      setError('Please check your dates and try again');
      setTimeout(() => {
        setError('');
      }, 2000);
    }
  };

  return (
    <div className={classes.searchPopUp} style={{ display: props.display }}>
      <form className={classes.searchForm}>
        <div className={classes.start}>
          <h6>Start Your Adventure</h6>
        </div>
        <div className={classes.date}>
          <label htmlFor="checkIn" className={classes.searchLabel}>
            Check-in
          </label>
          <input type="date" id="checkIn" ref={checkInPop}></input>
        </div>
        <div className={classes.date}>
          <label htmlFor="checkOut" className={classes.searchLabel}>
            Check-out
          </label>
          <input type="date" id="checkOut" ref={checkOutPop}></input>
        </div>
        <div className={classes.guests}>
          <label htmlFor="guests" className={classes.searchLabel}>
            Guests
          </label>
          <select id="guests">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
            <option value="four">Four</option>
          </select>
        </div>

        <button
          className={classes.btnSubmit}
          onClick={(e) => {
            e.preventDefault();
            submitSearchHandler();
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatch)(SearchPopUp);
