import "./App.css";
import Products from "./components/Products";
import Cart from "./components/Cart/";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Products />
        <br />
        <br />
        carrinho
        <Cart />
      </header>
    </div>
  );
}

export default App;
