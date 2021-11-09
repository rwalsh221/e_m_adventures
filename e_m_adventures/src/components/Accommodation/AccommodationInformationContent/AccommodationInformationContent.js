import React from 'react';
import classes from './AccommodationInformationContent.module.css';

import MapBoxContainer from '../../miniComponents/MapboxContainer/MapBoxContainer';
import logoBlack from '../../../assets/img/logo-black.png';
import reviewPortrait from '../../../assets/img/accommodation/outline.png';

const AccommodationInformationContent = () => {
  const accomIdProps = 'acc0001';

  const ionIconRef = { iconBed: <ion-icon name="bed-outline" /> };
  return (
    <main className={classes.main}>
      {/* HEADING SECTION */}
      <section className={classes.sectionHeading}>
        <h1 className={classes.mainHeading}>Accommodation Name</h1>
        <ul className={classes.headingInformation}>
          <li>
            <ion-icon name="star" />
            4.99 (100 reviews)
          </li>
          <li>
            <ion-icon name="location" />
            City, Country
          </li>
          <li>
            <ion-icon name="share-outline" />
            Share
          </li>
        </ul>
      </section>
      {/* IMAGE GRID SECTION */}
      <section className={classes.sectionImageGrid}>
        <div className={classes.imageGrid}>
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt={'accommodation'}
            className={classes.imageGridHero}
          />
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt={'accommodation'}
            className={classes.imageGridTc}
          />
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt={'accommodation'}
            className={classes.imageGridTr}
          />
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt={'accommodation'}
            className={classes.imageGridBc}
          />
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt={'accommodation'}
            className={classes.imageGridBr}
          />
        </div>
      </section>
      {/* ACCOMMODATION INFORMATION SECTION */}
      <section className={classes.sectionAccommodationInfo}>
        <div className={classes.infoHeadingContainer}>
          <div className={classes.infoHeading}>
            <h2>Propety type hosted by e &amp; m</h2>

            <ul>
              <li>2 guests</li>
              <li>1 bedroom</li>
              <li>1 bed</li>
              <li>1 bathroom</li>
            </ul>
          </div>
          <div className={classes.infoHeadingLogoContainer}>
            <img
              src={logoBlack}
              alt={'e & m logo'}
              className={classes.infoHeadingLogo}
            ></img>
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
              <p>You'll have the LOCATIONTYPE to yourself</p>
            </li>
            <li>
              <div>
                <ion-icon name="happy-outline" />
                <p>
                  <span className={classes.bold}>Enhanced Clean</span>
                </p>
              </div>
              <p>Covid 5-step enhanced cleaning process</p>
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa
            sed elementum tempus egestas sed sed. Sed velit dignissim sodales ut
            eu sem integer vitae. Cursus sit amet dictum sit amet justo.
            Sollicitudin tempor id eu nisl nunc mi ipsum. Turpis egestas integer
            eget aliquet nibh. Elit ut aliquam purus sit amet luctus venenatis
            lectus magna. Massa enim nec dui nunc mattis enim ut. Amet est
            placerat in egestas erat imperdiet. Egestas sed tempus urna et
            pharetra pharetra massa massa.
          </p>
        </div>
        {/* SLEEP */}
        <div className={classes.sleep}>
          <h2>Where you'll sleep</h2>
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
            {ionIconRef.iconBed}
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
        </div>
      </section>
      {/* REVIEW SECTION */}
      <section className={classes.sectionReviews}>
        <h2>
          <ion-icon name="star" />
          4.99 <span className={classes.dot} /> 5 reviews
        </h2>
        <div className={classes.reviewCardContainer}>
          <div className={classes.reviewCard}>
            <div className={classes.reviewCardHeading}>
              <img src={reviewPortrait} alt={'portrait'}></img>
              <div className={classes.reviewCardHeading__name}>
                <p className={classes.bold}>John Matrix</p>
                <p className={classes.lightText}>October 2021</p>
              </div>
            </div>
            <div className={classes.reviewCardContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa sed elementum tempus egestas sed sed.
              </p>
            </div>
          </div>
          <div className={classes.reviewCard}>
            <div className={classes.reviewCardHeading}>
              <img src={reviewPortrait} alt={'portrait'}></img>
              <div className={classes.reviewCardHeading__name}>
                <p className={classes.bold}>John Matrix</p>
                <p className={classes.lightText}>October 2021</p>
              </div>
            </div>
            <div className={classes.reviewCardContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa sed elementum tempus egestas sed sed.
              </p>
            </div>
          </div>
          <div className={classes.reviewCard}>
            <div className={classes.reviewCardHeading}>
              <img src={reviewPortrait} alt={'portrait'}></img>
              <div className={classes.reviewCardHeading__name}>
                <p className={classes.bold}>John Matrix</p>
                <p className={classes.lightText}>October 2021</p>
              </div>
            </div>
            <div className={classes.reviewCardContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa sed elementum tempus egestas sed sed.
              </p>
            </div>
          </div>
          <div className={classes.reviewCard}>
            <div className={classes.reviewCardHeading}>
              <img src={reviewPortrait} alt={'portrait'}></img>
              <div className={classes.reviewCardHeading__name}>
                <p className={classes.bold}>John Matrix</p>
                <p className={classes.lightText}>October 2021</p>
              </div>
            </div>
            <div className={classes.reviewCardContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa sed elementum tempus egestas sed sed.
              </p>
            </div>
          </div>
          <div className={classes.reviewCard}>
            <div className={classes.reviewCardHeading}>
              <img src={reviewPortrait} alt={'portrait'}></img>
              <div className={classes.reviewCardHeading__name}>
                <p className={classes.bold}>John Matrix</p>
                <p className={classes.lightText}>October 2021</p>
              </div>
            </div>
            <div className={classes.reviewCardContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Massa sed elementum tempus egestas sed sed.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* MAP SECTION */}
      <section className={classes.sectionMap}>
        <h2>Where you'll be</h2>
        <MapBoxContainer />
        <h3>city,country</h3>
        <p>city description</p>
      </section>
    </main>
  );
};

export default AccommodationInformationContent;
