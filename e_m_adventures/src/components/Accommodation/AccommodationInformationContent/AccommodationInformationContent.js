import React, { useState } from 'react';
import { useAccommodationContext } from '../../../contexts/AccommodationContext';

import AccommodationInformationModal from '../../Modal/AccommodationInformationModal/AccommodationInformationModal';
import logoBlack from '../../../assets/img/logo-black.png';
import reviewPortrait from '../../../assets/img/accommodation/outline.png';
import SectionHeading from './AICSections/SectionHeading/SectionHeading';
import SectionImageGrid from './AICSections/SectionImageGrid/SectionImageGrid';
import SectionInformation from './AICSections/SectionInformation/SectionInformation';
import SectionReview from './AICSections/SectionReview/SectionReview';
import SectionMap from './AICSections/SectionMap/SectionMap';
import SectionAboutHost from './AICSections/SectionAboutHost/SectionAboutHost';
import SectionKnow from './AICSections/SectionKnow/SectionKnow';

import classes from './AccommodationInformationContent.module.css';

const AccommodationInformationContent = () => {
  // TODO: ADD ERROR DISPLAY FOR NO DATA
  const { accommodationFocus } = useAccommodationContext();

  const accomIdProps = 'acc0001';
  // document.body.style.overflow = 'hidden';
  const [showModal, setShowModal] = useState({
    showModal: false,
    content: '',
    image: {},
    share: false,
  });

  const setShowModalHandler = (content, imageName, share) => {
    setShowModal({
      showModal: true,
      content,
      image: { imageName, accomId: accomIdProps },
      share,
    });
  };

  const {
    accommodationName,
    accommodationLocation,
    accommodationId,
    accommodationDescription,
    numBathrooms,
    numBedrooms,
    numGuests,
  } = accommodationFocus.data;

  return (
    <main className={classes.main}>
      <AccommodationInformationModal
        showModalProps={showModal}
        setShowModalParentProps={setShowModal}
      />
      {/* HEADING SECTION */}
      <SectionHeading
        accomNameProps={accommodationName}
        accomCityProps={accommodationLocation.city}
      />
      {/* IMAGE GRID SECTION */}
      <SectionImageGrid
        accomIdProps={accommodationId}
        showModalProps={setShowModalHandler}
      />
      {/* ACCOMMODATION INFORMATION SECTION */}
      <SectionInformation
        showModalProps={setShowModalHandler}
        logoProps={logoBlack}
        propertyTypeProps={accommodationLocation.accommodationType}
        propertySettingProps={accommodationLocation.accommodationSetting}
        guestsProps={numGuests}
        bathroomsProps={numBathrooms}
        bedroomsProps={numBedrooms}
        longDescriptionProps={accommodationDescription.longDescription}
      />
      {/* REVIEW SECTION */}
      <SectionReview portraitProps={reviewPortrait} />
      {/* MAP SECTION */}
      <SectionMap
        showModalProps={setShowModalHandler}
        accomCityProps={accommodationLocation.city}
      />
      {/* ABOUT HOST SECTION */}
      <SectionAboutHost
        logoBlackProps={logoBlack}
        showModalProps={setShowModalHandler}
      />
      {/* KNOW SECTION */}
      <SectionKnow showModalProps={setShowModalHandler} />
    </main>
  );
};

export default AccommodationInformationContent;
