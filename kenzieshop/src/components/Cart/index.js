import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/modules/cart/actions";
import { CardP } from "../Product";

const Cart = () => {
  const dispatch = useDispatch();
  const produtos = useSelector(({ cart }) => cart);
  return (
    <div>
      {produtos.map((produto, index) => (
        <>
          {console.log(produto)}
          <CardP produto={produto} />

          <button onClick={() => dispatch(removeFromCart(produto.id))}>
            Remover
          </button>
        </>
      ))}
    </div>
  );
};
export default Cart;
