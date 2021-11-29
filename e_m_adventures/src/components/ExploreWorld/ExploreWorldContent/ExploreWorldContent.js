import React from 'react';
import LoremIpsum from 'react-lorem-ipsum';

import ContentPara from '../../miniComponents/Content/ContentPara/ContentPara';

import scotNature from '../../../assets/img/exploreWorld/nature.jpg';
import scotCity from '../../../assets/img/exploreWorld/city.jpg';
import scotNightlife from '../../../assets/img/exploreWorld/nightlife.jpg';
import scotFlag from '../../../assets/img/scotlandFlag.png';
import mustSee from '../../../assets/img/exploreWorld/mustSee.jpg';
import classes from './ExploreWorldContent.module.css';

const ExploreWorldContent = () => (
  <main className="contentGrid">
    <div className={classes.heading}>
      <h1 className={classes.headingH1}>Explore Scotland</h1>
      <LoremIpsum p={1} />
    </div>

    <ContentPara
      positionProps="left"
      imgPositionProps="imgLeft"
      headingProps="Explore Scotish Nature"
      loremTopProps={1}
      loremBtmProps={2}
      imgProps={scotNature}
    />
    <div className={classes.paraSubR}>
      <h4 className={classes.paraHeading}>Explore Scotish Cities</h4>
      <LoremIpsum p={1} />
      <img
        className={`${classes.subImgR} ${classes.subImg}`}
        src={scotCity}
        alt="sub"
      />
      <LoremIpsum p={2} />
    </div>
    <div className={classes.paraSubL}>
      <h4 className={classes.paraHeading}>Explore Scotish Nightlife</h4>
      <LoremIpsum p={1} />
      <img
        className={`${classes.subImgL} ${classes.subImg}`}
        src={scotNightlife}
        alt="sub"
      />
      <LoremIpsum p={1} />
    </div>
    <img className={classes.flag} src={scotFlag} alt="flag" />
    {/* MUST SEE SECTION */}
    <h3 className={classes.mustSeeHeading}>{null}</h3>
    <div className={`${classes.mustSeeContent} ${classes.mustSeeTop}`}>
      <h5>Visit Placeholder</h5>
      <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
    </div>
    <div className={`${classes.mustSeeContent} ${classes.mustSeeMid}`}>
      <h5>Visit Placeholder</h5>
      <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
    </div>
    <div className={`${classes.mustSeeContent} ${classes.mustSeeBtm}`}>
      <h5>Visit Placeholder</h5>
      <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
    </div>
    <div className={classes.mustSeeCardContainer}>
      <div className={`${classes.mustSeeContent} `}>
        <h5>Visit Placeholder</h5>
        <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
      </div>
      <div className={`${classes.mustSeeContent}`}>
        <h5>Visit Placeholder</h5>
        <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
      </div>
      <div className={`${classes.mustSeeContent} `}>
        <h5>Visit Placeholder</h5>
        <img className={classes.mustSeeImg} src={mustSee} alt="must see" />
      </div>
    </div>
  </main>
);

export default ExploreWorldContent;
