import React from 'react';
import PropTypes from 'prop-types';
import classes from './ShowMoreModalBtn.module.css';

const ShowMoreModalBtn = ({ clickHandler }) => (
  <button
    type="button"
    className={classes.showModalBtn}
    onClick={() => clickHandler()}
  >
    Show more <ion-icon name="chevron-forward" />
  </button>
);

ShowMoreModalBtn.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ShowMoreModalBtn;
