import React from "react";
import Logo1 from '../../../assets/game-icons_bleeding-eye.png'
import Logo2 from '../../../assets/opti logo.png'
import './logo.css';
import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div className="Logo logo">
            <Link to='/'>
                <img src={Logo1} alt="logo 1" />
                <img src={Logo2} alt="logo 2" />
            </Link>
        </div>
    )
}

export default Logo;