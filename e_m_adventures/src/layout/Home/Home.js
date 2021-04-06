import React from 'react';

import axios from 'axios';

import Covid from '../../components/Covid/Covid';
import Header from '../../components/Header/Header';
import ExploreNearby from '../../components/ExploreNearby/ExploreNearby';
import Weather from '../../components/Weather/Weather';
import Food from '../../components/Food/Food';
import ExploreWorld from '../../components/ExploreWorld/ExploreWorld';
import Footer from '../../components/Footer/Footer';

import app from '../../firebase';

// TODO: PUT ASYNC WEATHER CALL IN PARENT TO PREVENT MULTIPLE API CALLS

// TODO: REMOVE INDEX.CSS AND GET FONT

//  TODO: ADD AXIOS CONFIG SEE BURGER BUILDER

// TODO: dashboard responsiveness
//TODO: food responsiveness
// TODO: forgot password section

const Home = (props) => {
  // const database2 = async () => {
  //   const response = await axios.get(
  //     `https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/.json`,
  //     {
  //       params: {
  //         auth: process.env.REACT_APP_FIREBASE_DATABASE_SECRET,
  //       },
  //     }
  //   );
  //   console.log(response);
  // };

  // database2();

  // axios
  //   .get(
  //     `https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/.json`
  //   )
  //   .then(function (response) {
  //     let test = response;
  //     console.log(test);
  //   });

  // let database = async () => {
  //   let test = await fetch(
  //     `https://e-m-adventures-development-default-rtdb.europe-west1.firebasedatabase.app/.json?auth=${process.env.REACT_APP_DATABASE_SECRET}`
  //   );

  //   // ${
  //   //   app.auth().currentUser.uid
  //   // }
  //   let test2 = await test.json();
  //   console.log(test2);
  // };
  // console.log(app.auth().currentUser.uid);
  // database();
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
