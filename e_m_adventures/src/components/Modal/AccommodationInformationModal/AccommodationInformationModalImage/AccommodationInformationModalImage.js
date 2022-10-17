import React, { useState } from 'react';

import { nanoid } from 'nanoid';

import ModalImageCarousel from './ModalImageCarousel/ModalImageCarousel';
import ModalImageGrid from './ModalImageGrid/ModalImageGrid';
import classes from './AccommodationInformationModalImage.module.css';

// import img from '../../../../../public/img/accommodation/acc0001';

const AccommodationInformationModalImage = () => {
  const [showCarousel, setShowCarousel] = useState({
    show: false,
    initImg: null,
  });

  const imgSrc = (propKey, name, accomId) => {
    const src = `${process.env.PUBLIC_URL}/img/accommodation/${accomId}/${propKey}/${name}.jpg`;
    return src;
  };

  const accomId = 'acc0001';
  // TODO: TEST PROPS OBJECT
  const imgProps = {
    kitchen: {
      heading: 'kitchen',
      img: ['kitchen_0', 'kitchen_1', 'kitchen_2', 'kitchen_3'],
    },
    living: {
      heading: 'living room',
      img: [
        'living_0',
        'living_1',
        'living_2',
        'living_3',
        'living_4',
        'living_5',
      ],
    },
    exterior: {
      heading: 'exterior',
      img: ['exterior_0', 'exterior_1', 'exterior_2'],
    },
    bathroom: {
      heading: 'bathroom',
      img: ['bathroom_0', 'bathroom_1'],
    },
    additional: {
      heading: 'additional',
      img: [
        'additional_0',
        'additional_1',
        'additional_2',
        'additional_3',
        'additional_4',
      ],
    },
  };

  const imgPropsKeys = Object.keys(imgProps);

  const imgFileNameArr = [];
  imgPropsKeys.forEach((keyElement) => {
    imgProps[keyElement].img.forEach((imgElement) => {
      imgFileNameArr.push(imgElement);
    });
  });

  const navContent = imgPropsKeys.map((element) => (
    <div
      key={nanoid()}
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
    <div key={nanoid()} className={classes.modalImageCard} id={element}>
      <h3 data-boldfont>{imgProps[element].heading}</h3>
      <ModalImageGrid
        imageProps={imgProps[element]}
        accomIdProps={accomId}
        showCarouselProps={setShowCarousel}
        imgSrcProps={imgSrc}
        imgKeyProps={element}
      />
    </div>
  ));

  return (
    <div className={classes.modalImageContainer}>
      {showCarousel.show && (
        <ModalImageCarousel
          showCarouselProps={setShowCarousel}
          initImgProps={showCarousel.initImg}
          imgSrcProps={imgSrc}
          accomIdProps={accomId}
          imgFileNameArrProps={imgFileNameArr}
        />
      )}
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

AccommodationInformationModalImage.propTypes = {};

export default AccommodationInformationModalImage;
