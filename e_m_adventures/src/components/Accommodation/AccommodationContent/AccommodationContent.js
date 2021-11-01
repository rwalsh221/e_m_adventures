import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import { Link } from 'react-router-dom';
import classes from './AccommodationContent.module.css';

// import * from '../../../assets/img/accommodation/acc0001/hero.jpg'

const AccommodationContent = () => {
  const accommodation = [
    {
      id: 'acc0001',
      name: 'Carnforth Forest Lodge',
      shortDescription: <LoremIpsum p={1} avgSentencesPerParagraph={2} />,
      longDescription: 'blah blah blah blah',
      city: 'Carnforth',
      accommodationType: 'lodge',
      accommodationSetting: 'forest',
      guests: '4',
      bedrooms: 2,
      bathrooms: 2,
      location: { long: 2222, lat: 2222 },
      basePrice: 140,
      reviews: {
        date: { month: 'October', year: 2021 },
        name: 'John Smith',
        reviewContent: 'blah blah blah blah',
      },
    },
  ];

  return (
    <main className={classes.accommodationGrid}>
      <h1 className={classes.accommodationHeading}>
        Find the perfect base for your adventure
      </h1>
      <Link to={'/accommodationInformation'}>INFO</Link>
      <div
        className={classes.accommodationCard}
        onClick={() => console.log('clclclclclclcc')}
      >
        <h2 className={classes.accommodationCard__heading}>
          {accommodation[0].name}
        </h2>
        <img
          className={classes.accommodationCard__img}
          src={`img/accommodation/${accommodation[0].id}/hero.jpg`}
          alt={accommodation[0].name}
        ></img>
        <p className={classes.accommodationCard__description}>
          {accommodation[0].shortDescription}
        </p>
        <p className={classes.accommodationCard__location}>
          {accommodation[0].city}
        </p>
        <p className={classes.accommodationCard__price}>
          {`£${accommodation[0].basePrice} / night`}
        </p>
      </div>
      <div className={classes.accommodationCard}>
        <h2 className={classes.accommodationCard__heading}>
          {accommodation[0].name}
        </h2>
        <img
          className={classes.accommodationCard__img}
          src={`img/accommodation/${accommodation[0].id}/hero.jpg`}
          alt={accommodation[0].name}
        ></img>
        <p className={classes.accommodationCard__description}>
          {accommodation[0].shortDescription}
        </p>
        <p className={classes.accommodationCard__location}>
          {accommodation[0].city}
        </p>
        <p className={classes.accommodationCard__price}>
          {`£${accommodation[0].basePrice} / night`}
        </p>
      </div>
      <div
        className={classes.accommodationCard}
        onClick={() => console.log('clclclclclclcc')}
      >
        <h2 className={classes.accommodationCard__heading}>
          {accommodation[0].name}
        </h2>
        <img
          className={classes.accommodationCard__img}
          src={`img/accommodation/${accommodation[0].id}/hero.jpg`}
          alt={accommodation[0].name}
        ></img>
        <p className={classes.accommodationCard__description}>
          {accommodation[0].shortDescription}
        </p>
        <p className={classes.accommodationCard__location}>
          {accommodation[0].city}
        </p>
        <p className={classes.accommodationCard__price}>
          {`£${accommodation[0].basePrice} / night`}
        </p>
      </div>
      <div className={classes.accommodationCard}>
        <h2 className={classes.accommodationCard__heading}>
          {accommodation[0].name}
        </h2>
        <img
          className={classes.accommodationCard__img}
          src={`img/accommodation/${accommodation[0].id}/hero.jpg`}
          alt={accommodation[0].name}
        ></img>
        <p className={classes.accommodationCard__description}>
          {accommodation[0].shortDescription}
        </p>
        <p className={classes.accommodationCard__location}>
          {accommodation[0].city}
        </p>
        <p className={classes.accommodationCard__price}>
          {`£${accommodation[0].basePrice} / night`}
        </p>
      </div>
    </main>
  );
};

export default AccommodationContent;
