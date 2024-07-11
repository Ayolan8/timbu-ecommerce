import React from "react";
import CartImg from "../../../assets/shopping-cart-2--shopping-cart-checkout.png";
import './logo.css';
import { Link } from "react-router-dom";

const CartIcon = () => {
    return (
        <div>
            <Link to="/checkout">
                <img src={CartImg} alt="cart Icon" className="cart"/>
            </Link>
        </div>
    )
}

export default CartIcon;