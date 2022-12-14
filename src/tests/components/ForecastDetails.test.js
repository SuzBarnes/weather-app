import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    humidity: 20,
    wind: {
      speed: 10,
      direction: "NE",
    },
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("renders correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastDetails forecast={validProps} />
    );

    expect(getByText("Mon Apr 30 2018")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );

    expect(getByText("Humidity: 20%,")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );

    expect(getByText("Wind Speed: 10mph,")).toHaveAttribute(
      "class",
      "forecast-details__wind-speed"
    );

    expect(getByText("Wind Direction: NE")).toHaveAttribute(
      "class",
      "forecast-details__wind-direction"
    );

    expect(getByText("Highs of 22°C,")).toHaveAttribute(
      "class",
      "forecast-details__temperature-max"
    );

    expect(getByTestId("forecast-min-temperature")).toHaveClass(
      "forecast-details__temperature-min"
    );
  });
});
