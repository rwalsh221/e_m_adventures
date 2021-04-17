import React from 'react';

import classes from './RestaurantCard.module.css';

const RestaurantCard = (props) => {
  console.log(classes);
  return (
    <div className={classes.sidebarCard}>
      <img
        className={classes.sidebarCardImg}
        src={props.img}
        alt={'babar'}
      ></img>
      <h6>{props.title}</h6>
      <a className={classes.webLink} href={`https://www.${props.website}`}>
        {props.website}/
      </a>
      <p>{props.phone}</p>
    </div>
  );
};

export default RestaurantCard;
