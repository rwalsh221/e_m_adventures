import React, { useState } from 'react';
import classes from './AccommodationInformationContent.module.css';

import ShowMoreModalBtn from '../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';
import AccommodationInformationModal from '../../Modal/AccommodationInformationModal/AccommodationInformationModal';
import MapBoxContainer from '../../miniComponents/MapboxContainer/MapBoxContainer';
import logoBlack from '../../../assets/img/logo-black.png';
import reviewPortrait from '../../../assets/img/accommodation/outline.png';

const AccommodationInformationContent = () => {
  const accomIdProps = 'acc0001';
  // document.body.style.overflow = 'hidden';
  const [showModal, setShowModal] = useState({
    showModal: false,
    content: '',
    image: {},
    share: false,
  });

  // console.log(location.state.message);

  const setShowModalHandler = (content, imageName, share) => {
    setShowModal({
      showModal: true,
      content,
      image: { imageName, accomId: accomIdProps },
      share,
    });
  };

  const ionIconRef = { iconBed: <ion-icon name="bed-outline" /> };
  return (
    <main className={classes.main}>
      <AccommodationInformationModal
        showModalProps={showModal}
        setShowModalParentProps={setShowModal}
      />
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
            aria-hidden
            onClick={() => setShowModalHandler('imageModal', 'hero', true)}
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt="accommodation"
            className={classes.imageGridHero}
          />

          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt="accommodation"
            className={classes.imageGridTc}
          />
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt="accommodation"
            className={classes.imageGridTr}
          />
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt="accommodation"
            className={classes.imageGridBc}
          />
          <img
            src={`img/accommodation/${accomIdProps}/hero.jpg`}
            alt="accommodation"
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
              <p>You&apos;ll have the LOCATIONTYPE to yourself</p>
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
                    setShowModal({
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
          <ShowMoreModalBtn
            clickHandler={() => setShowModalHandler('accommodationDescription')}
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
          <ShowMoreModalBtn
            clickHandler={() => setShowModalHandler('features')}
          />
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
              <img src={reviewPortrait} alt="portrait" />
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
              <img src={reviewPortrait} alt="portrait" />
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
              <img src={reviewPortrait} alt="portrait" />
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
              <img src={reviewPortrait} alt="portrait" />
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
              <img src={reviewPortrait} alt="portrait" />
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
        <h2>Where you&apos;ll be</h2>
        <div className={classes.mapBoxContainer}>
          <MapBoxContainer />
        </div>
        <h3>Carnforth, United Kingdom</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Condimentum lacinia quis vel eros donec ac odio tempor. Mauris rhoncus
          aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque.
          Gravida dictum fusce ut placerat orci nulla. Pellentesque habitant
          morbi tristique senectus et netus. Felis eget velit aliquet sagittis.
          Odio pellentesque diam volutpat commodo sed egestas egestas fringilla.
          Proin fermentum leo vel orci porta non. Bibendum enim facilisis
          gravida neque convallis. Volutpat odio facilisis mauris sit. Netus et
          malesuada fames ac. Eget mi proin sed libero enim. Vel orci porta non
          pulvinar neque laoreet suspendisse. Risus in hendrerit gravida rutrum
          quisque non tellus orci ac. Erat pellentesque adipiscing commodo elit
          at imperdiet.
        </p>
        <ShowMoreModalBtn clickHandler={() => setShowModalHandler('map')} />
      </section>
      {/* ABOUT HOST SECTION */}
      <section className={classes.sectionAboutHost}>
        <div className={classes.aboutHostHeading}>
          <img
            src={logoBlack}
            alt="e & m logo"
            className={classes.aboutHostHeadingLogo}
          />
          <div>
            <h3>Hosted by e &amp; m</h3>
            <p>Planning adventures since 2020</p>
          </div>
        </div>
        <div className={classes.aboutHostContent}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Condimentum lacinia quis vel eros donec ac odio tempor. Mauris
            rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
            pellentesque. Gravida dictum fusce ut placerat orci nulla.
            Pellentesque habitant morbi tristique senectus et netus. Felis eget
            velit aliquet sagittis. Odio pellentesque diam volutpat commodo sed
            egestas egestas fringilla. Proin fermentum leo vel orci porta non.
            Bibendum enim facilisis gravida neque convallis. Volutpat odio
            facilisis mauris sit. Netus et malesuada fames ac. Eget mi proin sed
            libero enim.
          </p>
        </div>
        <div className={classes.aboutHostContent}>
          <h4>During Your Stay</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Condimentum lacinia quis vel eros donec ac odio tempor. Mauris
            rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
            pellentesque. Gravida dictum fusce ut placerat orci nulla.
            Pellentesque habitant morbi tristique senectus et netus.
          </p>
        </div>
        <div className={classes.aboutHostContent}>
          <h4>e &amp; m are superhosts</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Condimentum lacinia quis vel eros donec ac odio tempor. Mauris
            rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar
            pellentesque. Gravida dictum fusce ut placerat orci nulla.
            Pellentesque habitant morbi tristique senectus et netus.
          </p>
        </div>
        <div className={classes.aboutHostInfo}>
          <ul>
            <li>Languages: English, French, German, dutch</li>
            <li>Response Time: within an hour</li>
            <li>Avaliable: 24/7</li>
          </ul>
          <button type="button" onClick={() => setShowModalHandler('contact')}>
            Contact Us
          </button>
          <div className={classes.aboutHostSecurity}>
            <ion-icon name="heart" />
            <p>
              To protect your payment, never transfer money or communicate
              outside of the e &amp; m adventures website or app.
            </p>
          </div>
        </div>
      </section>
      {/* KNOW SECTION */}
      <section className={classes.sectionKnow}>
        <h2>Things to Know</h2>
        <div className={classes.knowContentContainer}>
          <div className={classes.knowContent}>
            <h4>House Rules</h4>
            <ul>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>Check-in: 15:00 - 21:00</p>
              </li>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>Check-out: 11:00</p>
              </li>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>quis nostrud exercitation ullamco</p>
              </li>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>quis nostrud exercitation ullamco</p>
              </li>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>quis nostrud exercitation ullamco</p>
              </li>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>quis nostrud exercitation ullamco</p>
              </li>
            </ul>
            <ShowMoreModalBtn
              clickHandler={() => setShowModalHandler('rules')}
            />
          </div>
          <div className={classes.knowContent}>
            <h4>Health &amp; safety</h4>
            <ul>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>
                  Commited to an enhanced covid-19 cleaning process
                  <span
                    aria-hidden
                    type="button"
                    onClick={() =>
                      setShowModal({
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
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>
                  e &amp; m adventures social distancing and other
                  COVID-19-related guidelines apply
                </p>
              </li>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>quis nostrud exercitation ullamco</p>
              </li>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>quis nostrud exercitation ullamco</p>
              </li>
            </ul>
            <ShowMoreModalBtn
              clickHandler={() => setShowModalHandler('health')}
            />
          </div>
          <div className={classes.knowContent}>
            <h4>Cancellation Policy</h4>
            <ul>
              <li>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>Free cancellation for 48 hours</p>
              </li>
            </ul>
            <ShowMoreModalBtn
              clickHandler={() => setShowModalHandler('cancellation')}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AccommodationInformationContent;
