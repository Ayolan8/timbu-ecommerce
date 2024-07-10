import React from "react";
import ArrowBackImg from '../../../assets/arrow-up-1--arrow-up-keyboard.png';
import { Link } from "react-router-dom";
import './logo.css';

const ArrowBackItem = ({text}) => {
    return (
        <>
            <Link to='/' className="no-underline">
                <div className="navigation">
                    <img src={ArrowBackImg} alt="back arrow" />
                    <p>{text}</p>
                </div>
            </Link>
        </>
    )
}

export default ArrowBackItem;