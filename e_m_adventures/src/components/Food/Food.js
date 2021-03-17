import React from 'react';

import { FoodButton } from '../../helpers/Buttons/Buttons';

import foodHero from '../../assets/img/foodHero2.jpg';
import classes from './Food.module.css';

const Food = (props) => {
  return (
    <div className={classes.food}>
      <img src={foodHero} alt={'Local Food'} className={classes.foodImg}></img>
      <h3 className={classes.headerTop}>Eat Local</h3>
      <h3 className={classes.headerBtm}>Think Global</h3>
      <h5 className={classes.headerAdditional}>Enjoy some local eats</h5>
      <FoodButton />
    </div>
  );
};

export default Food;
