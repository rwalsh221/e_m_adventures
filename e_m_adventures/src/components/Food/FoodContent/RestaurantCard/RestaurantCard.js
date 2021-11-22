import React from 'react';
import PropTypes from 'prop-types';

import classes from './RestaurantCard.module.css';

const RestaurantCard = ({ titleProps, imgProps, websiteProps, phoneProps }) => (
  <div className={classes.sidebarCard}>
    <img className={classes.sidebarCardImg} src={imgProps} alt="babar" />
    <h6>{titleProps}</h6>
    <a className={classes.webLink} href={`https://www.${websiteProps}`}>
      {websiteProps}/
    </a>
    <p>{phoneProps}</p>
  </div>
);

RestaurantCard.propTypes = {
  titleProps: PropTypes.string.isRequired,
  imgProps: PropTypes.node.isRequired,
  websiteProps: PropTypes.string.isRequired,
  phoneProps: PropTypes.number.isRequired,
};

export default RestaurantCard;
