import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "./index";
import { Cart } from "../cart";

import CartStoreProvider from "../../context/cartstore";

const RootComponent = () => {
  return (
    <CartStoreProvider>
      <ProductCard />
      <Cart />
    </CartStoreProvider>
  );
};

describe("Store Component", () => {
  it("should render without crashing", () => {
    render(<RootComponent />);

    expect(screen.getByTestId("productStore")).toBeInTheDocument();
    expect(screen.getByTestId("product-cart-4541")).toBeInTheDocument();
  });

  it("should add new product from product", () => {
    render(<RootComponent />);
    const button = screen.getByTestId("button-product-4541");
    fireEvent.click(button);
    expect(screen.getByTestId("cart-4541")).toBeInTheDocument();
  });
});
