import React from 'react';
import classes from './ModifyBookingModalCancel.module.css';

const ModifyBookingModalCancel = ({
  cancelBookingHandlerProps,
  closeModalProps,
}) => (
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

export default ModifyBookingModalCancel;
