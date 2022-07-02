import {
  addToCart,
  aumentarQuantidade,
  diminuirQuantidade,
  removeFromCart,
} from "./actions";
import { useDispatch as dispacha } from "react-redux";

export const addToCartThunk = (produto) => {
  const { id } = produto;
  console.log(produto);
  return (dispatch) => {
    let list = JSON.parse(localStorage.getItem("cart")) || [];
    const index = list.map((produto, index) => produto.id === id && index);

    let teste = index.filter((ind) => ind !== false && ind !== []);

    console.log("teste:", teste);
    teste.length > 0
      ? dispatch(aumentarQuantidadeThunk(id))
      : dispatch(addToCart(produto)) &&
        list.push(produto) &&
        localStorage.setItem("cart", JSON.stringify(list));
  };
};

export const removeFromCartThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  const list = cart.filter((produto) => produto.id !== id);
  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(removeFromCart(list));
};

export const aumentarQuantidadeThunk = (id) => (dispatch, getStore) => {
  let list = JSON.parse(localStorage.getItem("cart"));
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i].quantidade++;
    }
  }

  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(aumentarQuantidade(list));
};

export const diminuirQuantidadeThunk = (id) => (dispatch, getStore) => {
  let list = JSON.parse(localStorage.getItem("cart"));
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i].quantidade--;
    }
  }

  localStorage.setItem("cart", JSON.stringify(list));
  dispatch(aumentarQuantidade(list));
};
