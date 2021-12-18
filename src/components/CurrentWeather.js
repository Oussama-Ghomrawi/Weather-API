import React from "react";

// import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

const Weather = (props) => {
  
  return (
    <div className="App">
      <body className="weather-content">
        <div className="real-weather">
          <img
            className="live-weather"
            src={props.weatherIcon}
            alt="mostlycloudy icon"
          />
          <p className="weather-status">{props.weatherStatus}</p>
          {minmaxTemp(props.minTemp,props.maxTemp)}
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

function minmaxTemp(min,max){
  return(
<span className="temperature">
            <b>Temperature</b>{min}&deg; to {max}&deg;c
          </span>
  );
}
export default Weather;
