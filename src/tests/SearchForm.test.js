import React from "react";
import { fireEvent, getByLabelText, render, screen } from "@testing-library/react";
import App from "../components/App";
import SearchForm from "../components/SearchForm";
import LocationDetails from "../components/LocationDetails";

describe("Search Form", () => {
  it("renders search button correctly", () => {
    const validProps = {
      searchText: {},
      setSearchText: () => { },
      onSubmit: () => { },
    };
    const { getByText } = render(
      <SearchForm
        searchText=""
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    const button = screen.getAllByRole("button");
    expect(button).toHaveLength(1);
    expect(getByText(/search/i)).toBeInstanceOf(HTMLButtonElement);
  });

  //   it("click handler is called", () => {
  //     const validProps = {
  //       searchText: {},
  //     };
  //     const { getByText } = render(
  //       <>
  //         <App />
  //         <LocationDetails city="Manchester" country="GB" />
  //         <SearchForm searchText={validProps.searchText} />
  //       </>
  //     );
  //     const locationManchester = screen.getByRole("textbox", "Manchester");
  //     fireEvent.change(locationManchester, { target: { value: "LONDON" } });
  //     fireEvent.click(getByText(/search/i));
  //     expect(LocationDetails.city).toBe("London");
  //   });
});
