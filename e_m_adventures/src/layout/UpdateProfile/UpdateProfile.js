import React from 'react';

import HeaderMini from '../../components/Header/HeaderMini/HeaderMini';
import UpdateProfileContent from '../../components/UpdateProfileContent/UpdateProfileContent';
import Footer from '../../components/Footer/Footer';

const Login = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderMini />
      <UpdateProfileContent />
      <Footer />
    </div>
  );
};

export default Login;
