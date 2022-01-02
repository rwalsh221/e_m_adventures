import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ModalImageCarousel.module.css';

import hero from '../../../../../assets/img/caravan.jpg';

// 1, get clicked image.
// 2, find clicked image in array of all images,
// 3, start carousel at the position in img array
// 4, foward bcak will move along array and rerender

const ModalImageCarousel = ({
  showCarouselProps,
  imgKeysProps,
  imgProps,
  currentImageProps,
}) => {
  const showCarouselHandler = () => {
    showCarouselProps(false);
  };

  // `${process.env.PUBLIC_URL}/img/accommodation/${accomId}/${propKey}/${name}.jpg`;

  const imgSrc = (propKey, name, accomId) => {
    // return array
    const src = `${process.env.PUBLIC_URL}/img/accommodation/${accomId}/${propKey}/${name}.jpg`;
    return src;
  };

  const imgArr = [];

  imgKeysProps.forEach((element) => {
    imgProps[element].img.forEach((element) => imgArr.push(element));
  });

  const initImg = imgArr.findIndex(currentImageProps);

  console.log(imgArr);

  const [currentImage, setCurrentImage] = useState(imgArr[initImg]);

  return (
    <div className={classes.imageCarousel}>
      <nav className={classes.imageCarouselNav}>
        <div className={classes.modalClose}>
          <button
            type="button"
            className={classes.btnClose}
            onClick={showCarouselHandler}
          >
            <ion-icon name="close-circle-outline" />
          </button>
        </div>
        <p className={classes.imgNumber}>1 / 20</p>
        <div className={classes.share}>
          <ion-icon name="share-outline" />
          <p data-boldfont>Share</p>
        </div>
      </nav>
      <div className={classes.imageCarouselContent}>
        <button type="button" className={classes.btnBack}>
          <ion-icon name="chevron-back-circle-outline" />
        </button>
        <div>
          <img src={hero} alt="caravan" />
        </div>
        <button type="button" className={classes.btnForward}>
          <ion-icon name="chevron-forward-circle-outline" />
        </button>
      </div>
    </div>
  );
};

ModalImageCarousel.propTypes = {
  showCarouselProps: PropTypes.func.isRequired,
};

export default ModalImageCarousel;
