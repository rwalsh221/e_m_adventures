import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import Weather from '../../components/Weather/Weather';
import Food from '../../components/Food/Food';
import ExploreWorld from '../../components/ExploreWorld/ExploreWorld';
import Footer from '../../components/Footer/Footer';
import classes from './Home.module.css';

// TODO: PUT ASYNC WEATHER CALL IN PARENT TO PREVENT MULTIPLE API CALLS
// TODO: ADD ROUTING

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Covid />
      <Header />
      <ExploreNearby />
      {/* <Weather /> */}
      <Food />
      <ExploreWorld />
      <Footer />
    </div>
  );
};

export default Home;
