// fazer os imports
import { createContext, useState } from "react";

// criar o context
export const CartContext = createContext([]);
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCartThunk = (produto) => {
    console.log(12 + "vus");
    const { id } = produto;

    const index = cart.map((produto, index) => produto.id === id && index);
    let teste = index.filter((ind) => ind !== false && ind !== []);

    teste.length > 0
      ? aumentarQuantidadeThunk(id)
      : setCart([...cart, produto]);
    localStorage.setItem("@context/cart", JSON.stringify(cart));
  };
  console.log(cart);

  const removeFromCartThunk = (id) => {
    setCart(cart.filter((produto) => produto.id !== id));
    localStorage.setItem("@context/cart", JSON.stringify(cart));
  };

  const aumentarQuantidadeThunk = (id) => {
    let list = cart;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].quantidade++;
      }
    }
    setCart(list);
    localStorage.setItem("@context/cart", JSON.stringify(cart));
  };

  const diminuirQuantidadeThunk = (id) => {
    let list = cart;
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        list[i].quantidade--;
      }
    }
    setCart(list);
    localStorage.setItem("@context/cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        diminuirQuantidadeThunk,
        aumentarQuantidadeThunk,
        removeFromCartThunk,
        addToCartThunk,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
