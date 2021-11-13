import React from 'react';
import classes from './ShowMoreModal.module.css';

const ShowMoreModal = ({ showModalProps, setShowModalParentProps }) => {
  const initStyle = showModalProps ? 'block' : 'none';

  return (
    <div style={{ display: initStyle }} className={classes.showMoreModal}>
      <button onClick={() => setShowModalParentProps(false)}>click</button>
    </div>
  );
};

export default ShowMoreModal;
