import React, { useState } from 'react';
import { useAccommodationContext } from '../../../contexts/AccommodationContext';

import ShowMoreModalBtn from '../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';
import AccommodationInformationModal from '../../Modal/AccommodationInformationModal/AccommodationInformationModal';
import MapBoxContainer from '../../miniComponents/MapboxContainer/MapBoxContainer';
import logoBlack from '../../../assets/img/logo-black.png';
import reviewPortrait from '../../../assets/img/accommodation/outline.png';
import SectionHeading from './AICSections/SectionHeading/SectionHeading';
import SectionImageGrid from './AICSections/SectionImageGrid/SectionImageGrid';
import SectionInformation from './AICSections/SectionInformation/SectionInformation';
import SectionReview from './AICSections/SectionReview/SectionReview';

import classes from './AccommodationInformationContent.module.css';

const AccommodationInformationContent = () => {
  const { accommodationFocus } = useAccommodationContext();

  console.log(accommodationFocus.data);

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
      <SectionHeading
        accomNameProps={accommodationFocus.data.accommodationName}
        accomCityProps={accommodationFocus.data.accommodationLocation.city}
      />
      {/* IMAGE GRID SECTION */}
      <SectionImageGrid
        accomIdProps={accommodationFocus.data.accommodationId}
        showModalProps={setShowModalHandler}
      />
      {/* ACCOMMODATION INFORMATION SECTION */}
      <SectionInformation
        showModalProps={setShowModalHandler}
        logoProps={logoBlack}
        propertyTypeProps={
          accommodationFocus.data.accommodationLocation.accommodationType
        }
        propertySettingProps={
          accommodationFocus.data.accommodationLocation.accommodationSetting
        }
        guestsProps={accommodationFocus.data.numGuests}
        bathroomsProps={accommodationFocus.data.numBathrooms}
        bedroomsProps={accommodationFocus.data.numBedrooms}
        longDescriptionProps={
          accommodationFocus.data.accommodationDescription.longDescription
        }
      />
      {/* REVIEW SECTION */}
      <SectionReview portraitProps={reviewPortrait} />
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
