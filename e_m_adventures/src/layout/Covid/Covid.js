import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import CovidContent from '../../components/Covid/CovidContent/CovidContent';
import Footer from '../../components/Footer/Footer';

import classes from './Covid.module.css';

const Covid = (props) => {
  return (
    <div className={classes.covid}>
      {/* <HeaderSmall /> */}
      {/* <CovidContent /> */}
      <Footer />
    </div>
  );
};

export default Covid;
