import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import CartStoreProvider, { useCartStore } from "./cartstore";

const RootComponent = () => {
  return (
    <CartStoreProvider>
      <ChildComponent />
    </CartStoreProvider>
  );
};

const ChildComponent = () => {
  const { products, itemsCart, addItem, subItem, totalCart, totalFreight } =
    useCartStore();
  return (
    <>
      {products.map((product) => (
        <div>
          <p data-testid={product.id}>{product.name}</p>
          <button
            type="button"
            onClick={() => addItem(product.id)}
            data-testid={`button-product-${product.id}`}
          >
            Adicionar
          </button>
        </div>
      ))}
      {itemsCart.map((item) => {
        return (
          <div key={item.id} data-testid={`cart-${item.id}`}>
            <p data-testid={`name-cart-${item.id}`}>{item.name}</p>
            <p data-testid={`price-cart-${item.id}`}>R$ {item.price}</p>
            <p data-testid={`amount-cart-${item.id}`}>Qtd: {item.amount}</p>
            <div>
              <button
                type="button"
                onClick={() => addItem(item.id)}
                data-testid={`button-cart-add-${item.id}`}
              >
                +
              </button>
              <button
                type="button"
                onClick={() => subItem(item.id)}
                data-testid={`button-cart-sub-${item.id}`}
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <p>Total: {totalCart}</p>
      {totalFreight !== 0 && (
        <p>Frete: {totalFreight > 100 ? "Grátis" : totalFreight}</p>
      )}
    </>
  );
};

describe("Test functions cart store", () => {
  it("should add new product from product", () => {
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
