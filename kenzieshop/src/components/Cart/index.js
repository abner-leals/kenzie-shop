import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { CardP } from "../Product";
import BasicCard from "./somaProdutos";

const Cart = () => {
  const produtos = useSelector(({ cart }) => cart);

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        background: "#abb6ff",
      }}
    >
      <Box
        sx={{
          padding: 2,
          width: 600,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {produtos.map((produto, index) => (
          <CardP produto={produto} cart key={index} />
        ))}
      </Box>
      <Box sx={{ padding: 2 }}></Box>
      <BasicCard />
    </Box>
  );
};
export default Cart;
