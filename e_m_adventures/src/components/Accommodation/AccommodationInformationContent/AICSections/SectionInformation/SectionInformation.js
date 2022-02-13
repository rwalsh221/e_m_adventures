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
  const renderSleepCard = (bedroomType, beds, index) => {
    const bedContent = [];
    const bedIcon = [];

    beds.forEach((element) => {
      const bed = element.number > 1 ? 'beds' : 'bed';

      for (let i = 1; i <= element.number; i += 1) {
        bedIcon.push(<ion-icon name="bed-outline" />);
      }

      bedContent.push(
        <span className={classes.bedContent}>
          {element.number} {element.type} {bed}
        </span>
      );
    });

    return (
      <div className={classes.sleepCard}>
        {bedIcon}
        <p>
          <span data-boldfont data-capitalizefont>
            {bedroomType} {index + 1}
          </span>
          <br />
          {bedContent}
        </p>
      </div>
    );
  };

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

  const featuresContent = accommodationFeaturesProps.map((element) => (
    <li key={nanoid()}>
      <p>
        <ion-icon name="sparkles-outline" />
        &nbsp;{element}
      </p>
    </li>
  ));
  const sleepContent = occupancyBedroomsProps.map((element, index) =>
    renderSleepCard(element.bedroomType, element.beds, index)
  );

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
      </div>
      {/* LOCATION FEATURES */}
      <div className={classes.locationFeatures}>
        <h2>What this place offers</h2>
        <ul>{featuresContent}</ul>
        <ShowMoreModalBtn clickHandler={() => showModalProps('features')} />
      </div>
    </section>
  );
};

export default SectionInformation;
