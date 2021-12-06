import React from 'react';
import { nanoid } from 'nanoid';
import MapBoxContainer from '../../../miniComponents/MapboxContainer/MapBoxContainer';
import classes from './AccommodationInformationModalMap.module.css';

const AccommodationInformationModalMap = ({
  primaryContentProps,
  mapCoordProps,
}) => {
  const [showLocationDesc, setShowLocationDesc] = useState(false);
  const [showGettingAroundDesc, setShowGettingAroundDesc] = useState(false);

  return (
    <div className={classes.accommInfoMapModal}>
      <div className={classes.contentContainer}>
        <h2>Where you&apos;ll be</h2>
        <p className={classes.location}>{primaryContentProps.location}</p>
        <p>{primaryContentProps.locationDescription}</p>
        <h3>Getting around</h3>
        <p>{primaryContentProps.gettingAroundDescription}</p>
      </div>
      <div className={classes.mapContainer}>
        <MapBoxContainer />
      </div>
    </div>
  );
};

export default AccommodationInformationModalMap;
