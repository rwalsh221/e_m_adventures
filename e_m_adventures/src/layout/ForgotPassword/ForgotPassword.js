import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import ForgotPasswordContent from '../../components/ForgotPasswordContent/ForgotPasswordContent';
import Footer from '../../components/Footer/Footer';

const ForgotPassword = () => (
  <div className="layoutGrid">
    <HeaderSmall />
    <ForgotPasswordContent />
    <Footer />
  </div>
);

export default ForgotPassword;
