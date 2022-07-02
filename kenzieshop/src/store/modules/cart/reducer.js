import {
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  AUMENTAR_PRODUTO,
  DIMINUIR_PRODUTO,
} from "./actionsType";
import {} from "./actionsType";

const cartReducer = (
  state = JSON.parse(localStorage.getItem("cart")) || [],
  action
) => {
  const { list, product } = action;

  switch (action.type) {
    case ADD_PRODUTO:
      return [...state, product];

    case REMOVE_PRODUTO:
      return list;

    case AUMENTAR_PRODUTO:
      return list;

    case DIMINUIR_PRODUTO:
      return list;

    default:
      return state;
  }
};
export default cartReducer;
