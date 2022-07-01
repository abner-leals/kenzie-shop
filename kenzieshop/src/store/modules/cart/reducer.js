import { ADD_PRODUTO } from "./actionsType";
import { REMOVE_PRODUTO } from "./actionsType";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUTO:
      const { product } = action;
      return [...state, product];

    case REMOVE_PRODUTO:
      const { id } = action;
      const newList = state.filter((produto) => produto.id !== id);
      return newList;

    default:
      return state;
  }
};
export default cartReducer;
