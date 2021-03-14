import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import Weather from '../../components/Weather/Weather';
import Food from '../../components/Food/Food';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Covid />
      <Header />
      <ExploreNearby />
      <Weather />
      <Food />
      <Food />
    </div>
  );
};

export default Home;
