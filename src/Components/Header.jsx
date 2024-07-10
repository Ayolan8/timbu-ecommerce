import React from "react";
import Logo from "./Molecules/Atom/Logo";
// import NavComponent from "./Molecules/NavComponent";
// import NavLink from "../Atom/NavLink";
// import SearchInput from "../Atom/SearchInput";
import CartIcon from "./Molecules/Atom/CartIcon";
import UserCheck from "./Molecules/Atom/UserCheck";
import NavLink from './Molecules/Atom/NavLink';
import SearchInput from "./Molecules/Atom/SearchInput";
import MobileNav from "./Molecules/MobileNav";
import './HeaderCss.css'

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <NavLink />
            <SearchInput />
            <div className="last-items">
                <UserCheck />
                <CartIcon />
            </div>

            <MobileNav />

          
            {/* <NavComponent /> */}
        </header>
    )
}

export default Header;
