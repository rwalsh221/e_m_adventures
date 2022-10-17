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
import AccommodationSearch from './AICSections/AccommodationSearch/AccommodationSearch';
import AccommodationSearchMobile from './AICSections/AccommodationSearchMobile/AccommodationSearchMobile';
import ErrorContent from '../../ErrorContent/ErrorContent';

const AccommodationInformationContent = () => {
  const { accommodationFocus } = useAccommodationContext();

  const accomIdProps = 'acc0001';
  // document.body.style.overflow = 'hidden';
  const [showModal, setShowModal] = useState({
    showModal: false,
    content: '',
    image: {},
    share: false,
  });

  if (accommodationFocus.focusSet === false) {
    return <ErrorContent />;
  }

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
    occupancy,
    accommodationRules,
    basePrice,
  } = accommodationFocus.data;

  const occupancyBedrooms = [
    { bedroomType: 'bedroom', beds: [{ type: 'king', number: 1 }] },
    {
      bedroomType: 'bedroom',
      beds: [
        { type: 'single', number: 2 },
        { type: 'king', number: 1 },
      ],
    },
    { bedroomType: 'common space', beds: [{ type: 'sofa', number: 1 }] },
  ];

  return (
    <main className={classes.main}>
      <AccommodationInformationModal
        showModalProps={showModal}
        setShowModalParentProps={setShowModal}
        latlonProps={accommodationLocation.latlon}
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
        accommodationTypeProps={accommodationLocation.accommodationType}
        accommodationSettingProps={accommodationLocation.accommodationSetting}
        occupancyProps={occupancy}
        longDescriptionProps={accommodationDescription.longDescription}
        accommodationFeaturesProps={accommodationDescription.features}
        starAmenityProps={accommodationDescription.starAmenity}
        sharedAccommodationProps={accommodationDescription.sharedAccommodation}
        occupancyBedroomsProps={occupancyBedrooms}
      />
      {window.screen.width > 500 ? (
        <AccommodationSearch basePriceProps={basePrice} />
      ) : (
        <AccommodationSearchMobile basePriceProps={basePrice} />
      )}

      {/* REVIEW SECTION */}
      <SectionReview portraitProps={reviewPortrait} />
      {/* MAP SECTION */}
      <SectionMap
        showModalProps={setShowModalHandler}
        cityProps={accommodationLocation.city}
        locationDescriptionProps={accommodationLocation.locationDescription}
        countryProps={accommodationLocation.country}
        latlonProps={accommodationLocation.latlon}
      />
      {/* ABOUT HOST SECTION */}
      <SectionAboutHost
        logoBlackProps={logoBlack}
        showModalProps={setShowModalHandler}
      />
      {/* KNOW SECTION */}
      <SectionKnow
        showModalProps={setShowModalHandler}
        checkInProps={accommodationRules.checkIn}
        checkOutProps={accommodationRules.checkOut}
      />
    </main>
  );
};

export default AccommodationInformationContent;
