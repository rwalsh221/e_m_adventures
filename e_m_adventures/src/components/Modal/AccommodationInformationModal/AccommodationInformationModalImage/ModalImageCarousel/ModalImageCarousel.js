import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './ModalImageCarousel.module.css';

const ModalImageCarousel = ({
  showCarouselProps,
  initImgProps,
  imgSrcProps,
  accomIdProps,
  imgFileNameArrProps,
}) => {
  const [currentImage, setCurrentImage] = useState(
    imgFileNameArrProps.indexOf(initImgProps)
  );

  const btnForwardHandler = () => {
    const imgPos = currentImage + 1;

    if (imgPos <= imgFileNameArrProps.length - 1) {
      setCurrentImage(imgPos);
    } else {
      setCurrentImage(0);
    }
  };
  const btnBackwardsHandler = () => {
    const imgPos = currentImage - 1;

    if (imgPos >= 1) {
      setCurrentImage(imgPos);
    } else {
      setCurrentImage(imgFileNameArrProps.length - 1);
    }
  };
  return (
    <div className={classes.imageCarousel}>
      <nav className={classes.imageCarouselNav}>
        <div className={classes.modalClose}>
          <button
            type="button"
            className={classes.btnClose}
            onClick={() => showCarouselProps(false)}
          >
            <ion-icon name="close-circle-outline" />
          </button>
        </div>
        <p className={classes.imgNumber}>
          {`${currentImage + 1} / ${imgFileNameArrProps.length}`}
        </p>
        <div className={classes.share}>
          <ion-icon name="share-outline" />
          <p data-boldfont>Share</p>
        </div>
      </nav>
      <div className={classes.imageCarouselContent}>
        <button
          type="button"
          className={classes.btnBack}
          onClick={btnBackwardsHandler}
        >
          <ion-icon name="chevron-back-circle-outline" />
        </button>
        <div>
          <img
            src={imgSrcProps(
              imgFileNameArrProps[currentImage].split('_')[0],
              imgFileNameArrProps[currentImage],
              accomIdProps
            )}
            alt="caravan"
          />
        </div>
        <button
          type="button"
          className={classes.btnForward}
          onClick={btnForwardHandler}
        >
          <ion-icon name="chevron-forward-circle-outline" />
        </button>
      </div>
    </div>
  );
};

ModalImageCarousel.propTypes = {
  showCarouselProps: PropTypes.func.isRequired,
  initImgProps: PropTypes.string.isRequired,
  imgSrcProps: PropTypes.func.isRequired,
  accomIdProps: PropTypes.string.isRequired,
  imgFileNameArrProps: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModalImageCarousel;
