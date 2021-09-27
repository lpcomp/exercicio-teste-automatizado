import { unmountComponentAtNode } from "react-dom";
import { act, render, screen } from "@testing-library/react";
import { ScreenCart } from "./index";

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

describe("cart store Screen", () => {
  it("should render without crashing", () => {
    act(() => {
      render(<ScreenCart />, container);
    });

    expect(screen.getByTestId("userStore")).toBeInTheDocument();
    expect(screen.getByTestId("productStore")).toBeInTheDocument();
    expect(screen.getByTestId("cartStore")).toBeInTheDocument();
  });
});
