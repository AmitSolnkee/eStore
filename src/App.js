import { Route, Routes } from "react-router-dom";
import "./App.css";
import CatNav from "./Component/CatNav";
import { Header } from "./Component/Header";
import MainComponent from "./Component/MainComponent";
import Login from "./Component/Login/Login";
import Register from "./Component/Login/Register";
import Cart from "./Component/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <CatNav />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
