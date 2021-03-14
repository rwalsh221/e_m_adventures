import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Covid />
      <Header />
      <ExploreNearby />
    </div>
  );
};

export default Home;
