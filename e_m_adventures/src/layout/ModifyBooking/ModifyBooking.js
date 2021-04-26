import React from 'react';

import HeaderMini from '../../components/Header/HeaderMini/HeaderMini';
import ModifyBookingContent from '../../components/ModifyBookingContent/ModifyBookingContent';
import Footer from '../../components/Footer/Footer';

const ForgotPassword = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderMini />
      <ModifyBookingContent />
      <Footer />
    </div>
  );
};

export default ForgotPassword;
