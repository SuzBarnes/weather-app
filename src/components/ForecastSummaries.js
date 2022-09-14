import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

function ForecastSummaries({ forecasts }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => {
        const { date, description, icon, temperature } = forecast;
        // console.log(forecast);
        return (
          <ForecastSummary
            key={date}
            date={date}
            description={description}
            icon={icon}
            temperature={temperature}
          />
        );
      })}
    </div>
  );
}

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
      }),
    })
  ).isRequired,
};

export default ForecastSummaries;
