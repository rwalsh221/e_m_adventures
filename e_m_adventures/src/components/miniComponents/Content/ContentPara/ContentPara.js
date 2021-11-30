import React from 'react';
import PropTypes from 'prop-types';
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

ContentPara.propTypes = {
  positionProps: PropTypes.string.isRequired,
  imgPositionProps: PropTypes.string.isRequired,
  headingProps: PropTypes.string.isRequired,
  imgProps: PropTypes.string.isRequired,
  loremTopProps: PropTypes.number.isRequired,
  loremBtmProps: PropTypes.number.isRequired,
};

export default ContentPara;
