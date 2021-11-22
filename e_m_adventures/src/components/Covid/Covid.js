import React from 'react';

import classes from './Covid.module.css';

const Covid = () => (
  <div className={classes.covid}>
    <a href="/covid">
      <p className={classes.content}>View Our Covid Response</p>
    </a>
  </div>
);

export default Covid;
