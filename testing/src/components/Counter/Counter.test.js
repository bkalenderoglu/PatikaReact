//render --> renders any component
//screen --> catch object through dom

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => {
    render(<Counter />);
     count = screen.getByText("0");
     increaseBtn = screen.getByText("Increase");
     decreaseBtn = screen.getByText("Decrease");
  });

  beforeAll(() => {
      console.log("Run only once before all tests..");
  });

  afterEach(() => {
        console.log("Run once after each test..");
  });

  afterAll(() => {
    console.log("Run once after all tests..");
  });

  test("increase btn", () => {
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });
})



