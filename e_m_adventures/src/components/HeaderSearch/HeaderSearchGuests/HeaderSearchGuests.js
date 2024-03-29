import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './HeaderSearchGuests.module.css';

import useClickOutsideCloseHeader from '../../../hooks/useClickOutsideClose';

const HeaderSearchGuests = ({
  selectedGuestsProps,
  setSelectedGuestsProps,
  showMenuProps,
  setShowMenuProps,
}) => {
  const headerSearchGuestsOpen = useRef(null);

  useClickOutsideCloseHeader(
    'guests',
    headerSearchGuestsOpen,
    showMenuProps,
    setShowMenuProps
  );

  const addGuestsHandler = (guestType) => {
    const selectedGuestsPropsCopy = { ...selectedGuestsProps };

    selectedGuestsPropsCopy[guestType] += 1;

    setSelectedGuestsProps({
      ...selectedGuestsPropsCopy,
    });
  };

  const subtractGuestsHandler = (guestType) => {
    const selectedGuestsPropsCopy = { ...selectedGuestsProps };

    selectedGuestsPropsCopy[guestType] -= 1;

    setSelectedGuestsProps({
      ...selectedGuestsPropsCopy,
    });
  };
  return (
    <div className={classes.headerSearchGuests} ref={headerSearchGuestsOpen}>
      <div className={classes.guestCard}>
        <div className={classes.guestType}>
          <p data-boldfont>Adults</p>
          <p data-lightfont>Ages 13 or above</p>
        </div>
        <div className={classes.counterContainer}>
          <button
            type="button"
            className={classes.btnCounter}
            disabled={selectedGuestsProps.adults === 0}
            onClick={() => {
              subtractGuestsHandler('adults');
            }}
          >
            &ndash;
          </button>
          <p>{selectedGuestsProps.adults}</p>
          <button
            type="button"
            className={classes.btnCounter}
            onClick={() => {
              addGuestsHandler('adults');
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.guestCard}>
        <div className={classes.guestType}>
          <p data-boldfont>Children</p>
          <p data-lightfont>2 - 12</p>
        </div>
        <div className={classes.counterContainer}>
          <button
            type="button"
            className={classes.btnCounter}
            disabled={selectedGuestsProps.children === 0}
            onClick={() => {
              subtractGuestsHandler('children');
            }}
          >
            &ndash;
          </button>
          <p>{selectedGuestsProps.children}</p>
          <button
            type="button"
            className={classes.btnCounter}
            onClick={() => {
              addGuestsHandler('children');
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.guestCard}>
        <div className={classes.guestType}>
          <p data-boldfont>Infants</p>
          <p data-lightfont>Under 2</p>
        </div>
        <div className={classes.counterContainer}>
          <button
            type="button"
            className={classes.btnCounter}
            disabled={selectedGuestsProps.infants === 0}
            onClick={() => {
              subtractGuestsHandler('infants');
            }}
          >
            &ndash;
          </button>
          <p>{selectedGuestsProps.infants}</p>
          <button
            type="button"
            className={classes.btnCounter}
            onClick={() => {
              addGuestsHandler('infants');
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className={classes.guestCard}>
        <div className={classes.guestType}>
          <p data-boldfont>Pets</p>
        </div>
        <div className={classes.counterContainer}>
          <button
            type="button"
            className={classes.btnCounter}
            disabled={selectedGuestsProps.pets === 0}
            onClick={() => {
              subtractGuestsHandler('pets');
            }}
          >
            &ndash;
          </button>
          <p>{selectedGuestsProps.pets}</p>
          <button
            type="button"
            className={classes.btnCounter}
            onClick={() => {
              addGuestsHandler('pets');
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearchGuests;

HeaderSearchGuests.propTypes = {
  selectedGuestsProps: PropTypes.objectOf(PropTypes.any).isRequired,
  setSelectedGuestsProps: PropTypes.func.isRequired,
  showMenuProps: PropTypes.bool.isRequired,
  setShowMenuProps: PropTypes.func.isRequired,
};
