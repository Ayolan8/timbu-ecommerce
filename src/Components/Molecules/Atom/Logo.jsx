import React from "react";
import LogoEye from '../../../assets/game-icons_bleeding-eye.png'
import LogoOpti from '../../../assets/opti logo.png'
// import './logo.css';
import { Link } from "react-router-dom";


const Logo = () => {
    return (
        <div>
            <Link to='/' className="headerLogo">
                <img src={LogoEye} alt="logo 1" />
                <img src={LogoOpti} alt="logo 2" />
            </Link>
        </div>
    )
}

export default Logo;