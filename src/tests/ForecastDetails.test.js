import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1111111,
    humidity: 20,
    wind: 10,
    temperature: {
      min: 12,
      max: 22,
    },
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <ForecastDetails
        date={validProps.date}
        humidity={validProps.humidity}
        wind={validProps.wind}
        temperature={validProps.temperature}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
