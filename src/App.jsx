import { Routes, Route } from "react-router-dom";
import "./Css/App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import Produtos from "./pages/Produtos";
import Contatos from "./pages/Contatos";
import Encomendas from "./pages/Encomendas";

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Contatos" element={<Contatos />} />
        <Route path="/Encomendas" element={<Encomendas />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;