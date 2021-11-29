import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import classes from './ContentPara.module.css';

const ContentPara = ({
  positionProps,
  headingProps,
  loremTopProps,
  imgPositionProps,
  imgProps,
  loremBtmProps,
}) => (
  <div className={`${classes[positionProps]}`}>
    <h4 className={classes.paraHeading}>{headingProps}</h4>
    <LoremIpsum p={loremTopProps} />
    <img
      className={`${classes[imgPositionProps]} ${classes.subImg}`}
      src={imgProps}
      alt="sub"
    />
    <LoremIpsum p={loremBtmProps} />
  </div>
);

export default ContentPara;
