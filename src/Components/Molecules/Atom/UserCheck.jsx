import React from "react";
import UserImg from "../../../assets/user-check-validate--actions-close-checkmark-check-geometric-human-person-single-success-up-user.png";
import './logo.css';

const UserCheck = () => {
    return (
        <div className="user-check">
            <img src={UserImg} alt="cart Icon" />
            <p>Hi.. Jay</p>
        </div>
    )
}

export default UserCheck;