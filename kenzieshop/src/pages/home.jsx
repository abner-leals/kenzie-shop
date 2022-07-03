import React from "react";

import Products from "../components/Products";
import Box from "@mui/material/Box";

export default function Home() {
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
        <Products />
      </Box>
    </div>
  );
}
