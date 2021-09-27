import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { products } from "../server/data.json";

interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

interface CartStoreProviderProps {
  children: ReactNode;
}

interface CartStoreType {
  products: Product[];
  itemsCart: Product[];
  addItem: Function;
  subItem: Function;
  totalCart: number;
  totalFreight: number;
}

const CartStoreContext = createContext<CartStoreType>({} as CartStoreType);

export default function CartStoreProvider({
  children,
}: CartStoreProviderProps) {
  const [itemsCart, setItemsCart] = useState<Product[]>([]);
  const [totalCart, setTotalCart] = useState(0);
  const [totalFreight, setTotalFreight] = useState(0);

  useEffect(() => {
    totalItems();
  }, [itemsCart]);

  useEffect(() => {
    freightPrice();
  }, [totalCart]);

  function addItem(id: number) {
    const cart = [...itemsCart];
    let searchProduct = null;

    if (cart.length !== undefined) {
      searchProduct = cart.find((item) => item.id === id);
    }

    if (searchProduct) {
      cart.map((item) => {
        if (item.id === id) item.amount += 1;
      });
    } else {
      const newProduct = products.find((product) => product.id === id);
      if (newProduct) {
        newProduct.amount = 1;
        cart.push(newProduct);
      }
    }

    setItemsCart(cart);
    // totalItems();
  }

  function subItem(id: number) {
    const cart = [...itemsCart];
    cart.map((item, index) => {
      if (item.id === id) {
        if (item.amount === 1) {
          cart.splice(index, 1);
        } else {
          item.amount -= 1;
        }
      }
    });

    setItemsCart(cart);
    // totalItems();
  }

  function totalItems() {
    const cart = [...itemsCart];

    const result = cart.reduce(
      (acc, current) => {
        acc.total += current.amount * current.price;
        return acc;
      },
      {
        total: 0,
      }
    );

    setTotalCart(result.total);
  }

  function freightPrice() {
    setTotalFreight(totalCart !== 0 && totalCart < 100 ? 15 : totalCart);
  }

  return (
    <CartStoreContext.Provider
      value={{
        products,
        itemsCart,
        addItem,
        subItem,
        totalCart,
        totalFreight,
      }}
    >
      {children}
    </CartStoreContext.Provider>
  );
}

export function useCartStore() {
  const context = useContext(CartStoreContext);
  const { products, itemsCart, addItem, subItem, totalCart, totalFreight } =
    context;
  return { products, itemsCart, addItem, subItem, totalCart, totalFreight };
}
