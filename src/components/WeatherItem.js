import React from "react";

import "./WeatherItem.css";

class WeatherItem extends React.Component {
  render() {
    return (
      <div className="weather-Item">
        <span>{this.props.hour}</span>
        {this.props.weatherIcon24 ? (
          <img className="Weather-icon" src={this.props.weatherIcon24} alt="" />
        ) : null}

        {this.props.temp ? <span>{this.props.temp}&deg;</span> : null}
      </div>
    );
  }
}

export default WeatherItem;
