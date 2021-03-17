import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Buttons.module.css';

export const LoginButton = (props) => {
  return (
    <Link
      className={classes.loginBtn}
      role="button"
      to={'/login'}
      onClick={props.clicked}
    >
      <ion-icon name="menu-outline"></ion-icon>
      <ion-icon name="people-circle-outline"></ion-icon>
    </Link>
  );
};

export const FoodButton = (props) => {
  return (
    <Link
      className={classes.foodBtn}
      role="button"
      to={'/food'}
      onClick={props.clicked}
    >
      EAT
    </Link>
  );
};
