import React, { useState } from 'react';
import classes from './HeaderSearch.module.css';

import DatePicker from '../DatePicker/DatePicker';

const HeaderSearch = () => {
  const [showPicker, setShowPicker] = useState(true);

  return (
    <div>
      <div className={classes.test}>{showPicker && <DatePicker />}</div>;
      <div className={classes.searchContainer}>
        <div className={classes.test2}>
          <button
            className={`${classes.startBtn} ${classes.searchBtn}`}
            type="button"
          >
            <h6>Start Your Adventure</h6>
            <p>where are you going?</p>
          </button>
        </div>

        <button
          className={`${classes.checkInBtn} ${classes.searchBtn}`}
          type="button"
        >
          <p>Check-in</p>
        </button>
        <button
          className={`${classes.checkOutBtn} ${classes.searchBtn}`}
          type="button"
        >
          <p>Check-out</p>
        </button>
        <button
          className={`${classes.guestBtn} ${classes.searchBtn}`}
          type="button"
        >
          <p>Guests</p>
        </button>

        <button
          type="button"
          className={`${classes.submitBtn} ${classes.searchBtn}`}
          onClick={() => {}}
        >
          <p>SUBMIT</p>
        </button>
      </div>
      {/* {error && <ErrorComponent messageProps={error} />} */}
    </div>
  );
};

export default HeaderSearch;
