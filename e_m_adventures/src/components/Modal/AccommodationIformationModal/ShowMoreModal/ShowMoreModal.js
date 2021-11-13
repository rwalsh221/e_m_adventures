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
    <div style={{ display: initStyle }} className={classes.showMoreModal}>
      <button onClick={() => setShowModalParentProps(false)}>click</button>
      {/* {children} */}
      <ShowMoreModalCancellation />
    </div>
  );
};

export default ShowMoreModal;
