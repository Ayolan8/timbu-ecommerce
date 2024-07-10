import React from "react";
import Hamburger from '../../assets/hamburger1.png';
import SearchIcon from '../../assets/search-icon.png';
import Cartt from '../../assets/shopping-cart-2--shopping-cart-checkout.png';

const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <img src={SearchIcon} alt="search icon" className="search-icon"/>
            <img src={Cartt} alt="cart" className="cart-icon"/>
            <img src={Hamburger} alt="hamburger" className="hamburger"/>
        </div>
    )
}

export default MobileNav;