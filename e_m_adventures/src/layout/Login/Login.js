import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import LoginSection from '../../components/LoginSection/LoginSection';
import Footer from '../../components/Footer/Footer';

const Login = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <LoginSection />
      <Footer />
    </div>
  );
};

export default Login;
