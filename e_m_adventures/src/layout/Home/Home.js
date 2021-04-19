import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import Weather from '../../components/Weather/Weather';
import Food from '../../components/Food/Food';
import ExploreWorld from '../../components/ExploreWorld/ExploreWorld';
import Footer from '../../components/Footer/Footer';

// TODO: REMOVE INDEX.CSS AND GET FONT

// TODO: dashboard responsiveness
// TODO: format bookings - past and future arrange by date
// TODO: look at images too big

const Home = (props) => {
  return (
    <div className={'layoutGrid'}>
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
