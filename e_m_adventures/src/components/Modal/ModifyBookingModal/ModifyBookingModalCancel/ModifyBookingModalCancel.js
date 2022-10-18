import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModifyBookingModalCancel.module.css';

const ModifyBookingModalCancel = ({ cancelBookingHandlerProps }) => (
  <div>
    {/* {error && <ErrorComponent messageProps={error} />} */}
    <h2>Are You Sure You Want To Cancel Your Booking?</h2>
    <div className={classes.backdropBtnContainer}>
      <button
        type="button"
        className={classes.submitBtn}
        onClick={cancelBookingHandlerProps}
      >
        YES
      </button>
      <button
        type="button"
        className={classes.submitBtn}
        data-btn="modalClose"
        // onClick={(e) => closeModalProps(e)}
      >
        NO
      </button>
    </div>
  </div>
);

ModifyBookingModalCancel.propTypes = {
  cancelBookingHandlerProps: PropTypes.func.isRequired,
};

export default ModifyBookingModalCancel;
