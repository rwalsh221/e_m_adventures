import React from 'react';

import classes from './ExploreWorld.module.css';
import scotlandHero from '../../assets/img/scotlandHero.jpg';
import scotlandFlag from '../../assets/img/scotlandFlag.png';
import walesHero from '../../assets/img/walesHero.jpg';
import walesFlag from '../../assets/img/walesFlag.svg';
import nIrelandHero from '../../assets/img/nIrelandHero.jpg';
import nIrelandFlag from '../../assets/img/nIrelandFlag.svg';

const ExploreWorld = (props) => {
  const locations = [
    { img: scotlandHero, flag: scotlandFlag },
    { img: walesHero, flag: walesFlag },
    { img: nIrelandHero, flag: nIrelandFlag },
  ];

  const content = locations.map((element) => {
    return (
      <div className={classes.exploreWorldCard}>
        <img
          className={classes.exploreWorldHero}
          alt={'explore the world'}
          src={element.img}
        ></img>
        <img
          className={classes.exploreWorldFlag}
          alt={'flag'}
          src={element.flag}
        ></img>
      </div>
    );
  });

  return (
    <section className={classes.exploreWorld}>
      <h2>Explore the World</h2>
      <div className={classes.exploreWorldContainer}>{content}</div>
    </section>
  );
};

export default ExploreWorld;
