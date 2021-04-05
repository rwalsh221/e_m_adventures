import React, { useRef } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { validateDate } from '../../../../helpers/validation';
import { dateToMilliseconds } from '../../../../helpers/utilities';

import classes from './SearchPopUp.module.css';

import * as actionTypes from '../HeaderSearchSlice';

const mapDispatch = { ...actionTypes };

const SearchPopUp = (props) => {
  const dispatch = useDispatch();

  const checkInPop = useRef();
  const checkOutPop = useRef();
  const history = useHistory();

  let formIsValid = false;

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
            console.log(checkInPop.current.value);
            console.log(checkOutPop.current.value);
            console.log();

            formIsValid = validateDate(
              checkInPop.current.value,
              checkOutPop.current.value
            );
            if (formIsValid) {
              console.log('valid');
              dispatch(
                actionTypes.booking({
                  checkIn: dateToMilliseconds(checkInPop.current.value),
                  checkOut: dateToMilliseconds(checkOutPop.current.value),
                })
              );
              history.push('/summary');
            } else {
              console.log('invalid form');
            }
          }}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default connect(null, mapDispatch)(SearchPopUp);
