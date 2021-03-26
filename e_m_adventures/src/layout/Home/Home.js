import React from 'react';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import Weather from '../../components/Weather/Weather';
import Food from '../../components/Food/Food';
import ExploreWorld from '../../components/ExploreWorld/ExploreWorld';
import Footer from '../../components/Footer/Footer';

// TODO: PUT ASYNC WEATHER CALL IN PARENT TO PREVENT MULTIPLE API CALLS
// TODO: CHANGE <a> to <LINK> https://stackoverflow.com/questions/43087007/react-link-vs-a-tag-and-arrow-function
// TODO: CHANGE ROUTE /home to /
// TODO: REMOVE INDEX.CSS AND GET FONT
// TODO: REFACTOR CSS GRIDS FOR EASIER RESPONSIVENESS
//  TODO: ADD AXIOS CONFIG SEE BURGER BUILDER
// TODO: create mini header
// TODO: TAKE MARGIN OFF H2 IN APP CSS

const Home = (props) => {
  let database = async () => {
    let test = await fetch(
      'https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/.json '
    );

    let test2 = await test.json();
    console.log(test2);
  };

  database();
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
