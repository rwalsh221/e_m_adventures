import React from 'react';
import PropTypes from 'prop-types';
import classes from './ShowMoreModal.module.css';

import ShowMoreModalCancellation from './ShowMoreModalContent/ShowMoreModalCancellation/ShowMoreModalCancellation';
import ShowMoreModalHealth from './ShowMoreModalContent/ShowMoreModalHealth/ShowMoreModalHealth';

const ShowMoreModal = ({ showModalProps, setShowModalParentProps }) => {
  const initStyle = showModalProps.showModal ? 'block' : 'none';

  const showMoreModalContent = (input) => {
    let content;
    switch (input) {
      case 'cancellation':
        content = <ShowMoreModalCancellation />;
        break;
      case 'health':
        content = <ShowMoreModalHealth />;
        break;
      default:
        content = null;
    }
    return content;
  };

  const closeModal = () => {
    setShowModalParentProps({ showModal: false, content: '' });
  };

  return (
    <div
      aria-hidden
      style={{ display: initStyle }}
      className={classes.showMoreModalBg}
      onClick={closeModal}
    >
      <div className={classes.showMoreModalContent}>
        <button type="button" onClick={closeModal} className={classes.closeBtn}>
          X
        </button>
        {showMoreModalContent(showModalProps.content)}
      </div>
    </div>
  );
};

ShowMoreModal.propTypes = {
  showModalProps: PropTypes.objectOf(PropTypes.any).isRequired,
  setShowModalParentProps: PropTypes.func.isRequired,
};

export default ShowMoreModal;
