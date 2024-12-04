import Logo from "./Logo"
import CartWidget from "./CartWidget"
import "./navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <Logo />
            <ul className="navbar-links">
                <Link to="/category/procesadores" className="navbar-item">
                    Procesadores
                </Link>
                <Link to="/category/motherboards" className="navbar-item">
                    Motherboards
                </Link>
                <Link to="/category/rams" className="navbar-item">
                    Memorias RAM
                </Link>
            </ul>
            <CartWidget />
        </div>
    )
}

export default Navbar