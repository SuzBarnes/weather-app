import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date"> {formattedDate}</div>
      <div className="forecast-details__temperature-max">
        Highs of {forecast.temperature.max}&deg;C,
      </div>
      <div
        className="forecast-details__temperature-min"
        data-testid="forecast-min-temperature"
      >
        Lows of {forecast.temperature.min}&deg;C,
      </div>
      <div className="forecast-details__humidity">
        Humidity: {forecast.humidity}%,
      </div>

      <div className="forecast-details__wind-speed">
        Wind Speed: {forecast.wind.speed}mph,
      </div>

      <div className="forecast-details__wind-direction">
        Wind Direction: {forecast.wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  }).isRequired,
};

export default ForecastDetails;
