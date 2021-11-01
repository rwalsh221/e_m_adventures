import React from 'react';
import classes from './AccommodationInformationContent.module.css';

import logoBlack from '../../../assets/img/logo-black.png';

const AccommodationInformationContent = () => {
  return (
    <main>
      {/* HEADING SECTION */}
      <section className={classes.sectionHeading}>
        <h1 className={classes.mainHeading}>Accommodation Name</h1>
        <ul className={classes.headingInformaion}>
          <li>
            <ion-icon name="star-outline" />
            4.99 (100 reviews)
          </li>
          <li>
            <ion-icon name="location-outline" />
            City, Country
          </li>
          <li>
            <ion-icon name="share-outline" />
            Share
          </li>
        </ul>
      </section>
      {/* IMAGE GRID SECTION */}
      <section className={classes.sectionImageGrid}></section>
      {/* ACCOMMODATION INFORMATION SECTION */}
      <section className={classes.sectionAccommodationInfo}>
        <div className={classes.infoHeading}>
          <h2>Propety type hosted by e &amp; m</h2>
          <img
            src={logoBlack}
            alt={'e & m logo'}
            className={classes.imgLogo}
          ></img>
          <ul>
            <li>2 guests</li>
            <li>1 bedroom</li>
            <li>1 bed</li>
            <li>1 bathroom</li>
          </ul>
        </div>
        {/* FEATURES */}
        <div className={classes.accommodationFeatures}>
          <ul>
            <li>
              <ion-icon name="home-outline" />
              <p>
                <span className={classes.bold}>Entire Home</span>
                <br />
                You'll have the LOCATIONTYPE to yourself
              </p>
            </li>
            <li>
              <ion-icon name="happy-outline" />
              <p>
                <span className={classes.bold}>Enhanced Clean</span>
                <br />
                Covid 5-step enhanced cleaning process
              </p>
            </li>
            <li>
              <ion-icon name="bookmark-outline" />
              <p>
                <span className={classes.bold}>Toilet</span>
                <br />
                Guests often search for this amenity
              </p>
            </li>
            <li>
              <ion-icon name="star-outline" />
              <p>
                <span className={classes.bold}>Experienced hosts</span>
                <br />
                Years of experience welcoming guests
              </p>
            </li>
          </ul>
        </div>
        {/* DESCRIPTION */}
        <div className={classes.longDescription}>
          <p>LONG DESCRIPTION</p>
        </div>
        {/* SLEEP */}
        <div className={classes.sleep}>
          <h2>Where you'll sleep</h2>
          <div className={classes.sleepCard}>
            <ion-icon name="bed-outline" />
            <p>
              <span className={classes.bold}>Bedroom</span>
              <br />1 king bed
            </p>
          </div>
        </div>
        {/* LOCATION FEATURES */}
        <div className={classes.locationFeatures}>
          <h2>What this place offers</h2>
          <ul>
            <li>
              <ion-icon name="leaf-outline" /> Forest view
            </li>
            <li>
              <ion-icon name="pizza-outline" /> Kitchen
            </li>
            <li>
              <ion-icon name="car-sport-outline" /> Free Parking
            </li>
            <li>
              <ion-icon name="home-outline" /> Patio or balcony
            </li>
          </ul>
        </div>
      </section>
      {/* REVIEW SECTION */}
      <section className={classes.sectionReviews}>
        <h2>
          <ion-icon name="star-outline" /> 2 reviews
        </h2>
        <p>GENERTAE REIEVWS FROM PROPS MAX 5</p>
      </section>
      {/* MAP SECTION */}
      <section className={classes.sectionMap}>
        <h2>Where you'll be</h2>
        {/* ADD MAPBOX */}
        <h3>city,country</h3>
        <p>city description</p>
      </section>
    </main>
  );
};

export default AccommodationInformationContent;
