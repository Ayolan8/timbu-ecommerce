import React from "react";
import Facebook from '../../../assets/facebook-1--media-facebook-social.png';
import Instagram from '../../../assets/instagram.png';
import Twitter from '../../../assets/twitter--media-twitter-social.png';
import Nintendo from '../../../assets/nintendo-switch--nintendo-switch-entertainment-gaming.png';


const SocialMediaIcons = () => {
    return (
        <div className="social-icons">
            <h4>Social Media Links</h4>
            <div>
                <img src={Facebook} alt="facebook icon" />
                <img src={Instagram} alt="Instagram icon" />
                <img src={Nintendo} alt="nintendo icon" />
                <img src={Twitter} alt="twitter icon" />
            </div>
        </div>
    )
}

export default SocialMediaIcons;