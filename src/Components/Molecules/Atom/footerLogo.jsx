import React from "react";
import Logof1 from '../../../assets/game-icons_bleeding-eye.png'
import Logof2 from '../../../assets/opti logo.png'
import { Link } from "react-router-dom";


const FooterLogo = () => {
    return (
        <div className="logo">
            <Link to='/'>
                <img src={Logof1} alt="logo 1" />
                <img src={Logof2} alt="logo 2" />
            </Link>
        </div>
    )
}

export default FooterLogo;