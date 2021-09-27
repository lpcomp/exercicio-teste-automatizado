import { useCartStore } from "../../context/cartstore";
import styles from "./cart.module.scss";

export function Cart() {
  const { itemsCart, addItem, subItem, totalCart, totalFreight } =
    useCartStore();

  return (
    <div className={styles.container} data-testid="cartStore">
      <h1>Carrinho</h1>
      <div className={styles.contentCart}>
        {itemsCart.map((item) => {
          return (
            <div key={item.id} data-testid={`cart-${item.id}`}>
              <p>{item.name}</p>
              <p>R$ {item.price}</p>
              <p>Qtd: {item.amount}</p>
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
      </div>
      <p data-testid="totalCart">Total: {totalCart}</p>
      {totalFreight !== 0 && (
        <p data-testid="freight">
          Frete: {totalFreight > 100 ? "Grátis" : totalFreight}
        </p>
      )}
    </div>
  );
}
