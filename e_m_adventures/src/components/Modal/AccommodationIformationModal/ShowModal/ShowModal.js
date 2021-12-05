import React from 'react';
import PropTypes from 'prop-types';
import classes from './ShowModal.module.css';

import ShowMoreModalCancellation from './ModalContent/ShowMoreModalCancellation/ShowMoreModalCancellation';
import ModalContent from './ModalContent/ModelContent';

const ShowModal = ({ showModalProps, setShowModalParentProps }) => {
  const initStyle = showModalProps.showModal ? 'block' : 'none';

  const setModalContent = (input) => {
    let content;
    switch (input) {
      case 'cancellation':
        content = <ShowMoreModalCancellation />;
        break;
      case 'health':
        content = (
          <ModalContent
            primaryContent={{
              heading: 'Health & Safety',
              additional: [
                'Committed to e & m&apos;s enhanced cleaning process.',
                "During the COVID-19 pandemic, all hosts and guests must review and follow e & m's social distancing and other COVID-19-related guidelines",
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
          <ModalContent
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
          <ModalContent
            primaryContent={{
              heading: 'Covid',
              additional: [
                'Committed to e & m&apos;s enhanced cleaning process.',
                "During the COVID-19 pandemic, all hosts and guests must review and follow e & m's social distancing and other COVID-19-related guidelines",
              ],
            }}
          />
        );
        break;
      case 'contact':
        content = (
          <ModalContent
            primaryContent={{
              heading: 'Contact us',
              additional: ['Email: em@em.com', 'Phone: 123456789'],
            }}
          />
        );
        break;
      default:
        content = null;
    }
    return content;
  };

  const closeModal = () => {
    setShowModalParentProps({ showModal: false, content: '' });
  };

  return (
    <div
      aria-hidden
      style={{ display: initStyle }}
      className={classes.showMoreModalBg}
      onClick={closeModal}
    >
      <div className={classes.showMoreModalContent}>
        <button type="button" onClick={closeModal} className={classes.closeBtn}>
          X
        </button>
        {setModalContent(showModalProps.content)}
      </div>
    </div>
  );
};

ShowModal.propTypes = {
  showModalProps: PropTypes.objectOf(PropTypes.any).isRequired,
  setShowModalParentProps: PropTypes.func.isRequired,
};

export default ShowModal;
