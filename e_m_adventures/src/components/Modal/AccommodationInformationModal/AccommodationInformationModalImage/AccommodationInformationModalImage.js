import React, { useState } from 'react';
import PropTypes, { element } from 'prop-types';

import ModalImageGrid from './ModalImageGrid/ModalImageGrid';
import classes from './AccommodationInformationModalImage.module.css';

// import img from '../../../../../public/img/accommodation/acc0001';

const AccommodationInformationModalImage = ({ imageProps }) => {
  const imgSrc = (propKey, name, accomId) => {
    // return array
    const src = `${process.env.PUBLIC_URL}/img/accommodation/${accomId}/${propKey}/${name}.jpg`;
    return src;
  };

  const accomId = 'acc0001';
  // TODO: TEST PROPS OBJECT
  const imgProps = {
    kitchen: {
      key: 'kitchen',
      heading: 'kitchen',
      img: ['kitchen_1', 'kitchen_1', 'kitchen_1', 'kitchen_1'],
    },
    living: {
      key: 'living',
      heading: 'living room',
      img: [
        'living_1',
        'living_1',
        'living_1',
        'living_1',
        'living_1',
        'living_1',
      ],
    },
    exterior: {
      key: 'exterior',
      heading: 'exterior',
      img: ['exterior_1', 'exterior_1', 'exterior_1'],
    },
    bathroom: {
      key: 'bathroom',
      heading: 'bathroom',
      img: ['bathroom_1', 'bathroom_1'],
    },
    additional: {
      key: 'additional',
      heading: 'additional',
      img: [
        'additional_1',
        'additional_1',
        'additional_1',
        'additional_1',
        'additional_1',
      ],
    },
  };

  // const imgKeys = Object.keys(imgProps);

  // 1 take imput obj from api
  // 2 get keys and forEach to generate card
  // 3 pass imgSrc array into helper function to generate img grid
  // 4 use helper function with switch that returns a grid layout depending on number of imgSrc inputs
  const imgPropsKeys = Object.keys(imgProps);
  const navContent = imgPropsKeys.map((element) => (
    <div
      aria-hidden
      className={classes.modalImageNavCard}
      onClick={() =>
        window.location.replace(`/accommodationInformation#${element}`)
      }
    >
      <img
        src={imgSrc(element, imgProps[element].img[0], accomId)}
        alt="img nav"
      />
      <p>{imgProps[element].heading}</p>
    </div>
  ));

  const imageCardContent = imgPropsKeys.map((element) => (
    <div className={classes.modalImageCard} id={element}>
      <h3 data-boldfont>{imgProps[element].heading}</h3>
      <ModalImageGrid imageProps={imgProps[element]} accomIdProps={accomId} />
    </div>
  ));

  return (
    <div className={classes.modalImageContainer}>
      <div className={classes.modalImageContent}>
        <div className={classes.modalImageOverview}>
          <h2>Property Overview</h2>
          <nav className={classes.modalImageNav}>{navContent}</nav>
        </div>
        <div className={classes.modalImageCardSection}>{imageCardContent}</div>
      </div>
    </div>
  );
};

AccommodationInformationModalImage.propTypes = {
  imageProps: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AccommodationInformationModalImage;
