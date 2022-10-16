import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModifyBookingModal.module.css';

import ModifyBookingModalCancel from './ModifyBookingModalCancel/ModifyBookingModalCancel';
import ModifyBookingModalChange from './ModifyBookingModalChange/ModifyBookingModalChange';

const ModifyBookingModal = ({
  showModalProps,
  setShowModalParentProps,
  cancelBookingHandlerProps,
  modifyBookingHandlerProps,
  currentBookingProps,
}) => {
  const initStyle = showModalProps.showModal ? 'block' : 'none';

  // CLOSE MODAL WITH BACKGROUND CLICK OR BTN CLICK
  const closeModal = (e) => {
    console.log(e.target.id);

    if (
      e.target.id === 'modalBackground' ||
      e.target.dataset.btn === 'modalClose'
    ) {
      console.log('close');
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
            changeBookingHandlerProps={modifyBookingHandlerProps}
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
      className={classes.accomInfoModalBg}
      onClick={(e) => closeModal(e)}
    >
      <div className={classes.accomInfoModalContent}>
        <div className={classes.accomInfoModalContentHeader}>
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
};

export default ModifyBookingModal;
