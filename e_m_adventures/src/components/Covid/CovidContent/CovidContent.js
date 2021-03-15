import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import covidHero from '../../../assets/img/covid/covidHero.jpg';
import clean from '../../../assets/img/covid/clean.jpg';
import distance from '../../../assets/img/covid/distance.jpg';
import stayhome from '../../../assets/img/covid/stayhome.jpg';
import travel from '../../../assets/img/covid/travel.jpg';

import classes from './CovidContent.module.css';

const CovidContent = (props) => {
  return (
    <section className={classes.covidContent}>
      <div className={classes.headerContainer}>
        <img src={covidHero} alt={'covid'}></img>
        <h2 className={classes.header}>Our Covid Response</h2>
      </div>
      <div className={classes.covidInfo}>
        <LoremIpsum p={2} />
      </div>
      <div className={classes.covidResponse}>
        <img src={clean} alt={'cleaning'}></img>
        <a href={'/covid'}>
          <h5>Our Cleaning Policy</h5>
        </a>
      </div>
      <div className={classes.covidResponse}>
        <img src={distance} alt={'distance'}></img>

        <a href={'/covid'}>
          <h5>Our Social Distancing Policy</h5>
        </a>
      </div>
      <div className={classes.covidResponse}>
        <img src={travel} alt={'travel'}></img>
        <a
          href={
            'https://www.lancashire.gov.uk/health-and-social-care/your-health-and-wellbeing/coronavirus/'
          }
        >
          <h5>Local Travel Restrictions</h5>
        </a>
      </div>
      <div className={classes.covidResponse}>
        <img src={stayhome} alt={'stay home'}></img>
        <a href={'https://www.gov.uk/coronavirus'}>
          <h5>Current Covid-19 Information</h5>
        </a>
      </div>
    </section>
  );
};

export default CovidContent;
