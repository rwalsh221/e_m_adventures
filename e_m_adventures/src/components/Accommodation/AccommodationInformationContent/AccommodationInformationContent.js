import React, { useState } from 'react';
import { useAccommodationContext } from '../../../contexts/AccommodationContext';

import ShowMoreModalBtn from '../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';
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

  // const ionIconRef = { iconBed: <ion-icon name="bed-outline" /> };
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
      <SectionMap
        showModalProps={setShowModalHandler}
        accomCityProps={accommodationFocus.data.accommodationLocation.city}
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
