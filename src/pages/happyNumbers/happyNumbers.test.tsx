import { unmountComponentAtNode } from "react-dom";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { HappyNumbers } from "./happyNumbers";

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

describe("Happy Numbers Screen", () => {
  it("should render without crashing", () => {
    act(() => {
      render(<HappyNumbers />, container);
    });

    expect(screen.getByTestId("happyScreen")).toBeInTheDocument();
    expect(screen.getByTestId("inputNumber")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByTestId("isHappy")).toBeInTheDocument();
  });

  it("should calc happy number", () => {
    act(() => {
      render(<HappyNumbers />, container);
    });

    const input = screen.getByTestId("inputNumber");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "10" } });
    fireEvent.click(button);
    expect(screen.queryByText("É um número Feliz")).toBeInTheDocument();
    expect(screen.queryByText("Não é um número Feliz")).not.toBeInTheDocument();
  });

  it("should not calc happy number", () => {
    // act(() => {
    //   render(<HappyNumbers />, container);
    // });
    render(<HappyNumbers />);

    const input = screen.getByTestId("inputNumber");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "11" } });
    fireEvent.click(button);
    expect(screen.queryByText("É um número Feliz")).not.toBeInTheDocument();
    expect(screen.queryByText("Não é um número Feliz")).toBeInTheDocument();
  });
});
