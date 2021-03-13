import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <div className={classes.home}>
      <Covid />
      <Header />
    </div>
  );
};

export default Home;
