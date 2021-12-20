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
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} for current weather
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key} for hourly weather

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      minTemp: undefined,
      maxTemp: undefined,
      humidity: undefined,
      pressure: undefined,
      weatherIcon: undefined,
      weatherIcon24: undefined,
      error: false,
      country: undefined,
      windDeg: undefined,
      windSpeed: undefined,
      lat: undefined,
      lon: undefined,
      temp0: undefined,
      temp3: undefined,
      temp6: undefined,
      temp9: undefined,
      temp12: undefined,
      temp15: undefined,
      temp18: undefined,
      temp21: undefined,
    };

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

  
  getWeather = async (e) => {
    e.preventDefault();

    const Country = e.target.elements.country.value;

    if (Country) {
      // api for current weather
      const api_call = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${Country}&appid=${API_Key}`
      );
      const reply = await api_call.json();
      console.log(reply);

      this.setState({
        country: reply.name,
        minTemp: this.callCelsius(reply.main.temp_min),
        maxTemp: this.callCelsius(reply.main.temp_max),
        humidity: reply.main.humidity,
        pressure: reply.main.pressure,
        windDeg: reply.wind.deg,
        windSpeed: reply.wind.speed,
        weatherStatus: reply.weather[0].description,
        celsius: this.callCelsius(reply.main.temp),
        lat: reply.coord.lat,
        lon: reply.coord.lon,
      });

      this.get_WeatherIcon(reply.weather[0].id);

      // api for hourly weather
      var lat = this.state.lat;
      var lon = this.state.lon;
      const api24_call = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_Key}`
      );
      const reply24 = await api24_call.json();
      console.log(reply24);

      this.setState({
        temp0: this.callCelsius(reply24.daily[0].temp.day),
        temp3: this.callCelsius(reply24.daily[1].temp.day),
        temp6: this.callCelsius(reply24.daily[2].temp.day),
        temp9: this.callCelsius(reply24.daily[3].temp.day),
        temp12: this.callCelsius(reply24.daily[4].temp.day),
        temp15: this.callCelsius(reply24.daily[5].temp.day),
        temp18: this.callCelsius(reply24.daily[6].temp.day),
        temp21: this.callCelsius(reply24.daily[7].temp.day),
        hour0: "00:00",
        hour3: "03:00",
        hour6: "06:00",
        hour9: "09:00",
        hour12: "12:00",
        hour15: "15:00",
        hour18: "18:00",
        hour21: "21:00",
      });

      // array of id for each hour
      const index = reply24.daily.map((el) => {
        return el.weather[0].id;
      });
      console.log(index);

      var bloqId = index[0];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({ weatherIcon24: this.weatherIcon.partlycloudyIcon });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({ weatherIcon24: this.weatherIcon.mostlycloudyIcon });
          break;
        default:
          this.setState({ weatherIcon24: this.weatherIcon.unknownIcon });
      }
      bloqId = index[1];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24_3: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24_3: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24_3: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24_3: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24_3: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24_3: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({ weatherIcon24_3: this.weatherIcon.partlycloudyIcon });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({ weatherIcon24_3: this.weatherIcon.mostlycloudyIcon });
          break;
        default:
          this.setState({ weatherIcon24_3: this.weatherIcon.unknownIcon });
      }
      bloqId = index[2];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24_6: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24_6: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24_6: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24_6: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24_6: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24_6: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({ weatherIcon24_6: this.weatherIcon.partlycloudyIcon });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({ weatherIcon24_6: this.weatherIcon.mostlycloudyIcon });
          break;
        default:
          this.setState({ weatherIcon24_6: this.weatherIcon.unknownIcon });
      }
      bloqId = index[3];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24_9: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24_9: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24_9: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24_9: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24_9: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24_9: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({ weatherIcon24_9: this.weatherIcon.partlycloudyIcon });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({ weatherIcon24_9: this.weatherIcon.mostlycloudyIcon });
          break;
        default:
          this.setState({ weatherIcon24_9: this.weatherIcon.unknownIcon });
      }
      bloqId = index[4];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24_12: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24_12: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24_12: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24_12: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24_12: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24_12: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({
            weatherIcon24_12: this.weatherIcon.partlycloudyIcon,
          });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({
            weatherIcon24_12: this.weatherIcon.mostlycloudyIcon,
          });
          break;
        default:
          this.setState({ weatherIcon24_12: this.weatherIcon.unknownIcon });
      }
      bloqId = index[5];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24_15: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24_15: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24_15: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24_15: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24_15: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24_15: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({
            weatherIcon24_15: this.weatherIcon.partlycloudyIcon,
          });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({
            weatherIcon24_15: this.weatherIcon.mostlycloudyIcon,
          });
          break;
        default:
          this.setState({ weatherIcon24_15: this.weatherIcon.unknownIcon });
      }
      bloqId = index[6];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24_18: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24_18: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24_18: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24_18: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24_18: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24_18: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({
            weatherIcon24_18: this.weatherIcon.partlycloudyIcon,
          });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({
            weatherIcon24_18: this.weatherIcon.mostlycloudyIcon,
          });
          break;
        default:
          this.setState({ weatherIcon24_18: this.weatherIcon.unknownIcon });
      }
      bloqId = index[7];
      switch (true) {
        case bloqId < 300:
          this.setState({ weatherIcon24_21: this.weatherIcon.stormIcon });
          break;
        case bloqId >= 300 && bloqId <= 499:
          this.setState({ weatherIcon24_21: this.weatherIcon.drizzleIcon });
          break;
        case bloqId >= 500 && bloqId <= 599:
          this.setState({ weatherIcon24_21: this.weatherIcon.rainIcon });
          break;
        case bloqId >= 600 && bloqId <= 699:
          this.setState({ weatherIcon24_21: this.weatherIcon.snowIcon });
          break;
        case bloqId >= 700 && bloqId <= 799:
          this.setState({ weatherIcon24_21: this.weatherIcon.fog });
          break;
        case bloqId === 800:
          this.setState({ weatherIcon24_21: this.weatherIcon.clearIcon });
          break;
        case bloqId === 801:
          this.setState({
            weatherIcon24_21: this.weatherIcon.partlycloudyIcon,
          });
          break;
        case bloqId >= 801 && bloqId <= 805:
          this.setState({
            weatherIcon24_21: this.weatherIcon.mostlycloudyIcon,
          });
          break;
        default:
          this.setState({ weatherIcon24_21: this.weatherIcon.unknownIcon });
      }
    } else {
      this.setState({ error: true });
      error();
    }
  };

  get_WeatherIcon(bloqId) {
    switch (true) {
      case bloqId < 300:
        this.setState({
          weatherIcon: this.weatherIcon.stormIcon,
          color: "#9aa1a9",
        });
        break;
      case bloqId >= 300 && bloqId <= 499:
        this.setState({
          weatherIcon: this.weatherIcon.drizzleIcon,
          color: "#00BCD4",
        });
        break;
      case bloqId >= 500 && bloqId <= 599:
        this.setState({
          weatherIcon: this.weatherIcon.rainIcon,
          color: "#00BCD4",
        });
        break;
      case bloqId >= 600 && bloqId <= 699:
        this.setState({
          weatherIcon: this.weatherIcon.snowIcon,
          color: "#9E9E9E",
        });
        break;
      case bloqId >= 700 && bloqId <= 799:
        this.setState({ weatherIcon: this.weatherIcon.fog });
        break;
      case bloqId === 800:
        this.setState({
          weatherIcon: this.weatherIcon.clearIcon,
          color: "#2196F3",
        });
        break;
      case bloqId === 801:
        this.setState({
          weatherIcon: this.weatherIcon.partlycloudyIcon,
          color: "#03a9f4",
        });
        break;
      case bloqId >= 801 && bloqId <= 805:
        this.setState({
          weatherIcon: this.weatherIcon.mostlycloudyIcon,
          color: "#03a9f4",
        });
        break;
      default:
        this.setState({ weatherIcon: this.weatherIcon.unknownIcon });
    }
  }

  // get temperature in celsius
  callCelsius(temperature) {
    let cels = Math.floor(temperature - 273.15);
    return cels;
  }

  render() {
    // to change the background when weather changed
    // const style = {
    //   background: this.state.color
    // }
    // and add style={style} to weather-content

    return (
      <div className="weather-content">
        <Search searchWeather={this.getWeather} />
        <Weather
          minTemp={this.state.minTemp}
          maxTemp={this.state.maxTemp}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
          weatherStatus={this.state.weatherStatus}
          weatherIcon={this.state.weatherIcon}
          country={this.state.country}
          windDeg={this.state.windDeg}
          windSpeed={this.state.windSpeed}
        />
        <div className="full-day-weather">
          <WeatherItem
            temp={this.state.temp0}
            hour={this.state.hour0}
            weatherIcon24={this.state.weatherIcon24}
          />
          <WeatherItem
            temp={this.state.temp3}
            hour={this.state.hour3}
            weatherIcon24={this.state.weatherIcon24_3}
          />
          <WeatherItem
            temp={this.state.temp6}
            hour={this.state.hour6}
            weatherIcon24={this.state.weatherIcon24_6}
          />
          <WeatherItem
            temp={this.state.temp9}
            hour={this.state.hour9}
            weatherIcon24={this.state.weatherIcon24_9}
          />
          <WeatherItem
            temp={this.state.temp12}
            hour={this.state.hour12}
            weatherIcon24={this.state.weatherIcon24_12}
          />
          <WeatherItem
            temp={this.state.temp15}
            hour={this.state.hour15}
            weatherIcon24={this.state.weatherIcon24_15}
          />
          <WeatherItem
            temp={this.state.temp18}
            hour={this.state.hour18}
            weatherIcon24={this.state.weatherIcon24_18}
          />
          <WeatherItem
            temp={this.state.temp21}
            hour={this.state.hour21}
            weatherIcon24={this.state.weatherIcon24_21}
          />
        </div>
      </div>
    );
  }
}

// get error message when user not enter a country
function error() {
  return alert("PLease! Enter your country");
}

export default App;
