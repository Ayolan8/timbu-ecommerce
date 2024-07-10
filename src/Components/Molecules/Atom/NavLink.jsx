import React from "react";
import './logo.css';
import { Link } from "react-router-dom";

const NavLink = () => {
    return (
        <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Shop</a>
           <Link to='/checkout'>
            <a href="#">Features</a>
           </Link> 
        </nav>
    )
}

export default NavLink;