import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import AccommodationInformationContent from '../../components/Accommodation/AccommodationInformationContent/AccommodationInformationContent';
import AccommodationFooter from '../../components/Footer/AccommodationFooter.js/AccommodationFooter';
import Footer from '../../components/Footer/Footer';

const AccommodationInformation = () => (
  <div className="layoutGrid">
    <HeaderSmall />
    <AccommodationInformationContent />
    <Footer>
      <AccommodationFooter />
    </Footer>
  </div>
);

export default AccommodationInformation;
