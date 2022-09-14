import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
// import ForecastDetails from "./ForecastDetails";
// import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  return (
    <div className="weather-app">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries forecasts={forecasts} />
      {/* <ForecastDetails forecast={forecast[0]} /> */}
    </div>
  );
}
App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
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
  // forecast: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     date: PropTypes.number,
  //     humidity: PropTypes.number,
  //     wind: PropTypes.number,
  //     temperature: PropTypes.shape({
  //       min: PropTypes.number,
  //       max: PropTypes.number,
  //     }),
  //   })
  // ).isRequired,
};
export default App;
