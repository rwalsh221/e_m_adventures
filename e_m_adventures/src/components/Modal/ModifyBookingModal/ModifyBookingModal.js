import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModifyBookingModal.module.css';

import ModifyBookingModalCancel from './ModifyBookingModalCancel/ModifyBookingModalCancel';

const ModifyBookingModal = ({
  showModalProps,
  setShowModalParentProps,
  cancelBookingHandlerProps,
}) => {
  const initStyle = showModalProps.showModal ? 'block' : 'none';

  const setModalContent = (input) => {
    let content;
    switch (input) {
      case 'cancel':
        content = (
          <ModifyBookingModalCancel
            cancelBookingHandlerProps={cancelBookingHandlerProps}
          />
        );
        break;
      default:
        content = null;
    }
    return content;
  };

  // CLOSE MODAL WITH BACKGROUND CLICK OR BTN CLICK
  const closeModal = (e) => {
    if (e.target.id === 'modalBackground' || e.target.id === 'modalCloseBtn') {
      setShowModalParentProps({ showModal: false, content: '' });
    }
  };

  return (
    <div
      id="modalBackground"
      aria-hidden
      style={{ display: initStyle }}
      className={classes.accomInfoModalBg}
      onClick={(e) => closeModal(e)}
    >
      <div className={classes.accomInfoModalContent}>
        <div className={classes.accomInfoModalContentHeader}>
          <button
            id="modalCloseBtn"
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
};

export default ModifyBookingModal;
