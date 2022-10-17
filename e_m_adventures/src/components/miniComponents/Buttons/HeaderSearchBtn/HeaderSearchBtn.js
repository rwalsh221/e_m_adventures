import React from 'react';
import classes from './HeaderSearchBtn.module.css';

const HeaderSearchBtnDelete = ({ onClickProps }) => (
  <button
    className={classes.btnDelete}
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      onClickProps();
    }}
  >
    X
  </button>
);

export default HeaderSearchBtnDelete;
