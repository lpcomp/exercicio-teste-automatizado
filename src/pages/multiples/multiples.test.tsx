import { unmountComponentAtNode } from "react-dom";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { Multiples } from "./multiples";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render without crashing", () => {
  act(() => {
    render(<Multiples />, container);
  });

  expect(screen.getByTestId("multiplesScreen")).toBeInTheDocument();
});

it("should button calc multiples of 3", () => {
  act(() => {
    render(<Multiples />, container);
  });

  const input = screen.getByTestId("inputNumber");
  const button = screen.getByTestId("button");

  fireEvent.change(input, { target: { value: "10" } });
  fireEvent.click(button);
  expect(screen.getByTestId("resultOf3or5").textContent).toBe(
    "O valor da soma de todos os números múltiplos de 3 ou 5 é = 33"
  );
});
