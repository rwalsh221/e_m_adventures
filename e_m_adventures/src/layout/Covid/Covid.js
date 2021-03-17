import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import CovidContent from '../../components/Covid/CovidContent/CovidContent';
import Footer from '../../components/Footer/Footer';

const Covid = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <CovidContent />
      <Footer />
    </div>
  );
};

export default Covid;
