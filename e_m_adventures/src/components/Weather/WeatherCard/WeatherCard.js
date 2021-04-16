import React, { useState, useEffect } from 'react';

import Spinner from '../../miniComponents/Spinner/Spinner';
import classes from './WeatherCard.module.css';
import { formatTime, formatDate, getDay } from '../../../helpers/utilities';

const WeatherCard = (props) => {
  // INITIAL CONTENT
  let content = <Spinner />;

  // SUCCESSFULL API CALL
  if (props.weatherData) {
    content = (
      <div className={classes.weatherCard}>
        {/* DAY */}
        <div className={classes.day}>
          <h3>{getDay(props.weatherData.daily[props.day].dt)}</h3>
          <h5>{formatDate(props.weatherData.daily[props.day].dt)}</h5>
        </div>
        {/* IMAGE */}
        <div className={classes.weatherImg}>
          <img
            src={`https://openweathermap.org/img/wn/${
              props.weatherData.daily[props.day].weather[0].icon
            }@2x.png`}
            alt="weather icon"
          ></img>
        </div>
        {/* TEMP */}
        <div className={classes.temperature}>
          <h4>
            {props.weatherData.daily[props.day].temp.day.toFixed(0)}&#x2103;
          </h4>
          <div className={classes.temperatureHiLo}>
            <div className={classes.temperatureHiLoContainer}>
              <ion-icon name="chevron-up-outline"></ion-icon>{' '}
              <p>
                {props.weatherData.daily[props.day].temp.max.toFixed(0)}&#x2103;
              </p>
            </div>
            <div className={classes.temperatureHiLoContainer}>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <p>
                {props.weatherData.daily[props.day].temp.min.toFixed(0)}&#x2103;
              </p>
            </div>
          </div>
        </div>
        {/* CHANCERAIN */}
        <div className={classes.chanceRain}>
          <ion-icon name="umbrella-outline"></ion-icon>
          <h5>
            &ensp;{(props.weatherData.daily[props.day].pop * 100).toFixed(0)}%
          </h5>
        </div>
        {/* DESCRIPTION */}
        <div className={classes.description}>
          <h5>{props.weatherData.daily[props.day].weather[0].description}</h5>
        </div>
        {/* WINDSPEED */}
        <div className={classes.windSpeed}>
          <ion-icon
            name="arrow-up-circle-outline"
            style={{
              transform: `rotate(${
                props.weatherData.daily[props.day].wind_deg
              }deg)`,
            }}
          ></ion-icon>
          <h5>
            &ensp;{props.weatherData.daily[props.day].wind_speed.toFixed(1)}
            &ensp;m/s
          </h5>
        </div>
        {/* SUNRISE */}
        <div className={classes.sunrise}>
          <div className={classes.sunTime}>
            <ion-icon name="chevron-up-outline"></ion-icon>
            <h5>{formatTime(props.weatherData.daily[props.day].sunrise)}</h5>
          </div>
          <ion-icon name="sunny-outline"></ion-icon>
          <div className={classes.sunTime}>
            <ion-icon name="chevron-down-outline"></ion-icon>
            <h5>{formatTime(props.weatherData.daily[props.day].sunset)}</h5>
          </div>
        </div>
      </div>
    );
  }

  // FAILED API CALL
  if (props.error) {
    content = (
      <div className={classes.weatherCardError}>
        <p className={classes.error}>{props.error}</p>
      </div>
    );
  }

  return (
    <React.Fragment>
      {content ? content : <div className={classes.weatherNull}></div>}
    </React.Fragment>
  );
};

export default WeatherCard;
