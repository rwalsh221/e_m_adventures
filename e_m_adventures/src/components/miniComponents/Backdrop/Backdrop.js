import classes from './Backdrop.module.css';
import React from 'react';

const Backdrop = React.forwardRef((props, ref) => {
  return props.show ? (
    <div ref={ref} className={`${classes.backdrop}`}>
      {props.children}
    </div>
  ) : null;
});

export default Backdrop;
