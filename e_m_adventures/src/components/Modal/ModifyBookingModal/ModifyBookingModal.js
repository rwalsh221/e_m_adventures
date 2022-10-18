import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModifyBookingModal.module.css';

import ModifyBookingModalCancel from './ModifyBookingModalCancel/ModifyBookingModalCancel';
import ModifyBookingModalChange from './ModifyBookingModalChange/ModifyBookingModalChange';

const ModifyBookingModal = ({
  showModalProps,
  setShowModalParentProps,
  cancelBookingHandlerProps,
  changeBookingHandlerProps,
  currentBookingProps,
}) => {
  const initStyle = showModalProps.showModal ? 'block' : 'none';

  // CLOSE MODAL WITH BACKGROUND CLICK OR BTN CLICK
  const closeModal = (e) => {
    if (
      e.target.id === 'modalBackground' ||
      e.target.dataset.btn === 'modalClose'
    ) {
      setShowModalParentProps({ showModal: false, content: '' });
    }
  };

  const setModalContent = (input) => {
    let content;
    switch (input) {
      case 'cancel':
        content = (
          <ModifyBookingModalCancel
            cancelBookingHandlerProps={cancelBookingHandlerProps}
            closeModalProps={closeModal}
          />
        );
        break;
      case 'modify':
        content = (
          <ModifyBookingModalChange
            changeBookingHandlerProps={changeBookingHandlerProps}
            closeModalProps={closeModal}
            currentBookingProps={currentBookingProps}
          />
        );
        break;
      default:
        content = null;
    }
    return content;
  };

  return (
    <div
      id="modalBackground"
      aria-hidden
      style={{ display: initStyle }}
      className={classes.modifyBookingModalBg}
      onClick={(e) => closeModal(e)}
    >
      <div className={classes.modifyBookingModalContent}>
        <div className={classes.modalCloseContainer}>
          <button
            data-btn="modalClose"
            type="button"
            onClick={(e) => closeModal(e)}
            className={classes.closeBtn}
          >
            X
          </button>
        </div>
        {/* DISPLAY REACT COMPONENT FROM PROPS CONTENT */}
        {setModalContent(showModalProps.content)}
      </div>
    </div>
  );
};

ModifyBookingModal.propTypes = {
  showModalProps: PropTypes.objectOf(PropTypes.any).isRequired,
  setShowModalParentProps: PropTypes.func.isRequired,
  cancelBookingHandlerProps: PropTypes.func.isRequired,
  changeBookingHandlerProps: PropTypes.func.isRequired,
  currentBookingProps: PropTypes.shape({
    bookingRef: PropTypes.string,
    checkIn: PropTypes.number,
    checkOut: PropTypes.number,
  }).isRequired,
};

export default ModifyBookingModal;
