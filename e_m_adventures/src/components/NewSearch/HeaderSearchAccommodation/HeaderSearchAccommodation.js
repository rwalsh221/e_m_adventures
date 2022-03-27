import React from 'react';
import PropTypes from 'prop-types';
import classes from './HeaderSearchAccommodation.module.css';
import { useAccommodationContext } from '../../../contexts/AccommodationContext';

import Spinner from '../../miniComponents/Spinner/Spinner';

const HeaderSearchAccommodation = ({
  selectedAccommodationProps,
  setSelectedAccommodationProps,
  showMenuHandlerProps,
  checkInBtnRefProps,
}) => {
  const { getAccommodation } = useAccommodationContext();

  const selectAccommodationHandler = (event) => {
    const selectedAccommodationCopy = { ...selectedAccommodationProps };

    selectedAccommodationCopy.accommodationId =
      event.target.dataset.accommodationId;
    selectedAccommodationCopy.accommodationName =
      event.target.dataset.accommodationName;

    setSelectedAccommodationProps({ ...selectedAccommodationCopy });
  };

  const accommodationCardContent = getAccommodation.loading ? (
    <div className={classes.spinnerContainer}>
      <Spinner />
    </div>
  ) : (
    getAccommodation.data.map((element) => (
      <div
        key={element.accommodationId}
        className={classes.accommodationCard}
        data-acommodation-id={element.accommodationId}
        data-accommodation-name={element.accommodationName}
        onClick={(e) => {
          selectAccommodationHandler(e);
          showMenuHandlerProps('datePicker');
          checkInBtnRefProps.current.focus();
        }}
        aria-hidden
      >
        <img
          src={`img/accommodation/${element.accommodationId}/hero.jpg`}
          className={classes.cardImg}
          alt="accommodation"
        />
        <p>{element.accommodationName}</p>
      </div>
    ))
  );

  return (
    <div className={classes.headerSearchAccommodation}>
      <div className={classes.locationHeading}>
        <h6>Our Accomodation</h6>
      </div>
      <div className={classes.accommodationCardContainer}>
        {accommodationCardContent}
      </div>
    </div>
  );
};

export default HeaderSearchAccommodation;

HeaderSearchAccommodation.propTypes = {
  selectedAccommodationProps: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedAccommodationProps: PropTypes.func.isRequired,
  showMenuHandlerProps: PropTypes.func.isRequired,
  checkInBtnRefProps: PropTypes.shape({
    current: PropTypes.instanceOf(Element),
  }).isRequired,
};
