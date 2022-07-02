import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart/";
import Box from "@mui/material/Box";
function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: 1,
          background: "gray",
        }}
      >
        <Products />
        <br />
        carrinho
        <Cart />
      </Box>
    </div>
  );
}

export default App;
