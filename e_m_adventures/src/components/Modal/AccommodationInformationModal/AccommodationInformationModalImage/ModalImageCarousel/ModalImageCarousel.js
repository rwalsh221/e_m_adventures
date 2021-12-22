import React from 'react';
import classes from './ModalImageCarousel.module.css';

import hero from '../../../../../assets/img/caravan.jpg';

const ModalImageCarousel = ({ showCarousel }) => {
  const showCarouselHandler = () => {
    showCarousel(false);
  };
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

export default ModalImageCarousel;
