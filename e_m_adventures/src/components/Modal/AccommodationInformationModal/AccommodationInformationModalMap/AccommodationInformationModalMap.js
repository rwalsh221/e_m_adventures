import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapBoxContainer from '../../../miniComponents/MapboxContainer/MapBoxContainer';
import classes from './AccommodationInformationModalMap.module.css';

const AccommodationInformationModalMap = ({
  contentProps,
  // mapCoordProps,
}) => {
  const [showLocationDesc, setShowLocationDesc] = useState({
    showDesc: false,
    showBtn: 'block',
  });
  const [showGettingAroundDesc, setShowGettingAroundDesc] = useState({
    showDesc: false,
    showBtn: 'block',
  });

  const sliceDescriptionHandler = (description, state) => {
    let locationDesc;
    if (!state) {
      locationDesc = description.slice(0, 100);

      if (locationDesc.endsWith(' ')) {
        locationDesc = locationDesc.slice(0, 99);
      }
      locationDesc = `${locationDesc}...`;
      return locationDesc;
    }

    locationDesc = description;
    return locationDesc;
  };

  const setDescriptionState = (state) => {
    state({ showDesc: true, showBtn: 'none' });
  };

  return (
    <div className={classes.accommInfoMapModal}>
      <div className={classes.contentContainer}>
        <h2>Where you&apos;ll be</h2>
        <p className={classes.location}>{contentProps.location}</p>
        <p className={classes.accommInfoMapDesc}>
          {sliceDescriptionHandler(
            contentProps.locationDescription,
            showLocationDesc.showDesc
          )}
        </p>
        <button
          style={{ display: showLocationDesc.showBtn }}
          type="button"
          className={classes.readMoreBtn}
          onClick={() => setDescriptionState(setShowLocationDesc)}
        >
          Read more <ion-icon name="chevron-forward" />
        </button>
        <h3>Getting around</h3>
        <p className={classes.accommInfoMapDesc}>
          {sliceDescriptionHandler(
            contentProps.gettingAroundDescription,
            showGettingAroundDesc.showDesc
          )}
        </p>
        <button
          style={{ display: showGettingAroundDesc.showBtn }}
          type="button"
          className={classes.readMoreBtn}
          onClick={() => setDescriptionState(setShowGettingAroundDesc)}
        >
          Read more <ion-icon name="chevron-forward" />
        </button>
      </div>
      <div className={classes.mapContainer}>
        <MapBoxContainer />
      </div>
    </div>
  );
};

AccommodationInformationModalMap.propTypes = {
  contentProps: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default AccommodationInformationModalMap;
