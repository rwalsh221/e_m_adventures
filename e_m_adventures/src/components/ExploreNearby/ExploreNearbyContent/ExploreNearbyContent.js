import React from 'react';

import { LoremIpsum } from 'react-lorem-ipsum';

import winderMereHero from '../../../assets/img/exploreNearby/windermereHero.jpg';
import windermereS1 from '../../../assets/img/exploreNearby/windermereS1.jpg';
import windermereS2 from '../../../assets/img/exploreNearby/windermereS2.jpg';
import mustSee from '../../../assets/img/exploreNearby/mustSee.jpg';
import classes from './ExploreNearbyContent.module.css';

const ExploreNearbyContent = () => (
  <main className="contentGrid">
    <div className={classes.heading}>
      <h1 className={classes.headingH1}>Explore Windermere</h1>
      <LoremIpsum p={1} />
    </div>
    <img className={classes.hero} src={winderMereHero} alt="hero" />
    <div className={classes.paraSubL}>
      <h4 className={classes.paraHeading}>Explore Wildlife</h4>
      <LoremIpsum p={1} />
      <img
        className={`${classes.subImgL} ${classes.subImg}`}
        src={windermereS1}
        alt="sub"
      />

      <LoremIpsum p={1} />
      <LoremIpsum p={1} />
    </div>
    <div className={classes.paraSubR}>
      <h4 className={classes.paraHeading}>Explore Nature</h4>
      <LoremIpsum p={1} />
      <img
        className={`${classes.subImgR} ${classes.subImg}`}
        src={windermereS2}
        alt="sub"
      />
      <LoremIpsum p={1} />
      <LoremIpsum p={1} />
    </div>
    {/* MUST SEE SECTION */}

    <h3 className={classes.mustSeeHeading}>Must See</h3>
    <div className={classes.mustSeeCardContainer}>
      <div className={`${classes.mustSeeContent} `}>
        <h5>Placeholder</h5>
        <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
      </div>
      <div className={`${classes.mustSeeContent}`}>
        <h5>Placeholder</h5>
        <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
      </div>
      <div className={`${classes.mustSeeContent}`}>
        <h5>Placeholder</h5>
        <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
      </div>
    </div>
  </main>
);

export default ExploreNearbyContent;
