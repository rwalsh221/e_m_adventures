import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import ExploreNearbyContent from '../../components/ExploreNearby/ExploreNearbyContent/ExploreNearbyContent';
import Footer from '../../components/Footer/Footer';

const Explore = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <ExploreNearbyContent />
      <Footer />
    </div>
  );
};

export default Explore;
