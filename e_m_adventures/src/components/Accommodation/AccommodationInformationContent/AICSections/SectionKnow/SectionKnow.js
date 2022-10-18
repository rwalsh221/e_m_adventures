import React from 'react';
import PropTypes from 'prop-types';
import ShowMoreModalBtn from '../../../../miniComponents/Buttons/ShowMoreModalBtn/ShowMoreModalBtn';

import classes from './SectionKnow.module.css';

const SectionKnow = ({ showModalProps, checkInProps, checkOutProps }) => (
  <section className={classes.sectionKnow}>
    <h2>Things to Know</h2>
    <div className={classes.knowContentContainer}>
      <div className={classes.knowContent}>
        <h4>House Rules</h4>
        <ul>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>
              Check-in: {checkInProps.min}:00 - {checkInProps.max}:00
            </p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>Check-out: {checkOutProps}:00</p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>quis nostrud exercitation ullamco</p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>quis nostrud exercitation ullamco</p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>quis nostrud exercitation ullamco</p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>quis nostrud exercitation ullamco</p>
          </li>
        </ul>
        <ShowMoreModalBtn clickHandler={() => showModalProps('rules')} />
      </div>
      <div className={classes.knowContent}>
        <h4>Health &amp; safety</h4>
        <ul>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>
              Commited to an enhanced covid-19 cleaning process
              <span
                aria-hidden
                type="button"
                onClick={() => showModalProps('covid')}
                className={classes.showModal}
              >
                . Show more
              </span>
            </p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>
              e &amp; m adventures social distancing and other COVID-19-related
              guidelines apply
            </p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>quis nostrud exercitation ullamco</p>
          </li>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>quis nostrud exercitation ullamco</p>
          </li>
        </ul>
        <ShowMoreModalBtn clickHandler={() => showModalProps('health')} />
      </div>
      <div className={classes.knowContent}>
        <h4>Cancellation Policy</h4>
        <ul>
          <li>
            <div className={classes.ionIconContainer}>
              <ion-icon name="checkmark-circle" />
            </div>
            <p>Free cancellation for 48 hours</p>
          </li>
        </ul>
        <ShowMoreModalBtn clickHandler={() => showModalProps('cancellation')} />
      </div>
    </div>
  </section>
);

SectionKnow.propTypes = {
  showModalProps: PropTypes.func.isRequired,
  checkInProps: PropTypes.objectOf(PropTypes.number).isRequired,
  checkOutProps: PropTypes.number.isRequired,
};

export default SectionKnow;
