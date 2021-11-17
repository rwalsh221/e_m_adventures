import React from 'react';
import classes from './ShowMoreModal.module.css';

import ShowMoreModalCancellation from './ShowMoreModalContent/ShowMoreModalCancellation/ShowMoreModalCancellation';
import ShowMoreModalHealth from './ShowMoreModalContent/ShowMoreModalHealth/ShowMoreModalHealth';

const ShowMoreModal = ({
  showModalProps,
  setShowModalParentProps,
  children,
}) => {
  const initStyle = showModalProps.showModal ? 'block' : 'none';
  console.log(showModalProps);

  console.log(showModalProps.content.cancellation);

  const showMoreModalContent = (input) => {
    let content;
    switch (input) {
      case 'cancellation':
        content = <ShowMoreModalCancellation />;
      case 'health':
        content = <ShowMoreModalHealth />;
    }
    return content;
  };

  const closeModal = () => {
    setShowModalParentProps({ showModal: false, content: '' });
  };

  return (
    <div
      style={{ display: initStyle }}
      className={classes.showMoreModalBg}
      onClick={closeModal}
    >
      <div className={classes.showMoreModalContent}>
        <button onClick={closeModal} className={classes.closeBtn}>
          X
        </button>
        {showMoreModalContent(showModalProps.content)}
      </div>
    </div>
  );
};

export default ShowMoreModal;
