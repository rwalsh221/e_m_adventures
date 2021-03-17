import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import ExploreWorldContent from '../../components/ExploreWorld/ExploreWorldContent/ExploreWorldContent';
import Footer from '../../components/Footer/Footer';

const ExploreWorld = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <ExploreWorldContent />
      <Footer />
    </div>
  );
};

export default ExploreWorld;
