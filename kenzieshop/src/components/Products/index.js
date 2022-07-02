import { useSelector } from "react-redux";
import { CardP } from "../Product";

const Products = () => {
  const produtos = useSelector(({ products }) => products);

  return (
    <div>
      {produtos.map((produto, index) => (
        <CardP produto={produto} key={index} />
      ))}
    </div>
  );
};
export default Products;
