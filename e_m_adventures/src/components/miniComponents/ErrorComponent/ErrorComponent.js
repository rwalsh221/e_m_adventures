import React from 'react';
import PropTypes from 'prop-types';

import classes from './ErrorComponent.module.css';

const ErrorComponent = ({ messageProps }) => (
  <div className={classes.error}>{messageProps}</div>
);

ErrorComponent.propTypes = {
  messageProps: PropTypes.string.isRequired,
};
export default ErrorComponent;
