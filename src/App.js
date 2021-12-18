import React from "react";

import Weather from "./components/CurrentWeather";
import Search from "./components/Search";
import WeatherItem from "./components/WeatherItem";
import "./App.css";

import cloudy from "./img/weather-icons/cloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";

// import fakeWeatherData from "./fakeWeatherData.json";

// import placeholder from "./img/weather-icons/shawerma.jpg";
// import FullDayWeather from "./components/FullDayWeather";
// import FakeWeather from "./data/FakeWeather.json";

const API_Key = "970252397f2664083a2afd9d6b06cf96";
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      minTemp: undefined,
      maxTemp: undefined,
      humidity: undefined,
      pressure: undefined,
      weatherIcon: undefined,
      temp12: undefined,
      temp15: undefined,
      temp18: undefined,
      temp21: undefined,
      temp3: undefined,
      temp6: undefined,
      temp9: undefined,
    };

    this.getWeather();

    this.weatherIcon = {
      cloudyIcon: cloudy,
      clearIcon: clear,
      drizzleIcon: drizzle,
      fogIcon: fog,
      mostlycloudyIcon: mostlycloudy,
      partlycloudyIcon: partlycloudy,
      rainIcon: rain,
      snowIcon: snow,
      stormIcon: storm,
      unknownIcon: unknown,
    };
  }

  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_Key}`
    );

    const reply = await api_call.json();
    console.log(reply);

    this.setState({
      country: reply.name,
      minTemp: this.callCelsius(reply.main.temp_min),
      maxTemp: this.callCelsius(reply.main.temp_max),
      humidity: reply.main.humidity,
      pressure: reply.main.pressure,
      weatherStatus: reply.weather[0].description,
      celsius: reply.main.temp,
      weatherIcon: this.weatherIcon.mostlycloudyIcon,
      // temp12: reply.list[0].main.temp,
      // temp15: reply.list[1].main.temp,
      // temp18: reply.list[2].main.temp,
      // temp21: reply.list[3].main.temp,
      // temp3: reply.list[4].main.temp,
      // temp6: reply.list[5].main.temp,
      // temp9: reply.list[6].main.temp,
    });
  };

  callCelsius(temp) {
    let cels = Math.floor(temp - 273.15);
    return cels;
  }

  render() {
    return (
      <div className="App">
        <Search />
        <Weather
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          weatherStatus={this.state.weatherStatus}
          weatherIcon={this.state.weatherIcon}
        />
        <div className="full-day-weather">
          <WeatherItem temp={this.state.temp3} />
          <WeatherItem temp={this.state.temp6} />
          <WeatherItem temp={this.state.temp9} />
          <WeatherItem temp={this.state.temp12} />
          <WeatherItem temp={this.state.temp15} />
          <WeatherItem temp={this.state.temp18} />
          <WeatherItem temp={this.state.temp21} />
        </div>
      </div>
    );
  }
}

export default App;
