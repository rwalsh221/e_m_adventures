import classes from './Backdrop.module.css';
import React from 'react';

const Backdrop = React.forwardRef((props, ref) => {
  console.log(props);
  return props.show ? (
    <div ref={ref} className={`${classes.test}`}>
      <ul>
        <li>{props.content.bookingRef}</li>
        <li>{props.content.checkIn}</li>
        <li>{props.content.checkOut}</li>
      </ul>
    </div>
  ) : null;
});

export default Backdrop;
