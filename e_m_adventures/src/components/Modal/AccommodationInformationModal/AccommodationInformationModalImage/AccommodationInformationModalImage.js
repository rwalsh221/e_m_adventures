import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './AccommodationInformationModalImage.module.css';

// import img from '../../../../../public/img/accommodation/acc0001';

const AccommodationInformationModalImage = ({ imageProps }) => {
  const templates = require.context(
    '../../../../../public/img/accommodation/acc0001',
    true,
    /\.(jpg|jpeg)$/
  );
  console.log(templates.keys());
  console.log(templates('./1.jpg').default);
  const images = templates
    .keys()
    .map((elem) => <img key={elem} src={templates(elem).default} />);

  console.log(images);
  console.log(
    `img/accommodation/${imageProps.accomId}/${imageProps.imageName}.jpg`
  );
  return (
    <div className={classes.image}>
      <img
        alt="focus"
        src={`img/accommodation/${imageProps.accomId}/${imageProps.imageName}.jpg`}
      />
      {images}
    </div>
  );
};

AccommodationInformationModalImage.propTypes = {
  imageProps: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AccommodationInformationModalImage;
