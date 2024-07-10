import React from "react";
import CartImg from "../../../assets/shopping-cart-2--shopping-cart-checkout.png";
import './logo.css';

const CartIcon = () => {
    return (
        <div>
            <img src={CartImg} alt="cart Icon" className="cart"/>
        </div>
    )
}

export default CartIcon;