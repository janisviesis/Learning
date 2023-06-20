import { render, screen } from "@testing-library/react";
import Map from "./Map";
import Filter from "./Filter";
import Reduce from "./Reduce";

test("renders map result", () => {
  render(<Map />);
  const roots = screen.getByText("[1,2,3]");
  expect(roots).toBeInTheDocument();
});

test("renders filter result", () => {
  render(<Filter />);
  expect(screen.getAllByRole("listitem")).toHaveLength(4);
});

test("renders reduce result", () => {
  render(<Reduce />);
  expect(screen.getByText("85")).toBeInTheDocument();
});
