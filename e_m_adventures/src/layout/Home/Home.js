import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import Weather from '../../components/Weather/Weather';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Covid />
      <Header />
      <ExploreNearby />
      <Weather />
    </div>
  );
};

export default Home;
