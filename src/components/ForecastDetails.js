import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  //   console.log(temperature.min, "<== min temperature");
  // console.log(formattedDate);
  // console.log(forecast.date);
  return (
    <div className="forecast-details">
      <uo>
        <div className="forecast-details__date"> {formattedDate}</div>
        <div className="forecast-details__temperaturemax">
          Highs of {forecast.temperature.max}&deg;C,
        </div>
        <uo>
          <div
            className="forecast-details__temperaturemin"
            data-testid="forecast-mintemperature"
          >
            Lows of {forecast.temperature.min}&deg;C,
          </div>
        </uo>
        <div className="forecast-details__humidity">
          Humidity: {forecast.humidity}%,
        </div>

        <div className="forecast-details__windspeed">
          Wind Speed: {forecast.wind.speed}mph,
        </div>

        <div className="forecast-details__winddirection">
          Wind Direction: {forecast.wind.direction}
        </div>
      </uo>
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
