import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import ExploreWorldContent from '../../components/ExploreWorld/ExploreWorldContent/ExploreWorldContent';
import Footer from '../../components/Footer/Footer';
import classes from './ExploreWorld.module.css';

const ExploreWorld = (props) => {
  return (
    <div className={classes.food}>
      <HeaderSmall />
      <ExploreWorldContent />
      <Footer />
    </div>
  );
};

export default ExploreWorld;
