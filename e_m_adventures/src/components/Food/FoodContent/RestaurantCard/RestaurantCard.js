import React from 'react';

import classes from './RestaurantCard.module.css';

const RestaurantCard = (props) => {
  return (
    <div className={classes.sidebarCard}>
      <img
        className={classes.sidebarCardImg}
        src={props.img}
        alt={'babar'}
      ></img>
      <h6>{props.title}</h6>
      <a href={`https://www.${props.website}`}>{props.website}/</a>
      <p>{props.phone}</p>
    </div>
  );
};

export default RestaurantCard;

/* <div className={classes.sidebarCard}>
            <img
              className={classes.sidebarCardImg}
              src={babar}
              alt={'babar'}
            ></img>
            <h6>Babar Elephant</h6>
            <a href={'http://www.babarelephant.co.uk'}>babarelephant.co.uk/</a>
            <p>+441524388670</p>
          </div>
        </div> */
