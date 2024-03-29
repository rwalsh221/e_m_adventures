import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import Weather from '../../components/Weather/Weather';
import Food from '../../components/Food/Food';
import ExploreWorld from '../../components/ExploreWorld/ExploreWorld';
import Footer from '../../components/Footer/Footer';

// TODO: look at images too big. have reduced size. try further

// TODO: INFO BOX ON SUMMARY FOR HOLD BOOKING

const Home = () => (
  <div className="layoutGrid">
    <Covid />
    <Header />
    <ExploreNearby />
    <Weather />
    <Food />
    <ExploreWorld />
    <Footer />
  </div>
);

export default Home;
