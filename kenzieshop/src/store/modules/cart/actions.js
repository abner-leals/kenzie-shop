import {
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  AUMENTAR_PRODUTO,
  DIMINUIR_PRODUTO,
} from "./actionsType";

export const addToCart = (product) => ({ type: ADD_PRODUTO, product });
export const removeFromCart = (list) => ({ type: REMOVE_PRODUTO, list });
export const aumentarQuantidade = (list) => ({ type: AUMENTAR_PRODUTO, list });
export const diminuirQuantidade = (list) => ({ type: DIMINUIR_PRODUTO, list });
