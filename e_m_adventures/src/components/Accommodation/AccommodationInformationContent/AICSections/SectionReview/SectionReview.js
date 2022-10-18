import React from 'react';
import PropTypes from 'prop-types';
import classes from './SectionReview.module.css';

const SectionReview = ({ portraitProps }) => (
  <section className={classes.sectionReviews}>
    <h2>
      <ion-icon name="star" />
      4.99 <span className={classes.dot} /> 5 reviews
    </h2>
    <div className={classes.reviewCardContainer}>
      <div className={classes.reviewCard}>
        <div className={classes.reviewCardHeading}>
          <img src={portraitProps} alt="portrait" />
          <div className={classes.reviewCardHeading__name}>
            <p data-boldfont>John Matrix</p>
            <p data-lightfont>October 2021</p>
          </div>
        </div>
        <div className={classes.reviewCardContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sed elementum tempus egestas sed sed.
          </p>
        </div>
      </div>
      <div className={classes.reviewCard}>
        <div className={classes.reviewCardHeading}>
          <img src={portraitProps} alt="portrait" />
          <div className={classes.reviewCardHeading__name}>
            <p data-boldfont>John Matrix</p>
            <p data-lightfont>October 2021</p>
          </div>
        </div>
        <div className={classes.reviewCardContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sed elementum tempus egestas sed sed.
          </p>
        </div>
      </div>
      <div className={classes.reviewCard}>
        <div className={classes.reviewCardHeading}>
          <img src={portraitProps} alt="portrait" />
          <div className={classes.reviewCardHeading__name}>
            <p data-boldfont>John Matrix</p>
            <p data-lightfont>October 2021</p>
          </div>
        </div>
        <div className={classes.reviewCardContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sed elementum tempus egestas sed sed.
          </p>
        </div>
      </div>
      <div className={classes.reviewCard}>
        <div className={classes.reviewCardHeading}>
          <img src={portraitProps} alt="portrait" />
          <div className={classes.reviewCardHeading__name}>
            <p data-boldfont>John Matrix</p>
            <p data-lightfont>October 2021</p>
          </div>
        </div>
        <div className={classes.reviewCardContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sed elementum tempus egestas sed sed.
          </p>
        </div>
      </div>
      <div className={classes.reviewCard}>
        <div className={classes.reviewCardHeading}>
          <img src={portraitProps} alt="portrait" />
          <div className={classes.reviewCardHeading__name}>
            <p data-boldfont>John Matrix</p>
            <p data-lightfont>October 2021</p>
          </div>
        </div>
        <div className={classes.reviewCardContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sed elementum tempus egestas sed sed.
          </p>
        </div>
      </div>
    </div>
  </section>
);

SectionReview.propTypes = { portraitProps: PropTypes.string.isRequired };

export default SectionReview;
