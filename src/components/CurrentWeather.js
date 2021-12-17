import React from "react";

import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

const Weather = (props) => {
  return (
    <div className="App">
      <body className="weather-content">
        <div className="real-weather">
          <img
            className="live-weather"
            src={mostlycloudy}
            alt="mostlycloudy icon"
          />
          <p className="weather-status"> overcast clouds</p>
          <span className="temperature">
            <b>Temperature</b>{props.minTemp}&deg; to {props.maxTemp}&deg;c
          </span>
          <div>
            <span className="humidity">
              <b>Humidity </b>{props.humidity}%
            </span>
            <span className="pressure">
              <b>Pressure </b>{props.pressure}
            </span>
          </div>
        </div>
        
      </body>
    </div>
  );
};
export default Weather;
