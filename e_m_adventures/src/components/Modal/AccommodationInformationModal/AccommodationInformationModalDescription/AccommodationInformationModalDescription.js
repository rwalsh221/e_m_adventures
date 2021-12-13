import React from 'react';
import PropTypes from 'prop-types';
import classes from './AccommodationInformationModalDescription.module.css';

const AccommodationInformationModalDescription = ({ contentProps }) => (
  <div className={classes.descriptionContent}>
    <div className={classes.mainDescription}>
      <h2>About This Place</h2>
      <p>{contentProps.mainDescription}</p>
    </div>
    <div className={classes.accessDescription}>
      <h3 data-boldfont>Guest Access</h3>
      <p>{contentProps.accessDescription}</p>
    </div>
    <div className={classes.otherDescription}>
      <h3 data-boldfont>Other things to note</h3>
      <p>{contentProps.otherDescription}</p>
    </div>
  </div>
);

AccommodationInformationModalDescription.propTypes = {
  contentProps: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AccommodationInformationModalDescription;
