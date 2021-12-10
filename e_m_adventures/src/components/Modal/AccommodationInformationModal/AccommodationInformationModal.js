import React from 'react';
import PropTypes from 'prop-types';
import classes from './AccommodationInformationModal.module.css';

import AccommodationInformationModalCancellation from './AccommodationInformationModalCancellation/AccommodationInformationModalCancellation';
import AccommodationInformationModalContent from './AccommodationInformationModalContent/AccommodationInformationModalContent';
import AccommodationInformationModalMap from './AccommodationInformationModalMap/AccommodationInformationModalMap';
import AccommodationInformationModalDescription from './AccommodationInformationModalDescription/AccommodationInformationModalDescription';
import AccommodationInformationModalImage from './AccommodationInformationModalImage/AccommodationInformationModalImage';

// TODO: TEST OBJECTS FOR MODAL. TO BE DELETED
const AccommodationIformationModal = ({
  showModalProps,
  setShowModalParentProps,
}) => {
  const initStyle = showModalProps.showModal ? 'block' : 'none';

  const features = {
    primaryContent: { heading: 'What this place offers' },
    secondaryContent: [
      {
        heading: 'Bathroom',
        additional: [
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
        ],
      },
      {
        heading: 'Bedroom and laundry',
        additional: [
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
        ],
      },
      {
        heading: 'Entertainment',
        additional: [
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
        ],
      },
      {
        heading: 'Family',
        additional: [
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
          'dolor sit amet',
        ],
      },
    ],
  };

  const map = {
    locationDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    gettingAroundDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  const accomDesc = {
    mainDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    accessDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    otherDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };
  // END OF TEST OBJECTS

  const setModalContent = (input) => {
    let content;
    switch (input) {
      case 'cancellation':
        content = <AccommodationInformationModalCancellation />;
        break;
      case 'health':
        content = (
          <AccommodationInformationModalContent
            primaryContent={{
              heading: 'Health & Safety',
              additional: [
                'Committed to e & m&apos;s enhanced cleaning process.',
                `During the COVID-19 pandemic, all hosts and guests must review and follow e & m's social distancing and other COVID-19-related guidelines`,
                'Smoke alarm',
                'Carbon monoxide detector',
              ],
            }}
            secondaryContent={[
              {
                heading: 'You must acknowledge',
                additional: ['You must Climb Stairs'],
              },
            ]}
          />
        );
        break;
      case 'rules':
        content = (
          <AccommodationInformationModalContent
            primaryContent={{
              heading: 'House Rules',
              additional: ['Check-in: 3pm', 'Check-out: 11am'],
            }}
            secondaryContent={[
              {
                heading: 'Additional Rules',
                additional: ['No parties or events'],
              },
            ]}
          />
        );
        break;
      case 'covid':
        content = (
          <AccommodationInformationModalContent
            primaryContent={{
              heading: 'Covid',
              additional: [
                'Committed to e & m&apos;s enhanced cleaning process.',
                `During the COVID-19 pandemic, all hosts and guests must review and follow e & m's social distancing and other COVID-19-related guidelines`,
              ],
            }}
          />
        );
        break;
      case 'contact':
        content = (
          <AccommodationInformationModalContent
            primaryContent={{
              heading: 'Contact us',
              additional: ['Email: em@em.com', 'Phone: 123456789'],
            }}
          />
        );
        break;
      case 'features':
        content = (
          <AccommodationInformationModalContent
            primaryContent={features.primaryContent}
            secondaryContent={features.secondaryContent}
          />
        );
        break;
      case 'map':
        content = (
          <AccommodationInformationModalMap
            contentProps={{
              location: 'Carnforth, United Kingdom',
              locationDescription: map.locationDescription,
              gettingAroundDescription: map.gettingAroundDescription,
            }}
          />
        );
        break;
      case 'accommodationDescription':
        content = (
          <AccommodationInformationModalDescription contentProps={accomDesc} />
        );
        break;
      case 'imageModal':
        content = (
          <AccommodationInformationModalImage
            imageProps={showModalProps.image}
          />
        );
        break;
      default:
        content = null;
    }
    return content;
  };

  const closeModal = (e) => {
    if (e.target.id === 'modalBackground' || e.target.id === 'modalCloseBtn') {
      setShowModalParentProps({ showModal: false, content: '' });
    }
  };

  return (
    <div
      id="modalBackground"
      aria-hidden
      style={{ display: initStyle }}
      className={classes.accomInfoModalBg}
      onClick={(e) => closeModal(e)}
    >
      <div className={classes.accomInfoModalContent}>
        <button
          id="modalCloseBtn"
          type="button"
          onClick={(e) => closeModal(e)}
          className={classes.closeBtn}
        >
          X
        </button>
        {setModalContent(showModalProps.content)}
      </div>
    </div>
  );
};

AccommodationIformationModal.propTypes = {
  showModalProps: PropTypes.objectOf(PropTypes.any).isRequired,
  setShowModalParentProps: PropTypes.func.isRequired,
};

export default AccommodationIformationModal;
