import React from "react";
import Hamburger from '../../assets/hamburger1.png';
import SearchIcon from '../../assets/search-icon.png';
import Cartt from '../../assets/shopping-cart-2--shopping-cart-checkout.png';
import { Link } from "react-router-dom";

const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <img src={SearchIcon} alt="search icon" className="search-icon"/>
            <Link to="/checkout">
                <img src={Cartt} alt="cart" className="cart-icon"/>
            </Link>
            <img src={Hamburger} alt="hamburger" className="hamburger"/>
        </div>
    )
}

export default MobileNav;