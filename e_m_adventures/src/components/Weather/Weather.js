import React, { useState, useEffect } from 'react';

import classes from './Weather.module.css';
import WeatherCard from './WeatherCard/WeatherCard';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataError, setWeatherDataError] = useState('');

  const apikey = 'b0ea585de7608342c1947e606b266dd4';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=54.139020&lon=-2.717006&exclude=minutely,hourly,alerts&units=metric&appid=${apikey}`
        );
        if (!data.ok) throw new Error('Problem getting weather data');

        let jsonData = await data.json();

        setWeatherData({ ...jsonData });
      } catch (error) {
        console.error(error);
        setWeatherDataError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.weather}>
      <h2>Weather</h2>
      <div className={classes.weatherContainer}>
        <WeatherCard
          day={0}
          weatherData={weatherData}
          error={weatherDataError}
        />
        <WeatherCard
          day={1}
          weatherData={weatherData}
          error={weatherDataError}
        />
        <WeatherCard
          day={2}
          weatherData={weatherData}
          error={weatherDataError}
        />
        <WeatherCard
          day={3}
          weatherData={weatherData}
          error={weatherDataError}
        />
      </div>
    </div>
  );
};

export default Weather;
