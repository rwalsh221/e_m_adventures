import React from 'react';
import classes from './ShowMoreModal.module.css';

import ShowMoreModalCancellation from './ShowMoreModalContent/ShowMoreModalCancellation/ShowMoreModalCancellation';

const ShowMoreModal = ({
  showModalProps,
  setShowModalParentProps,
  children,
}) => {
  const initStyle = showModalProps ? 'block' : 'none';

  return (
    <div
      style={{ display: initStyle }}
      className={classes.showMoreModalBg}
      onClick={() => {
        setShowModalParentProps(false);
      }}
    >
      <div className={classes.showMoreModalContent}>
        <button
          onClick={() => setShowModalParentProps(false)}
          className={classes.closeBtn}
        >
          X
        </button>
        {/* {children} */}
        <ShowMoreModalCancellation />
      </div>
    </div>
  );
};

export default ShowMoreModal;
