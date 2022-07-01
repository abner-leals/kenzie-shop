import { ADD_PRODUTO, REMOVE_PRODUTO } from "./actionsType";

export const addToCart = (product) => ({ type: ADD_PRODUTO, product });
export const removeFromCart = (id) => ({ type: REMOVE_PRODUTO, id });
