import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './AccommodationInformationModalImage.module.css';

// import img from '../../../../../public/img/accommodation/acc0001';

const AccommodationInformationModalImage = ({ imageProps }) => {
  // TODO: TEST PROPS OBJECT
  const imgProps = {
    hero: ['hero'],
    additional: [''],
    kitchen: [''],
    living: [''],
    exterior: { heading: 'exterior', img: [''] },
    bathroom: [''],
  };

  const imgKeys = Object.keys(imgProps);

  const imgSrc = (propKey, name, accomId) => {
    // return array
    const src = `${process.env.PUBLIC_URL}/img/accommodation/${accomId}/${propKey}/${name}.jpg`;
    return src;
  };

  // 1 take imput obj from api
  // 2 get keys and forEach to generate card
  // 3 pass imgSrc array into helper function to generate img grid
  // 4 use helper function with switch that returns a grid layout depending on number of imgSrc inputs

  <div flexed>
    <h2>header</h2>
    <div>returned image grid</div>
  </div>;

  return (
    <div className={classes.image}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

AccommodationInformationModalImage.propTypes = {
  imageProps: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AccommodationInformationModalImage;
