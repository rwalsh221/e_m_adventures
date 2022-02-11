import { nanoid } from 'nanoid';
import { element } from 'prop-types';
import React from 'react';

import ShowMoreModalBtn from '../../../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';

import classes from './SectionInformation.module.css';

const SectionInformation = ({
  logoProps,
  accommodationTypeProps,
  accommodationSettingProps,
  occupancyProps,
  showModalProps,
  longDescriptionProps,
  accommodationFeaturesProps,
  starAmenityProps,
  sharedAccommodationProps,
  occupancyBedroomsProps,
}) => {
  const sharedAccommodationContent = sharedAccommodationProps ? (
    <li>
      <div>
        <ion-icon name="home-outline" />
        <p data-boldfont>Shared Home</p>
      </div>
      <p>You&apos;ll share the {accommodationTypeProps} with your host</p>
    </li>
  ) : (
    <li>
      <div>
        <ion-icon name="home-outline" />
        <p data-boldfont>Entire Home</p>
      </div>
      <p>You&apos;ll have the {accommodationTypeProps} to yourself</p>
    </li>
  );

  const sleepCard = (element, index) => {
    console.log(element);
    console.log(element.beds[0].number);
    const bed = element.beds[0].number > 1 ? 'beds' : 'bed';

    const bedIcon = [];

    for (let i = 1; i <= element.beds[0].number; i += 1) {
      bedIcon.push(<ion-icon name="bed-outline" />);
    }
    console.log(bedIcon);
    return (
      <div className={classes.sleepCard}>
        {bedIcon}
        <p>
          <span data-boldfont>
            {element.bedroomType} {index + 1}
          </span>
          <br />
          {element.beds.map((element) => (
            <span>
              {element.number} {element.type} {bed}
            </span>
          ))}
        </p>
      </div>
    );
  };

  const sleepContent = occupancyBedroomsProps.map((element, index) =>
    sleepCard(element, index)
  );

  console.log(sleepContent);

  return (
    <section className={classes.sectionAccommodationInfo}>
      <div className={classes.infoHeadingContainer}>
        <div className={classes.infoHeading}>
          <h2>
            <span data-capitalizefont>{accommodationSettingProps} </span>
            <span data-capitalizefont>{accommodationTypeProps} </span>hosted by
            <span data-capitalizefont> e &amp; m</span>
          </h2>
          <ul>
            <li>{occupancyProps.numGuests} guests</li>
            <li>{occupancyProps.numBedrooms} bedroom</li>
            <li>1 bed</li>
            <li>{occupancyProps.numBathrooms} bathroom</li>
          </ul>
        </div>
        <div className={classes.infoHeadingLogoContainer}>
          <img
            src={logoProps}
            alt="e &amp; m logo"
            className={classes.infoHeadingLogo}
          />
        </div>
      </div>
      {/* FEATURES */}
      <div className={classes.accommodationFeatures}>
        <ul>
          {sharedAccommodationContent}
          <li>
            <div>
              <ion-icon name="happy-outline" />
              <p>
                <span data-boldfont>Enhanced Clean</span>
              </p>
            </div>
            <p>
              Covid 5-step enhanced cleaning process
              <span
                aria-hidden
                type="button"
                onClick={() => showModalProps('covid')}
                className={classes.showModal}
              >
                . Show more
              </span>
            </p>
          </li>
          <li>
            <div>
              <ion-icon name="bookmark-outline" />
              <p>
                <span data-boldfont data-capitalizefont>
                  {starAmenityProps}
                </span>
              </p>
            </div>
            <p>Guests often search for this amenity</p>
          </li>
          <li>
            <div>
              <ion-icon name="star-outline" />
              <p>
                <span data-boldfont>Experienced hosts</span>
              </p>
            </div>
            <p>Years of experience welcoming guests</p>
          </li>
        </ul>
      </div>
      {/* DESCRIPTION */}
      <div className={classes.longDescription}>
        <p>{longDescriptionProps}</p>
        <ShowMoreModalBtn
          clickHandler={() => showModalProps('accommodationDescription')}
        />
      </div>
      {/* SLEEP */}
      <div className={classes.sleep}>
        <h2>Where you&apos;ll sleep</h2>
        {sleepContent}
        {/* <div className={classes.sleepCard}>
          <ion-icon name="bed-outline" />
          <p>
            <span data-boldfont>Bedroom 1</span>
            <br />1 king bed
          </p>
        </div>
        <div className={classes.sleepCard}>
          <ion-icon name="bed-outline" />
          <ion-icon name="bed-outline" />
          <p>
            <span data-boldfont>Bedroom 2</span>
            <br />2 single bed
          </p>
        </div>
        <div className={classes.sleepCard}>
          <ion-icon name="bed-outline" />
          <p>
            <span data-boldfont>Living room</span>
            <br />1 sofa bed
          </p>
        </div> */}
      </div>
      {/* LOCATION FEATURES */}
      <div className={classes.locationFeatures}>
        <h2>What this place offers</h2>
        <ul>
          {accommodationFeaturesProps.map((element) => (
            <li key={nanoid()}>
              <p>
                <ion-icon name="sparkles-outline" />
                &nbsp;{element}
              </p>
            </li>
          ))}
        </ul>
        <ShowMoreModalBtn clickHandler={() => showModalProps('features')} />
      </div>
    </section>
  );
};

export default SectionInformation;
