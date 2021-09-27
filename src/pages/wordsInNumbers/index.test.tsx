import { unmountComponentAtNode } from "react-dom";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { WordsInNumbers } from "./index";

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

describe("Words in numbers Screen", () => {
  it("should render without crashing", () => {
    render(<WordsInNumbers />);

    expect(screen.getByTestId("wordsInNumbersScreen")).toBeInTheDocument();
    expect(screen.getByTestId("inputText")).toBeInTheDocument();
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByTestId("totalsum")).toBeInTheDocument();
    expect(
      screen.queryByText("O valor total da palavra é prima?")
    ).not.toBeInTheDocument();
  });

  it("should be calc total value word", () => {
    render(<WordsInNumbers />);

    const input = screen.getByTestId("inputText");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "aa" } });
    fireEvent.click(button);
    expect(
      screen.queryByText("O valor total da palavra é: 2")
    ).toBeInTheDocument();
  });

  it("should be calc prime number", () => {
    render(<WordsInNumbers />);

    const input = screen.getByTestId("inputText");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "aa" } });
    fireEvent.click(button);
    expect(
      screen.queryByText("O valor total da palavra é prima? sim")
    ).toBeInTheDocument();
  });

  it("should be calc happy number", () => {
    render(<WordsInNumbers />);

    const input = screen.getByTestId("inputText");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "aaaaaaa" } });
    fireEvent.click(button);
    expect(
      screen.queryByText("O valor total da palavra é feliz?: sim")
    ).toBeInTheDocument();
  });

  it("should be calc multiple of 3", () => {
    render(<WordsInNumbers />);

    const input = screen.getByTestId("inputText");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "aaaaaa" } });
    fireEvent.click(button);
    expect(
      screen.queryByText("O valor total da palavra é multiplo de 3?: sim")
    ).toBeInTheDocument();
  });

  it("should be calc multiple of 5", () => {
    render(<WordsInNumbers />);

    const input = screen.getByTestId("inputText");
    const button = screen.getByTestId("button");

    fireEvent.change(input, { target: { value: "aaaaa" } });
    fireEvent.click(button);
    expect(
      screen.queryByText("O valor total da palavra é multiplo de 5?: sim")
    ).toBeInTheDocument();
  });
});
