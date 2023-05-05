import "./App.css";
import Header from "./components/Header/Header";
import DisplayMenu from "./components/Main/DisplayMenu";
import { Route, Routes } from "react-router-dom";
import NonVegPizzas from "./components/Main/NonVegPizzas";
import VegPizzas from "./components/Main/VegPizzas";
import Sides from "./components/Main/Sides";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<DisplayMenu />} />
        <Route exact path="/nonVegPizza" element={<NonVegPizzas />} />
        <Route  path="/vegPizza" element={<VegPizzas />} />
        <Route  path="/sides" element={<Sides />} />
      </Routes>
    </div>
  );
}

export default App;
