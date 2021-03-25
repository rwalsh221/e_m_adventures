import React, { useRef } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { validateDate } from '../../../helpers/validation';
import { dateToMilliseconds } from '../../../helpers/utilities';

import * as actionTypes from './HeaderSearchSlice';

import classes from './HeaderSearch.module.css';

const mapDispatch = { ...actionTypes };

const HeaderSearch = (props) => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);

  console.log(state);
  const checkIn = useRef();
  const checkOut = useRef();
  const history = useHistory();

  let formIsValid = false;

  return (
    <div className={classes.searchContainer}>
      <form className={classes.searchForm}>
        <div className={classes.start}>
          <h6>Start Your Adventure</h6>
        </div>
        <div className={classes.date}>
          <label htmlFor="checkIn" className={classes.searchLabel}>
            Check-in
          </label>
          <input type="date" id="checkIn" ref={checkIn}></input>
        </div>
        <div className={classes.date}>
          <label htmlFor="checkOut" className={classes.searchLabel}>
            Check-out
          </label>
          <input type="date" id="checkOut" ref={checkOut}></input>
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
            console.log(checkIn.current.value);
            console.log(checkOut.current.value);
            console.log();

            formIsValid = validateDate(
              checkIn.current.value,
              checkOut.current.value
            );
            if (formIsValid) {
              dispatch(
                actionTypes.booking({
                  checkIn: dateToMilliseconds(checkIn.current.value),
                  checkOut: dateToMilliseconds(checkOut.current.value),
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

export default connect(null, mapDispatch)(HeaderSearch);
