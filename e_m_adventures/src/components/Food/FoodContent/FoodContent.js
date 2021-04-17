import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

import RestaurantCard from './RestaurantCard/RestaurantCard';

import uk from '../../../assets/img/food/uk.png';
import india from '../../../assets/img/food/india.png';
import italy from '../../../assets/img/food/italy.png';
import pizza from '../../../assets/img/food/pizza.jpg';
import steak from '../../../assets/img/food/steak.jpg';
import curry from '../../../assets/img/food/curry.jpg';
import babar from '../../../assets/img/food/babar.svg';
import marcos from '../../../assets/img/food/marcos.png';
import stone from '../../../assets/img/food/stone.png';

import classes from './FoodContent.module.css';

const FoodContent = (props) => {
  return (
    <main className={'contentGrid'}>
      <div className={classes.heading}>
        <h1 className={classes.headingH1}>Explore Real Local Food</h1>
        <LoremIpsum p={1} />
      </div>
      <div className={classes.paraSubL}>
        <h4 className={classes.paraHeading}>Explore Indian</h4>
        <LoremIpsum p={1} />
        <img
          className={`${classes.subImgL} ${classes.subImg}`}
          src={curry}
          alt={'sub'}
        ></img>
        <LoremIpsum p={1} />
      </div>
      <div className={classes.paraSubR}>
        <h4 className={classes.paraHeading}>Explore Italien</h4>
        <LoremIpsum p={1} />
        <img
          className={`${classes.subImgR} ${classes.subImg}`}
          src={pizza}
          alt={'sub'}
        ></img>
        <LoremIpsum p={1} />
      </div>
      <div className={classes.paraSubL}>
        <h4 className={classes.paraHeading}>Explore British</h4>
        <LoremIpsum p={1} />
        <img
          className={`${classes.subImgL} ${classes.subImg}`}
          src={steak}
          alt={'sub'}
        ></img>
        <LoremIpsum p={1} />
      </div>

      {/* SIDEBAR SECTION */}
      <h3 className={classes.sidebarHeading}>Must Eat</h3>
      <div className={classes.sidebarContainer}>
        <div className={`${classes.sidebarContent}`}>
          <h5>Indian Restaurants</h5>
          <img
            className={classes.sidebarImg}
            src={india}
            alt={'must see'}
          ></img>
          <div className={classes.sidebarCardContainer}>
            {/* <RestaurantCard
            title={'Babar'}
            img={babar}
            website={'babarelephant.co.uk/'}
            phone={+441524388670}
          />
          <RestaurantCard
            title={'Babar'}
            img={babar}
            website={'babarelephant.co.uk/'}
            phone={+441524388670}
          /> */}
            <RestaurantCard
              title={'Babar'}
              img={babar}
              website={'babarelephant.co.uk/'}
              phone={+441524388670}
            />
            <RestaurantCard
              title={'Babar'}
              img={babar}
              website={'babarelephant.co.uk/'}
              phone={+441524388670}
            />
            <RestaurantCard
              title={'Babar'}
              img={babar}
              website={'babarelephant.co.uk/'}
              phone={+441524388670}
            />
            <RestaurantCard
              title={'Babar'}
              img={babar}
              website={'babarelephant.co.uk/'}
              phone={+441524388670}
            />
          </div>
        </div>

        <div className={`${classes.sidebarContent}`}>
          <h5>Italien Restaurants</h5>
          <img
            className={classes.sidebarImg}
            src={italy}
            alt={'must see'}
          ></img>
          <div className={classes.sidebarCardContainer}>
            <RestaurantCard
              title={'Marcos'}
              img={marcos}
              website={'marcosrestaurant.com'}
              phone={+441524844445}
            />
            <RestaurantCard
              title={'Marcos'}
              img={marcos}
              website={'marcosrestaurant.com'}
              phone={+441524844445}
            />
            <RestaurantCard
              title={'Marcos'}
              img={marcos}
              website={'marcosrestaurant.com'}
              phone={+441524844445}
            />
            <RestaurantCard
              title={'Marcos'}
              img={marcos}
              website={'marcosrestaurant.com'}
              phone={+441524844445}
            />
            <RestaurantCard
              title={'Marcos'}
              img={marcos}
              website={'marcosrestaurant.com'}
              phone={+441524844445}
            />
            <RestaurantCard
              title={'Marcos'}
              img={marcos}
              website={'marcosrestaurant.com'}
              phone={+441524844445}
            />
          </div>
        </div>
        <div className={`${classes.sidebarContent} `}>
          <h5>British Restaurants</h5>
          <img className={classes.sidebarImg} src={uk} alt={'must see'}></img>
          <div className={classes.sidebarCardContainer}>
            <RestaurantCard
              title={'Stone Grill'}
              img={stone}
              website={'stonegrill.co.uk'}
              phone={+4401253595199}
            />
            <RestaurantCard
              title={'Stone Grill'}
              img={stone}
              website={'stonegrill.co.uk'}
              phone={+4401253595199}
            />
            <RestaurantCard
              title={'Stone Grill'}
              img={stone}
              website={'stonegrill.co.uk'}
              phone={+4401253595199}
            />
            <RestaurantCard
              title={'Stone Grill'}
              img={stone}
              website={'stonegrill.co.uk'}
              phone={+4401253595199}
            />
            <RestaurantCard
              title={'Stone Grill'}
              img={stone}
              website={'stonegrill.co.uk'}
              phone={+4401253595199}
            />
            <RestaurantCard
              title={'Stone Grill'}
              img={stone}
              website={'stonegrill.co.uk'}
              phone={+4401253595199}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FoodContent;
