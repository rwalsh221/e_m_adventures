import React from 'react';
import classes from './HeaderSearchAccommodation.module.css';
import { useAccommodationContext } from '../../../contexts/AccommodationContext';

import Spinner from '../../miniComponents/Spinner/Spinner';

const HeaderSearchAccommodation = () => {
  const { getAccommodation } = useAccommodationContext();

  console.log(getAccommodation);

  const content = getAccommodation.loading ? (
    <div className={classes.spinnerContainer}>
      <Spinner />
    </div>
  ) : (
    getAccommodation.data.map((element) => (
      <div className={classes.accommodationCard}>
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
      <div className={classes.accommodationCardContainer}>{content}</div>
    </div>
  );
};

export default HeaderSearchAccommodation;
