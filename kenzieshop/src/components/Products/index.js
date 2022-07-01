import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/modules/cart/actions";

const Products = () => {
  const produtos = useSelector(({ products }) => products);
  const dispatch = useDispatch();
  return (
    <div>
      {produtos.map((produto, index) => (
        <>
          <li key={index}>{produto.name}</li>
          <button
            onClick={() => dispatch(addToCart({ ...produto, quantidade: 1 }))}
          >
            Adicionar
          </button>
        </>
      ))}
    </div>
  );
};
export default Products;
