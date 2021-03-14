import React from 'react';

import classes from './Weather.module.css';
import WeatherCard from './WeatherCard/WeatherCard';

const Weather = (props) => {
  return (
    <div className={classes.weather}>
      <h2>Weather</h2>
      <div className={classes.weatherContainer}>
        <WeatherCard day={0} />
        <WeatherCard day={1} />
        <WeatherCard day={2} />
        <WeatherCard day={3} />
      </div>
    </div>
  );
};

export default Weather;
