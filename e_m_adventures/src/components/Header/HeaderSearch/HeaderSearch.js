import React from 'react';

import classes from './HeaderSearch.module.css';

const HeaderSearch = (props) => {
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
          <input type="date" id="checkIn"></input>
        </div>
        <div className={classes.date}>
          <label htmlFor="checkOut" className={classes.searchLabel}>
            Check-out
          </label>
          <input type="date" id="checkOut"></input>
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
        <button className={classes.btnSubmit}>SUBMIT</button>
      </form>
    </div>
  );
};

export default HeaderSearch;
