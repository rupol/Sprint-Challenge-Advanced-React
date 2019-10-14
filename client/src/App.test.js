import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

afterEach(rtl.cleanup);

it("renders the heading", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/women's world cup trends/i);
  expect(element).toBeVisible();
});

it("renders the dark mode button", () => {
  const wrapper = rtl.render(<App />);
  const element = wrapper.getByText(/dark mode/i);
  expect(element).toBeVisible();
});
