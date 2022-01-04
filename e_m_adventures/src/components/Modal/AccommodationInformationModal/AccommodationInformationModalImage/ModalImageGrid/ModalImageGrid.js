import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModalImageGrid.module.css';

const ModalImageGrid = ({
  imageProps,
  accomIdProps,
  showCarouselProps,
  imgSrcProps,
  imgKeyProps,
}) => {
  let content;

  const showCarouselHandler = (e) => {
    showCarouselProps({ show: true, initImg: e.target.id.split('#')[1] });
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
          id={`id#${element}`}
          aria-hidden
          onClick={(e) => showCarouselHandler(e)}
          className={`${classes[imageClass[index]]}`}
          src={imgSrcProps(imgKeyProps, element, accomIdProps)}
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
  showCarouselProps: PropTypes.func.isRequired,
};

export default ModalImageGrid;
