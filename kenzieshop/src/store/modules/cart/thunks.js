import {
  addToCart,
  aumentarQuantidade,
  diminuirQuantidade,
  removeFromCart,
} from "./actions";

export const addToCartThunk = (produto) => {
  const { id } = produto;
  return (dispatch) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];

    const chaves = list.map((prod) => prod.id);

    let contem = chaves.includes(id);
    console.log(contem);
    console.log(contem);
    console.log(contem);
    if (contem) {
      aumentarQuantidadeThunk(id);
    } else {
      dispatch(addToCart(produto));
      list.push(produto);
    }

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
  const { cart } = getStore();
  let produto;
  cart.filter(
    (prod) => prod.id === id && (prod.quantidade++, (produto = prod))
  );
  const list = cart.filter((produto) => produto.id !== id);
  const newList = [...list, produto];

  localStorage.setItem("cart", JSON.stringify(newList));
  dispatch(aumentarQuantidade(newList));
};

export const diminuirQuantidadeThunk = (id) => (dispatch, getStore) => {
  const { cart } = getStore();
  let produto;
  cart.filter(
    (prod) => prod.id === id && (prod.quantidade--, (produto = prod))
  );
  const list = cart.filter((produto) => produto.id !== id);
  const newList = [...list, produto];

  localStorage.setItem("cart", JSON.stringify(newList));
  dispatch(diminuirQuantidade(newList));
};
