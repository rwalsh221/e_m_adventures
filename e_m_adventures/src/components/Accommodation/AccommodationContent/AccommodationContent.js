import React, { useState, useEffect } from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
// import { Link } from 'react-router-dom';
import AccommodationCard from './AccommodationCard/AccommodationCard';
import Spinner from '../../miniComponents/Spinner/Spinner';
import classes from './AccommodationContent.module.css';

const AccommodationContent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          'https://e-m-adv.herokuapp.com/api/accommodation'
        );
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  });

  const accommodation = [
    {
      id: 'acc0001',
      name: 'Carnforth Forest Lodge',
      shortDescription: <LoremIpsum p={1} avgSentencesPerParagraph={2} />,
      longDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa sed elementum tempus egestas sed sed. Sed velit dignissim sodales ut eu sem integer vitae. Cursus sit amet dictum sit amet justo. Sollicitudin tempor id eu nisl nunc mi ipsum. Turpis egestas integer eget aliquet nibh. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Massa enim nec dui nunc mattis enim ut. Amet est placerat in egestas erat imperdiet. Egestas sed tempus urna et pharetra pharetra massa massa.',
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

  const content = loading ? (
    <div className={classes.spinnerContainer}>
      <Spinner />
    </div>
  ) : (
    <AccommodationCard
      idProps={accommodation[0].id}
      nameProps={accommodation[0].name}
      descriptionProps={accommodation[0].shortDescription}
      priceProps={accommodation[0].basePrice}
    />
  );

  return (
    <main className={classes.accommodationGrid}>
      {/* <button onClick={() => setLoading(false)}>test</button> */}
      <h1 className={classes.accommodationHeading}>
        Find the perfect base for your adventure
      </h1>
      {content}
      {/* <Link to="/accommodationInformation">INFO</Link> */}
    </main>
  );
};

export default AccommodationContent;
