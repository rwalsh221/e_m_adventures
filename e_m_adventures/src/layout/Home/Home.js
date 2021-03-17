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
// TODO: CHANGE <a> to <LINK> https://stackoverflow.com/questions/43087007/react-link-vs-a-tag-and-arrow-function
// TODO: CHANGE ROUTE /home to /
// TODO: REMOVE INDEX.CSS AND GET FONT

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Covid />
      <Header />
      <ExploreNearby />
      <Weather />
      <Food />
      <ExploreWorld />
      <Footer />
    </div>
  );
};

export default Home;
