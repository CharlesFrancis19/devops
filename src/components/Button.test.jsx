import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("renders button text", () => {
  render(<Button />);
  const buttonElement = screen.getByText("Click Me");
  expect(buttonElement).toBeInTheDocument();
});