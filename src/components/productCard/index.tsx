import { useCartStore } from "../../context/cartstore";
import styles from "./productCard.module.scss";

// interface defaultProduct {
//   product: {
//     id: number;
//     name: string;
//     price: number;
//     amount: number;
//   };
// }

export function ProductCard() {
  const { products, addItem } = useCartStore();
  return (
    <div className={styles.container} data-testid="productStore">
      <h1>Loja</h1>
      <div className={styles.contentStore}>
        {products.map((product) => (
          <div data-testid={`product-cart-${product.id}`}>
            <p>{product.name}</p>
            <button
              type="button"
              onClick={() => addItem(product.id)}
              data-testid={`button-product-${product.id}`}
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
