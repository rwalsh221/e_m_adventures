import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import BookingSummaryContent from '../../components/Booking/BookingSummaryContent/BookingSummaryContent';
import Footer from '../../components/Footer/Footer';

const BookingSummary = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <BookingSummaryContent />
      <Footer />
    </div>
  );
};

export default BookingSummary;
