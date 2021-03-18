import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import SignupContent from '../../components/SignupContent/SignupContent';
import Footer from '../../components/Footer/Footer';

const Login = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <SignupContent />
      <Footer />
    </div>
  );
};

export default Login;
