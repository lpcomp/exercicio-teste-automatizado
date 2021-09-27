import styles from "./freightCalculation.module.scss";

import { clients } from "../../server/data.json";

import CartStoreProvider from "../../context/cartstore";

import { ProductCard } from "../../components/productCard";
import { Cart } from "../../components/cart";

export function ScreenCart() {
  return (
    <>
      <CartStoreProvider>
        <div className={styles.container}>
          <h1>Exercício 4 - Cálculo de Frete</h1>
          <div className={styles.userContent} data-testid="userStore">
            <p>Usuário: {clients[0].name}</p>
            <p>CEP: {clients[0].CEP}</p>
          </div>
          <ProductCard />

          <Cart />
        </div>
      </CartStoreProvider>
    </>
  );
}
