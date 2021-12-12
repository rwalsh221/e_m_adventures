import React from 'react';
import PropTypes from 'prop-types';
import classes from './ModalImageGrid.module.css';

const ModalImageGrid = ({ imageProps }) => {
  const imageGridSize = (imageProps) => {
    let imageGrid = {
      oneImageClass: ['big'],
      twoImageClass: ['small', 'small'],
      threeImageClass: ['big', 'small', 'small'],
      fourImageClass: ['small', 'small', 'small', 'small'],
      fiveImageClass: ['big', 'small', 'small', 'small', 'small'],
      sixImageClass: ['big', 'small', 'small', 'big', 'small', 'small'],
    };
    switch (imageProps) {
      case imageProps.length === 1:
        imageGrid = '';
        break;
    }
  };
};

ModalImageGrid.propTypes = {
  imageProps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModalImageGrid;
