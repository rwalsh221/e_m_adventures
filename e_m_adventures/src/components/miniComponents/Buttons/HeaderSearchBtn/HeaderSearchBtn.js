import React from 'react';
import PropTypes from 'prop-types';
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

HeaderSearchBtnDelete.propTypes = {
  onClickProps: PropTypes.func.isRequired,
};

export default HeaderSearchBtnDelete;
