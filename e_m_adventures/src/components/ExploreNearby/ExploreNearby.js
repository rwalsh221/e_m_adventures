import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ExploreNearby.module.css';

import windermere from '../../assets/img/windermere.jpg';
import bowland from '../../assets/img/bowland.jpg';
import lakeDistrict from '../../assets/img/lake_district.jpg';
import blackpool from '../../assets/img/blackpool.jpg';
import morecambe from '../../assets/img/morecambe.jpg';
import lancaster from '../../assets/img/lancaster.jpg';
import whiteLund from '../../assets/img/white_lund.jpg';
import glasson from '../../assets/img/glasson.jpg';

const ExploreNearby = (props) => {
  const locations = [
    { img: windermere, heading: 'windermere', distance: '30-min Drive' },
    { img: bowland, heading: 'forest of bowland', distance: '1-hour Drive' },
    { img: lakeDistrict, heading: 'lake district', distance: '1.5-hour Drive' },
    { img: blackpool, heading: 'blackpool', distance: '1.5-hour Drive' },
    { img: morecambe, heading: 'morecambe', distance: '1-hour Drive' },
    { img: lancaster, heading: 'lancaster', distance: '1-hour Drive' },
    {
      img: whiteLund,
      heading: 'white lund industrial estate',
      distance: '1-hour Drive',
    },
    { img: glasson, heading: 'glasson dock', distance: '1-hour Drive' },
  ];

  const content = locations.map((element) => {
    return (
      <div className={classes.exploreCard} key={element.heading}>
        <Link to={'/explore'}>
          <img
            className={classes.exploreCardImg}
            alt="location"
            src={element.img}
          ></img>
        </Link>

        <div className={classes.exploreCardContent}>
          <h5 className={classes.exploreCardHeading}>{element.heading}</h5>
          <p className={classes.exploreCardDistance}>{element.distance}</p>
        </div>
      </div>
    );
  });

  return (
    <div className={classes.exploreNearby}>
      <h2>Explore Nearby</h2>
      <div className={classes.exploreContainer}>{content}</div>
    </div>
  );
};

export default ExploreNearby;
