import "./App.css";

import PrimarySearchAppBar from "./components/AppBar/Appbar";
import { BrowserRouter } from "react-router-dom";

import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PrimarySearchAppBar />
        <Rotas />
      </div>
    </BrowserRouter>
  );
}

export default App;
