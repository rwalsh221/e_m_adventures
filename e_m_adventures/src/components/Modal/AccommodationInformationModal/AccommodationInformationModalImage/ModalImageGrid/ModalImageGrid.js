import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModalImageGrid.module.css';

const ModalImageGrid = ({ imageProps, accomIdProps }) => {
  let content;

  const imgSrc = (propKey, name, accomId) => {
    // return array
    const src = `${process.env.PUBLIC_URL}/img/accommodation/${accomId}/${propKey}/${name}.jpg`;
    return src;
  };

  const imageGrid = {
    oneImageClass: ['big'],
    twoImageClass: ['small', 'small'],
    threeImageClass: ['big', 'small', 'small'],
    fourImageClass: ['small', 'small', 'small', 'small'],
    fiveImageClass: ['big', 'small', 'small', 'small', 'small'],
    sixImageClass: ['big', 'small', 'small', 'big', 'small', 'small'],
  };

  const setContent = (imageClass) => (
    <div className={classes.imgGrid}>
      {imageProps.img.map((element, index) => (
        <img
          className={`${classes[imageClass[index]]}`}
          src={imgSrc(imageProps.key, element, accomIdProps)}
          alt="Grid img"
        />
      ))}
    </div>
  );

  switch (imageProps.img.length) {
    case 1:
      content = setContent(imageGrid.oneImageClass);
      break;
    case 2:
      content = setContent(imageGrid.twoImageClass);
      break;
    case 3:
      content = setContent(imageGrid.threeImageClass);
      break;
    case 4:
      content = setContent(imageGrid.fourImageClass);
      break;
    case 5:
      content = setContent(imageGrid.fiveImageClass);
      break;
    case 6:
      content = setContent(imageGrid.sixImageClass);
      break;
    default:
      content = null;
  }

  return content;
};

ModalImageGrid.propTypes = {
  imageProps: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ModalImageGrid;
