import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import classes from './ContentPara.module.css';

export const ContentPara = (props) => {
  return (
    <div className={`${classes[props.position]}`}>
      <h4 className={classes.paraHeading}>{props.heading}</h4>
      <LoremIpsum p={props.loremTop} />
      <img
        className={`${classes[props.imgPosition]} ${classes.subImg}`}
        src={props.img}
        alt={'sub'}
      ></img>
      <LoremIpsum p={props.loremBtm} />
    </div>
  );
};
