import React from 'react';
import PropTypes from 'prop-types';
import classes from './Backdrop.module.css';

const Backdrop = React.forwardRef(({ showProps, children }, ref) =>
  showProps ? (
    <div ref={ref} className={`${classes.backdrop}`}>
      {children}
    </div>
  ) : null
);

Backdrop.propTypes = {
  showProps: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Backdrop;
