import React from 'react';
import classes from './ModalImageCarousel.module.css';

import hero from '../../../../../assets/img/caravan.jpg';

const ModalImageCarousel = () => (
  <div className={classes.imageCarousel}>
    <nav className={classes.imageCarouselNav}>
      <div className={classes.modalClose}>
        <button type="button" className={classes.btnClose}>
          X Close
        </button>
      </div>
      <div className={classes.imgNumber}>1 / 20</div>
      <div className={classes.share}>
        <ion-icon name="share-outline" />
        <p data-boldfont>Share</p>
      </div>
    </nav>
    <div>
      <button type="button" className={classes.btnLeft}>
        left
      </button>
      <div>
        <img src={hero} alt="caravan" />
      </div>
      <button type="button" className={classes.btnRight}>
        right
      </button>
    </div>
  </div>
);

export default ModalImageCarousel;
