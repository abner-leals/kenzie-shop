import { Box } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { CartContext } from "../../providers/cart";
import { CardP } from "../Product";
import BasicCard from "./somaProdutos";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <Box
      sx={{
        padding: 2,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        background: "#abb6ff",
      }}
    >
      <Box
        sx={{
          padding: 2,
          maxWidth: 600,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          gap: 1,
        }}
      >
        {cart.map((produto, index) => (
          <CardP produto={produto} cart key={index} />
        ))}
      </Box>
      <Box sx={{ padding: 2 }}></Box>
      <BasicCard />
    </Box>
  );
};
export default Cart;
