import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import ExploreNearbyContent from '../../components/ExploreNearby/ExploreNearbyContent/ExploreNearbyContent';
import Footer from '../../components/Footer/Footer';
import classes from './ExploreNearby.module.css';

const Explore = (props) => {
  return (
    <div className={classes.explore}>
      <HeaderSmall />
      <ExploreNearbyContent />
      <Footer />
    </div>
  );
};

export default Explore;
