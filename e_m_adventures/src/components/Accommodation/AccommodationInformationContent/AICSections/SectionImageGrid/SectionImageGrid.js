import React from 'react';
import PropTypes from 'prop-types';
import classes from './SectionImageGrid.module.css';

const SectionImageGrid = ({ accomIdProps, showModalProps }) => (
  <section className={classes.sectionImageGrid}>
    <div className={classes.imageGrid}>
      <img
        aria-hidden
        onClick={() => showModalProps('imageModal', 'hero', true)}
        src={`img/accommodation/${accomIdProps}/hero.jpg`}
        alt="accommodation"
        className={classes.imageGridHero}
      />

      <img
        src={`img/accommodation/${accomIdProps}/hero.jpg`}
        alt="accommodation"
        className={classes.imageGridTc}
      />
      <img
        src={`img/accommodation/${accomIdProps}/hero.jpg`}
        alt="accommodation"
        className={classes.imageGridTr}
      />
      <img
        src={`img/accommodation/${accomIdProps}/hero.jpg`}
        alt="accommodation"
        className={classes.imageGridBc}
      />
      <img
        src={`img/accommodation/${accomIdProps}/hero.jpg`}
        alt="accommodation"
        className={classes.imageGridBr}
      />
    </div>
  </section>
);

SectionImageGrid.propTypes = {
  accomIdProps: PropTypes.string.isRequired,
  showModalProps: PropTypes.func.isRequired,
};

export default SectionImageGrid;
