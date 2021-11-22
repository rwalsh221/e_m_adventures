import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ExploreWorld.module.css';
import scotlandHero from '../../assets/img/scotlandHero.jpg';
import scotlandFlag from '../../assets/img/scotlandFlag.png';
import walesHero from '../../assets/img/walesHero.jpg';
import walesFlag from '../../assets/img/walesFlag.svg';
import nIrelandHero from '../../assets/img/nIrelandHero.jpg';
import nIrelandFlag from '../../assets/img/nIrelandFlag.svg';

const ExploreWorld = () => {
  const locations = [
    { img: scotlandHero, flag: scotlandFlag, key: '1' },
    { img: walesHero, flag: walesFlag, key: '2' },
    { img: nIrelandHero, flag: nIrelandFlag, key: '3' },
  ];

  const content = locations.map((element) => (
    <Link to="/world" className={classes.exploreWorldCard} key={element.key}>
      <img
        className={classes.exploreWorldHero}
        alt="explore the world"
        src={element.img}
      />
      <img className={classes.exploreWorldFlag} alt="flag" src={element.flag} />
    </Link>
  ));

  return (
    <section className={classes.exploreWorld}>
      <h2>Explore the World</h2>
      <div className={classes.exploreWorldContainer}>{content}</div>
    </section>
  );
};

export default ExploreWorld;
