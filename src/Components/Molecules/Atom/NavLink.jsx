import React from "react";
import './logo.css';
import { Link } from "react-router-dom";

const NavLink = () => {
    return (
        <nav className="nav-links">
            <Link to="/" className="no-show">
                <a href="#" className="no-show">Home</a>
            </Link>
            <a href="#" className="no-show">Shop</a>
            <Link to='/checkout' className="no-show">
                <a href="#" className="no-show">Features</a>
            </Link> 
        </nav>
    )
}

export default NavLink;