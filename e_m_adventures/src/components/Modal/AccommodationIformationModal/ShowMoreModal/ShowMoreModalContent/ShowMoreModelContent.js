import React from 'react';
import { nanoid } from 'nanoid';
import classes from './ShowMoreModal.module.css';

const ShowMoreModal = ({ primaryContent, secondaryContent = null }) => {
  const primaryContentUl = primaryContent.additional.map((el) => (
    <li key={nanoid()}>
      <div className={classes.ionIconContainer}>
        <ion-icon name="checkmark-circle" />
      </div>
      <p>{el}</p>
    </li>
  ));

  let secondaryContentHeading;
  let secondaryContentUl;

  if (secondaryContent) {
    secondaryContentHeading = <h3>You must acknowledge</h3>;
    secondaryContentUl = secondaryContent.additional.map((el) => (
      <li key={nanoid()}>
        <div className={classes.ionIconContainer}>
          <ion-icon name="checkmark-circle" />
        </div>
        <p>{el}</p>
      </li>
    ));
  }

  return (
    <div className={classes.showMoreModal}>
      <h2>{primaryContent.heading}</h2>
      <ul>{primaryContentUl}</ul>
      {secondaryContentHeading}
      {secondaryContentUl}
    </div>
  );
};

export default ShowMoreModal;
