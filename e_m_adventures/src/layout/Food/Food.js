import React from 'react';

import HeaderSmall from '../../components/Header/HeaderSmall/HeaderSmall';
import FoodContent from '../../components/Food/FoodContent/FoodContent';
import Footer from '../../components/Footer/Footer';
import classes from './Food.module.css';

const Food = (props) => {
  return (
    <div className={classes.food}>
      <HeaderSmall />
      <FoodContent />
      <Footer />
    </div>
  );
};

export default Food;
