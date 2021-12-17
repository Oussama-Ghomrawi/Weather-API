import React, { Component } from "react";
import { render } from "react-dom";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import "./WeatherItem.css";

class WeatherItem extends Component {
  render() {
    return(
      <div className="weather-Item">
            <span>03:00</span>
            <img
              className="Weather-icon"
              src={mostlycloudy}
              alt="mostlycloudy icon"
            />
            <span>8°C</span>
          </div>
    );
  }
}

export default WeatherItem;