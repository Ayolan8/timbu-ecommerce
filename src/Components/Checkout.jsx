import React from "react";
import Form from "./Molecules/checkoutForm";
import './checkout.css'
// import { Link } from "react-router-dom";
// import ArrowBack from "../assets/arrow-up-1--arrow-up-keyboard.png";
import ArrowBackItem from "./Molecules/Atom/ArrowBackNav";

const Checkout = ({name, setName, 
    email, setEmail, shipping, setShipping,
    phone, setPhone
}) => {
    return (
        <main className="main">
            <h2 className="laptop-h2">Checkout</h2>
            <div className="head">
                <div className="home-n-progress">
                    <div className="back-arr">
                        <ArrowBackItem text = "Back" />
                    </div>
                    <div className="progress-bar">
                        <div className="step-1">1</div>
                        <div className="line"></div>
                        <div className="step-2">2</div>
                        <div className="line"></div>
                        <div className="step-3">3</div>
                    </div>
                </div>
                <h3>Shipping Details</h3>
            </div>
            <Form name={name} setName = {setName}
            email = {email}
            setEmail = {setEmail}
            shipping = {shipping}
            setShipping = {setShipping}
            phone = {phone}
            setPhone = {setPhone}
            />
        </main>
    )
}

export default Checkout;