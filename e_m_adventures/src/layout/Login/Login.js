import React from 'react';

import HeaderMini from '../../components/Header/HeaderMini/HeaderMini';
import LoginSection from '../../components/LoginSection/LoginSection';
import Footer from '../../components/Footer/Footer';

const Login = () => (
  <div className="layoutGrid">
    <HeaderMini />
    <LoginSection />
    <Footer />
  </div>
);

export default Login;
