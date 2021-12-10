import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import classes from './AccommodationInformationModalContent.module.css';

const AccommodationInformationModalContent = ({
  primaryContent,
  secondaryContent = null,
}) => {
  let primaryContentUl;
  const secondaryContentArr = [];

  if (primaryContent.additional)
    primaryContentUl =
      primaryContent.additional.length > 0 ? (
        <ul>
          {primaryContent.additional.map((el) => (
            <li key={nanoid()}>
              <div className={classes.ionIconContainer}>
                <ion-icon name="checkmark-circle" />
              </div>
              <p>{el}</p>
            </li>
          ))}
        </ul>
      ) : null;

  if (secondaryContent) {
    secondaryContent.forEach((el) => {
      secondaryContentArr.push(
        <div key={nanoid()}>
          <h3>{el.heading}</h3>
          <ul>
            {el.additional.map((additionalContent) => (
              <li key={nanoid()}>
                <div className={classes.ionIconContainer}>
                  <ion-icon name="checkmark-circle" />
                </div>
                <p>{additionalContent}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    });
  }

  return (
    <div className={classes.accomInfoContentModal}>
      <div>
        <h2>{primaryContent.heading}</h2>
        {primaryContentUl}
      </div>
      {secondaryContentArr}
    </div>
  );
};

AccommodationInformationModalContent.propTypes = {
  primaryContent: PropTypes.instanceOf(Object).isRequired,
  secondaryContent: PropTypes.instanceOf(Object),
};

AccommodationInformationModalContent.defaultProps = {
  secondaryContent: PropTypes.null,
};

export default AccommodationInformationModalContent;
