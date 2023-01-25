import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders expected components", () => {
  render(<App />);
  const powerballPlaceholder = screen.getByText("PB");
  const deleteButton = screen.getByTestId("delete-button");
  const fetchButton = screen.getByTestId("fetch-button");

  expect(powerballPlaceholder).toBeInTheDocument();
  expect(deleteButton).toBeInTheDocument();
  expect(fetchButton).toBeInTheDocument();
});
