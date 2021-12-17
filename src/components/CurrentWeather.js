import React from "react";

import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

const Weather = () => {
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
            <b>Temperature</b>10&deg; to 11&deg;c
          </span>
          <div>
            <span className="humidity">
              <b>Humidity </b>78%
            </span>
            <span className="pressure">
              <b>Pressure </b>1008.48
            </span>
          </div>
        </div>
        
      </body>
    </div>
  );
};
export default Weather;
