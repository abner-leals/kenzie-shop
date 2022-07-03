import React from "react";

import { Box } from "@mui/material";
import Cart from "../components/Cart/";

export default function Carrinho() {
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
        <Cart />
      </Box>
    </div>
  );
}
