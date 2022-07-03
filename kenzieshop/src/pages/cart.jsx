import React from "react";

import { Box, Typography } from "@mui/material";
import Cart from "../components/Cart/";
import { useSelector } from "react-redux";

export default function Carrinho() {
  const cart = useSelector(({ cart }) => cart);
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1,
          height: "100%",
          background: "#abb6ff",
        }}
      >
        {cart.length > 0 ? (
          <Cart />
        ) : (
          <Typography variant="h6" noWrap component="div">
            Ainda não há nada adicionado
          </Typography>
        )}
      </Box>
    </div>
  );
}
