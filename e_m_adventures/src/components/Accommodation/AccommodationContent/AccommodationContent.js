import React from 'react';

import AccommodationCard from './AccommodationCard/AccommodationCard';
import Spinner from '../../miniComponents/Spinner/Spinner';
import classes from './AccommodationContent.module.css';
import { useAccommodationContext } from '../../../contexts/AccommodationContext';

const AccommodationContent = () => {
  const { getAccommodation, accommodationFocusHandler } =
    useAccommodationContext();

  const content = getAccommodation.loading ? (
    <div className={classes.spinnerContainer}>
      <Spinner />
    </div>
  ) : (
    getAccommodation.data.map((data) => (
      <AccommodationCard
        key={data.accommodationId}
        idProps={data.accommodationId}
        nameProps={data.accommodationName}
        descriptionProps={data.accommodationDescription.shortDescription}
        cityProps={data.accommodationLocation.city}
        priceProps={data.basePrice}
      />
    ))
  );

  const test = () => {
    if (!getAccommodation.loading) accommodationFocusHandler('acc0001');
  };

  return (
    <main className={classes.accommodationGrid}>
      <h1 className={classes.accommodationHeading}>
        Find the perfect base for your adventure
      </h1>
      <button onClick={test}></button>
      {content}
    </main>
  );
};

export default AccommodationContent;

// const accommodation = [
//   {
//     id: 'acc0001',
//     name: 'Carnforth Forest Lodge',
//     shortDescription: <LoremIpsum p={1} avgSentencesPerParagraph={2} />,
//     longDescription:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed. Sed velit dignissim sodales ut eu sem integer vitae. Cursus sit amet dictum sit amet justo. Sollicitudin tempor id eu nisl nunc mi ipsum. Turpis egestas integer eget aliquet nibh. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Massa enim nec dui nunc mattis enim ut. Amet est placerat in egestas erat imperdiet. Egestas sed tempus urna et pharetra pharetra massa massa.',
//     city: 'Carnforth',
//     accommodationType: 'lodge',
//     accommodationSetting: 'forest',
//     guests: '4',
//     bedrooms: 2,
//     bathrooms: 2,
//     location: { long: 2222, lat: 2222 },
//     basePrice: 140,
//     reviews: {
//       date: { month: 'October', year: 2021 },
//       name: 'John Smith',
//       reviewContent: 'blah blah blah blah',
//     },
//   },
// ];
