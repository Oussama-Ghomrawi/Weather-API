import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div className="real-weather">
        {this.props.weatherIcon ? (
          <img
            className="live-weather-icon"
            src={this.props.weatherIcon}
            alt=""
          />
        ) : null}
        {this.props.country ? (
          <p className="country-name">{this.props.country}</p>
        ) : null}
        <p className="weather-status">{this.props.weatherStatus}</p>
        {minmaxTemp(this.props.minTemp, this.props.maxTemp)}
        <div>
          {this.props.humidity ? (
            <span className="humidity">
              <b>Humidity </b>
              {this.props.humidity}%
            </span>
          ) : null}
          {this.props.pressure ? (
            <span className="pressure">
              <b>Pressure </b>
              {this.props.pressure} hPa
            </span>
          ) : null}
        </div>
        {this.props.humidity ? (
          <div className="wind">
            <span>
              <b>Wind </b>
              {this.props.windDeg}&deg;{" "}
            </span>
            <span>
              <b>Speed </b>
              {this.props.windSpeed} m/s
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <span className="temperature">
        <b>Temperature</b>
        {min}&deg; to {max}&deg;c
      </span>
    );
  }
}
export default Weather;
