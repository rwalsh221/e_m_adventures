import React from 'react';

import HeaderMini from '../../components/Header/HeaderMini/HeaderMini';
import BookingSummaryContent from '../../components/Booking/BookingSummaryContent/BookingSummaryContent';
import Footer from '../../components/Footer/Footer';

const BookingSummary = () => (
  <div className="layoutGrid">
    <HeaderMini />
    <BookingSummaryContent />
    <Footer />
  </div>
);

export default BookingSummary;
