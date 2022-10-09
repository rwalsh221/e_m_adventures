import React, { useRef, useEffect, useState } from 'react';
import classes from './AccommodationSearchMobile.module.css';

const AccommodationSearchMobile = ({ basePriceProps }) => {
  //   CALCULATE TOP OFFSET FOR CSS STYLE SO COMPONENT IS ON BOTTOM OF SCREEN
  const mobileSearch = useRef();
  const [mobileSearchOffset, setMobileSearchOffset] = useState();

  useEffect(() => {
    const offSet = window.screen.height - mobileSearch.current.offsetHeight;
    const offSetString = offSet.toString();
    setMobileSearchOffset(offSetString);
  }, [setMobileSearchOffset]);

  return (
    <div
      className={classes.mobile_search}
      style={{ top: `${mobileSearchOffset}px` }}
      ref={mobileSearch}
    >
      <div className={classes.mobile_search_content}>
        <p>
          <span data-boldfont>£{basePriceProps}</span>&nbsp;/ night
        </p>
        <p data-boldfont>
          <ion-icon name="star-outline" />
          5.0
          <span className={classes.dot} />
          <span data-underlinefont>16 reviews</span>
        </p>
        <button className={classes.mobile_search_btn} type="button">
          book
        </button>
      </div>
    </div>
  );
};

export default AccommodationSearchMobile;
