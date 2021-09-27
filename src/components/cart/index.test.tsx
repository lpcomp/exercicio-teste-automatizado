import { render, screen, fireEvent } from "@testing-library/react";
import { Cart } from "./index";
import { ProductCard } from "../productCard";

import CartStoreProvider from "../../context/cartstore";

const RootComponent = () => {
  return (
    <CartStoreProvider>
      <ProductCard />
      <Cart />
    </CartStoreProvider>
  );
};

describe("Cart Component", () => {
  it("should render without crashing", () => {
    render(<RootComponent />);

    expect(screen.getByTestId("cartStore")).toBeInTheDocument();
    expect(screen.getByTestId("totalCart")).toBeInTheDocument();
  });

  it("should create new product in cart", () => {
    render(<RootComponent />);
    const button = screen.getByTestId("button-product-4541");
    fireEvent.click(button);
    expect(screen.getByTestId("cart-4541")).toBeInTheDocument();
  });

  it("should add product from cart", () => {
    render(<RootComponent />);
    const button = screen.getByTestId("button-product-4541");
    fireEvent.click(button);

    const buttonAddCart = screen.getByTestId("button-cart-add-4541");
    fireEvent.click(buttonAddCart);
    expect(screen.queryByText("Qtd: 2")).toBeInTheDocument();
  });

  it("should subtract product from cart", () => {
    render(<RootComponent />);
    const button = screen.getByTestId("button-product-4541");
    fireEvent.click(button);

    const buttonAddCart = screen.getByTestId("button-cart-add-4541");
    fireEvent.click(buttonAddCart);

    const buttonSubCart = screen.getByTestId("button-cart-sub-4541");
    fireEvent.click(buttonSubCart);

    expect(screen.queryByText("Qtd: 1")).toBeInTheDocument();
  });

  it("should remove product from cart", () => {
    render(<RootComponent />);
    const button = screen.getByTestId("button-product-4541");
    fireEvent.click(button);

    const buttonSubCart = screen.getByTestId("button-cart-sub-4541");
    fireEvent.click(buttonSubCart);

    expect(screen.queryByText("cart-4541")).not.toBeInTheDocument();
  });

  it("should sum total price from cart", () => {
    render(<RootComponent />);
    const button = screen.getByTestId("button-product-4541");
    fireEvent.click(button);

    expect(screen.queryByText("Total: 10")).toBeInTheDocument();
  });

  it("should calculate freight price from cart", () => {
    render(<RootComponent />);
    const button = screen.getByTestId("button-product-4541");
    fireEvent.click(button);

    expect(screen.queryByText("Frete: 15")).toBeInTheDocument();
  });

  it("should calculate freight price above 100 from cart", () => {
    render(<RootComponent />);
    const buttonItem1 = screen.getByTestId("button-product-4541");
    fireEvent.click(buttonItem1);
    const buttonItem2 = screen.getByTestId("button-product-4542");
    fireEvent.click(buttonItem2);

    expect(screen.queryByText("Frete: Grátis")).toBeInTheDocument();
  });
});
