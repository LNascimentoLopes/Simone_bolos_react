import '../Css/Header.css'
import logo from '../assets/SIMONE BOLOS.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from "../pages/Home";
import Produtos from '../pages/Produtos';
import Contatos from '../pages/Contatos';
import Encomendas from '../pages/Encomendas';

function Header() {

    const [open, setOpen] = useState(false)

    return (

        <div className='DivHeader' >
            <img className="LogoSi" src={logo} alt="Simone" />
            <nav className={`nav-links ${open ? "active" : ""}`}>
                <Link to="/">Home</Link>
                <Link to="/Produtos" >Produtos</Link>
                <Link to="/Contatos" >Contato</Link>
                <Link to="/Encomendas">Encomendas</Link>
            </nav>

            <button className="menu-btn" onClick={() => setOpen(!open)}>
                {open ? <span className="menu-icon open">{"\u2715"}</span> : <span className="menu-icon close">{"\u2630"}</span>}
            </button>
            {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
        </div >

    );
}

const styles = {
    header: {
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px",
        textAlign: "center"
    }
};

export default Header;