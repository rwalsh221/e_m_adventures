import React from 'react';

import HeaderMini from '../../components/Header/HeaderMini/HeaderMini';
import TimeoutContent from '../../components/TimeoutContent/TimeoutContent';
import Footer from '../../components/Footer/Footer';

const Login = (props) => {
  return (
    <div className={'layoutGrid'}>
      <HeaderMini />
      <TimeoutContent />
      <Footer />
    </div>
  );
};

export default Login;
