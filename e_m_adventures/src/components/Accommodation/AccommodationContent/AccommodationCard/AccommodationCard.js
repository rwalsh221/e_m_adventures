import React from 'react';
import PropTypes from 'prop-types';
import classes from './AccommodationCard.module.css';

const AccommodationCard = ({
  onClickProps,
  nameProps,
  idProps,
  descriptionProps,
  cityProps,
  priceProps,
}) => (
  <div
    className={classes.accommodationCard}
    onClick={() => onClickProps(idProps)}
    aria-hidden
  >
    <h2 className={classes.accommodationCard__heading} data-capitalizefont>
      {nameProps}
    </h2>
    <img
      className={classes.accommodationCard__img}
      src={`img/accommodation/${idProps}/hero.jpg`}
      alt={nameProps}
    />
    <p className={classes.accommodationCard__description}>{descriptionProps}</p>
    <p className={classes.accommodationCard__location} data-capitalizefont>
      {cityProps}
    </p>
    <p className={classes.accommodationCard__price}>
      {`£${priceProps} / night`}
    </p>
  </div>
);

AccommodationCard.propTypes = {
  onClickProps: PropTypes.func.isRequired,
  nameProps: PropTypes.string.isRequired,
  idProps: PropTypes.string.isRequired,
  descriptionProps: PropTypes.string.isRequired,
  cityProps: PropTypes.string.isRequired,
  priceProps: PropTypes.string.isRequired,
};

export default AccommodationCard;
