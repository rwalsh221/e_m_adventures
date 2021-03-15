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
          <h3>{getDay(futureWeatherData.daily[props.day].dt)}</h3>
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
          <h4>
            {futureWeatherData.daily[props.day].temp.day.toFixed(0)}&#x2103;
          </h4>
          <div className={classes.temperatureHiLo}>
            <div className={classes.temperatureHiLoContainer}>
              <ion-icon name="chevron-up-outline"></ion-icon>{' '}
              <p>
                {futureWeatherData.daily[props.day].temp.max.toFixed(0)}&#x2103;
              </p>
            </div>
            <div className={classes.temperatureHiLoContainer}>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <p>
                {futureWeatherData.daily[props.day].temp.min.toFixed(0)}&#x2103;
              </p>
            </div>
          </div>
        </div>
        {/* CHANCERAIN */}
        <div className={classes.chanceRain}>
          <ion-icon name="umbrella-outline"></ion-icon>
          <h5>&ensp;{futureWeatherData.daily[props.day].pop * 100}%</h5>
        </div>
        {/* DESCRIPTION */}
        <div className={classes.description}>
          <h5>{futureWeatherData.daily[props.day].weather[0].description}</h5>
        </div>
        {/* WINDSPEED */}
        <div className={classes.windSpeed}>
          <ion-icon
            name="arrow-up-circle-outline"
            style={{
              transform: `rotate(${
                futureWeatherData.daily[props.day].wind_deg
              }deg)`,
            }}
          ></ion-icon>
          <h5>
            &ensp;{futureWeatherData.daily[props.day].wind_speed.toFixed(1)}
            &ensp;m/s
          </h5>
        </div>
        {/* SUNRISE */}
        <div className={classes.sunrise}>
          <div className={classes.sunTime}>
            <ion-icon name="chevron-up-outline"></ion-icon>
            <h5>{formatTime(futureWeatherData.daily[props.day].sunrise)}</h5>
          </div>
          <ion-icon name="sunny-outline"></ion-icon>
          <div className={classes.sunTime}>
            <ion-icon name="chevron-down-outline"></ion-icon>
            <h5>{formatTime(futureWeatherData.daily[props.day].sunset)}</h5>
          </div>
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
