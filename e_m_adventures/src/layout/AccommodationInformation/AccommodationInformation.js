import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import AccommodationInformationContent from '../../components/Accommodation/AccommodationInformationContent/AccommodationInformationContent';
import Footer from '../../components/Footer/Footer';

const AccommodationInformation = () => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <AccommodationInformationContent />
      <Footer />
    </div>
  );
};

export default AccommodationInformation;
