import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import UpdateProfileContent from '../../components/UpdateProfileContent/UpdateProfileContent';
import Footer from '../../components/Footer/Footer';

const Login = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderSmall />
      <UpdateProfileContent />
      <Footer />
    </div>
  );
};

export default Login;
