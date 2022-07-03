import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CardP } from "../Product";

const Cart = () => {
  const produtos = useSelector(({ cart }) => cart);

  return (
    <Box>
      <Box sx={{ padding: 2 }}>
        {produtos.map((produto, index) => (
          <CardP produto={produto} cart key={index} />
        ))}
      </Box>
      <Box sx={{ padding: 2 }}></Box>
    </Box>
  );
};
export default Cart;
