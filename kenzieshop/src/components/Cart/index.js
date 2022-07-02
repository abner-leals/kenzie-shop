import { useSelector } from "react-redux";
import { CardP } from "../Product";

const Cart = () => {
  const produtos = useSelector(({ cart }) => cart);

  return (
    <div>
      {produtos.map((produto, index) => (
        <CardP produto={produto} cart key={index} />
      ))}
    </div>
  );
};
export default Cart;
