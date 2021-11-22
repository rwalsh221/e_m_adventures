import React from 'react';

import Spinner from '../../miniComponents/Spinner/Spinner';
import classes from './WeatherCard.module.css';
import { formatTime, formatDate, getDay } from '../../../helpers/utilities';

const WeatherCard = ({ dayProps, weatherDataProps, errorProps }) => {
  // INITIAL CONTENT
  let content = <Spinner />;

  // SUCCESSFULL API CALL
  if (weatherDataProps) {
    content = (
      <div className={classes.weatherCard}>
        {/* DAY */}
        <div className={classes.day}>
          <h3>{getDay(weatherDataProps.daily[dayProps].dt)}</h3>
          <h5>{formatDate(weatherDataProps.daily[dayProps].dt)}</h5>
        </div>
        {/* IMAGE */}
        <div className={classes.weatherImg}>
          <img
            src={`https://openweathermap.org/img/wn/${weatherDataProps.daily[dayProps].weather[0].icon}@2x.png`}
            alt="weather icon"
          />
        </div>
        {/* TEMP */}
        <div className={classes.temperature}>
          <h4>
            {weatherDataProps.daily[dayProps].temp.day.toFixed(0)}&#x2103;
          </h4>
          <div className={classes.temperatureHiLo}>
            <div className={classes.temperatureHiLoContainer}>
              <ion-icon name="chevron-up-outline" />
              <p>
                {weatherDataProps.daily[dayProps].temp.max.toFixed(0)}&#x2103;
              </p>
            </div>
            <div className={classes.temperatureHiLoContainer}>
              <ion-icon name="chevron-down-outline" />
              <p>
                {weatherDataProps.daily[dayProps].temp.min.toFixed(0)}&#x2103;
              </p>
            </div>
          </div>
        </div>
        {/* CHANCERAIN */}
        <div className={classes.chanceRain}>
          <ion-icon name="umbrella-outline" />
          <h5>
            &ensp;{(weatherDataProps.daily[dayProps].pop * 100).toFixed(0)}%
          </h5>
        </div>
        {/* DESCRIPTION */}
        <div className={classes.description}>
          <h5>{weatherDataProps.daily[dayProps].weather[0].description}</h5>
        </div>
        {/* WINDSPEED */}
        <div className={classes.windSpeed}>
          <ion-icon
            name="arrow-up-circle-outline"
            style={{
              transform: `rotate(${weatherDataProps.daily[dayProps].wind_deg}deg)`,
            }}
          />
          <h5>
            &ensp;{weatherDataProps.daily[dayProps].wind_speed.toFixed(1)}
            &ensp;m/s
          </h5>
        </div>
        {/* SUNRISE */}
        <div className={classes.sunrise}>
          <div className={classes.sunTime}>
            <ion-icon name="chevron-up-outline" />
            <h5>{formatTime(weatherDataProps.daily[dayProps].sunrise)}</h5>
          </div>
          <ion-icon name="sunny-outline" />
          <div className={classes.sunTime}>
            <ion-icon name="chevron-down-outline" />
            <h5>{formatTime(weatherDataProps.daily[dayProps].sunset)}</h5>
          </div>
        </div>
      </div>
    );
  }

  // FAILED API CALL
  if (errorProps) {
    content = (
      <div className={classes.weatherCardError}>
        <p className={classes.error}>{errorProps}</p>
      </div>
    );
  }

  return content;
};

export default WeatherCard;
