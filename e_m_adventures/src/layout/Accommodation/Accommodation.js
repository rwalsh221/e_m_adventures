import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import AccommodationContent from '../../components/Accommodation/AccommodationContent/AccommodationContent';
import Footer from '../../components/Footer/Footer';

const Accommodation = () => (
  <div className="layoutGrid">
    <HeaderSmall />
    <AccommodationContent />
    <Footer />
  </div>
);

export default Accommodation;
