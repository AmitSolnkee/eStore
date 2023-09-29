import { Route, Routes } from "react-router-dom";
import "./App.css";
import CatNav from "./Component/CatNav";
import { Header } from "./Component/Header";
import MainComponent from "./Component/MainComponent";
import Login from "./Component/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <CatNav />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
