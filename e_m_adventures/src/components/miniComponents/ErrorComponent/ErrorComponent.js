import React from 'react';

import classes from './ErrorComponent.module.css';

const ErrorComponent = (props) => {
  return <div className={classes.error}>{props.message}</div>;
};

export default ErrorComponent;
