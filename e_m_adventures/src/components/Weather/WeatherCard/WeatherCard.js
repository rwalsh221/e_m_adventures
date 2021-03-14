import React, { useState, useEffect } from 'react';

import classes from './WeatherCard.module.css';
import { formatTime, formatDate, getDay } from '../../../helpers/utilities';

const WeatherCard = (props) => {
  const [futureWeatherData, setFutureWeatherData] = useState(null);

  const apikey = 'b0ea585de7608342c1947e606b266dd4';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // NEEDS LONG LAT FOR SEARCH. GET FROM CURRENTWEATHER.
        const futureWeather = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=54.139020&lon=-2.717006&exclude=minutely,hourly,alerts&units=metric&appid=${apikey}`
        );

        let futureWeatherData = await futureWeather.json();
        console.log(futureWeatherData);

        console.log(futureWeatherData);

        if (futureWeatherData.cod !== 429)
          setFutureWeatherData({ ...futureWeatherData });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [setFutureWeatherData]);

  let content = null;

  if (futureWeatherData) {
    content = (
      <div className={classes.weatherCard}>
        {/* DAY */}
        <div className={classes.day}>
          <h5>{getDay(futureWeatherData.daily[props.day].dt)}</h5>
          <h5>{formatDate(futureWeatherData.daily[props.day].dt)}</h5>
        </div>
        {/* IMAGE */}
        <div className={classes.weatherImg}>
          <img
            src={`http://openweathermap.org/img/wn/${
              futureWeatherData.daily[props.day].weather[0].icon
            }@2x.png`}
            alt="weather icon"
          ></img>
        </div>
        {/* TEMP */}
        <div className={classes.temperature}>
          <h5>{futureWeatherData.daily[props.day].temp.day}</h5>
          <div className={classes.temperatureHiLo}>
            <h6>{futureWeatherData.daily[props.day].temp.max}</h6>
            <h6>{futureWeatherData.daily[props.day].temp.min}</h6>
          </div>
        </div>
        {/* CHANCERAIN */}
        <div className={classes.chanceRain}>
          <h5>{futureWeatherData.daily[props.day].pop * 100}%</h5>
        </div>
        {/* DESCRIPTION */}
        <div className={classes.description}>
          <h5>{futureWeatherData.daily[props.day].weather[0].description}</h5>
        </div>
        {/* WINDSPEED */}
        <div className={classes.windSpeed}>
          <h5>{futureWeatherData.daily[props.day].wind_speed}mp/h</h5>
        </div>
        {/* SUNRISE */}
        <div className={classes.sunrise}>
          {futureWeatherData.daily[props.day].sunrise}
          {futureWeatherData.daily[props.day].sunset}
        </div>
      </div>
    );
  }

  let setContentHandler = () => {};

  setContentHandler();

  return (
    <React.Fragment>
      {content ? content : <div className={classes.weatherNull}></div>}
    </React.Fragment>
  );
};

export default WeatherCard;
