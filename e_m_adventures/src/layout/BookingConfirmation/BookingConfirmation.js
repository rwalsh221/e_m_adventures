import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import BookingConfirmationContent from '../../components/Booking/BookingConfirmationContent/BookingConfirmationContent';
import Footer from '../../components/Footer/Footer';

const BookingConfirmation = () => (
  <div className="layoutGrid">
    <HeaderSmall />
    <BookingConfirmationContent />
    <Footer />
  </div>
);

export default BookingConfirmation;
