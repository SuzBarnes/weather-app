import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const { city, country } = location;
  const { date, humidity, wind, temperature } = forecasts[0];
  // console.log("+++++++++++");
  // console.log(forecasts[0]);
  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails
        date={date}
        humidity={humidity}
        wind={wind}
        temperature={temperature}
      />
    </div>
  );
}
App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      humidity: PropTypes.number,
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }),
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  // forecast: PropTypes.shape({
  //   date: PropTypes.number,
  //   humidity: PropTypes.number,
  //   wind: PropTypes.shape({
  //     speed: PropTypes.number,
  //     direction: PropTypes.string,
  //   }),
  //   temperature: PropTypes.shape({
  //     min: PropTypes.number,
  //     max: PropTypes.number,
  //   }),
  // }).isRequired,
};
export default App;
