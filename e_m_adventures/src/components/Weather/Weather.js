import React, { useState, useEffect } from 'react';

import classes from './Weather.module.css';
import WeatherCard from './WeatherCard/WeatherCard';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataError, setWeatherDataError] = useState('');

  // const apikey = 'b0ea585de7608342c1947e606b266dd4';
  const apikey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=54.139020&lon=-2.717006&exclude=minutely,hourly,alerts&units=metric&appid=${apikey}`
        );
        if (!data.ok) throw new Error('Problem getting weather data');

        const jsonData = await data.json();

        setWeatherData({ ...jsonData });
      } catch (error) {
        console.error(error);
        setWeatherDataError(error.message);
      }
    };
    fetchData();
  }, [apikey]);

  return (
    <div className={classes.weather}>
      <h2>Weather</h2>
      <div className={classes.weatherContainer}>
        <WeatherCard
          dayProps={0}
          weatherDataProps={weatherData}
          errorProps={weatherDataError}
        />
        <WeatherCard
          dayProps={1}
          weatherDataProps={weatherData}
          errorProps={weatherDataError}
        />
        <WeatherCard
          dayProps={2}
          weatherDataProps={weatherData}
          errorProps={weatherDataError}
        />
        <WeatherCard
          dayProps={3}
          weatherDataProps={weatherData}
          errorProps={weatherDataError}
        />
      </div>
    </div>
  );
};

export default Weather;
