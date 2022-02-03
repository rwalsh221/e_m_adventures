import React from 'react';

import ShowMoreModalBtn from '../../../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';

import classes from './SectionInformation.module.css';

const SectionInformation = ({
  logoProps,
  propertyTypeProps,
  propertySettingProps,
  guestsProps,
  bathroomsProps,
  bedroomsProps,
  showModalProps,
  longDescriptionProps,
}) => (
  <section className={classes.sectionAccommodationInfo}>
    <div className={classes.infoHeadingContainer}>
      <div className={classes.infoHeading}>
        <h2>
          {propertySettingProps} {propertyTypeProps} hosted by e &amp; m
        </h2>
        <ul>
          <li>{guestsProps} guests</li>
          <li>{bedroomsProps} bedroom</li>
          <li>1 bed</li>
          <li>{bathroomsProps} bathroom</li>
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
        <li>
          <div>
            <ion-icon name="home-outline" />
            <p className={classes.bold}>Entire Home</p>
          </div>
          <p>You&apos;ll have the {propertyTypeProps} to yourself</p>
        </li>
        <li>
          <div>
            <ion-icon name="happy-outline" />
            <p>
              <span className={classes.bold}>Enhanced Clean</span>
            </p>
          </div>
          <p>
            Covid 5-step enhanced cleaning process
            <span
              aria-hidden
              type="button"
              onClick={() =>
                showModalProps({
                  showModal: true,
                  content: 'covid',
                })
              }
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
              <span className={classes.bold}>Toilet</span>
            </p>
          </div>
          <p>Guests often search for this amenity</p>
        </li>
        <li>
          <div>
            <ion-icon name="star-outline" />
            <p>
              <span className={classes.bold}>Experienced hosts</span>
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
      <div className={classes.sleepCard}>
        <ion-icon name="bed-outline" />
        <p>
          <span className={classes.bold}>Bedroom 1</span>
          <br />1 king bed
        </p>
      </div>
      <div className={classes.sleepCard}>
        <ion-icon name="bed-outline" />
        <ion-icon name="bed-outline" />
        <p>
          <span className={classes.bold}>Bedroom 2</span>
          <br />2 single bed
        </p>
      </div>
      <div className={classes.sleepCard}>
        <ion-icon name="bed-outline" />
        <p>
          <span className={classes.bold}>Living room</span>
          <br />1 sofa bed
        </p>
      </div>
    </div>
    {/* LOCATION FEATURES */}
    <div className={classes.locationFeatures}>
      <h2>What this place offers</h2>
      <ul>
        <li>
          <p>
            <ion-icon name="leaf-outline" /> Forest view
          </p>
        </li>
        <li>
          <p>
            <ion-icon name="pizza-outline" /> Kitchen
          </p>
        </li>
        <li>
          <p>
            <ion-icon name="car-sport-outline" /> Free Parking
          </p>
        </li>
        <li>
          <p>
            <ion-icon name="home-outline" /> Patio or balcony
          </p>
        </li>
      </ul>
      <ShowMoreModalBtn clickHandler={() => showModalProps('features')} />
    </div>
  </section>
);

export default SectionInformation;
