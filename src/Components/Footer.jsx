import React from "react";
import './footer.css';
import FooterLogo from "./Molecules/Atom/footerLogo";

import SocialMediaIcons from "./Molecules/Atom/SocialIcon";

const Footer = () => {
    return (
        <footer>
            <div className="footer-on-mobile">
                <div className="footer-container-1">
                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Best Sellers</a></li>
                            <li><a href="#">Sale</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="contact-N-icons">
                        <div className="contact-info">
                            <h4>Contact Information</h4>
                            <p>Email: <span>support@OpticTrend.com</span></p>
                            <p>Phone: <span>+1-800-123-4567</span></p>
                            <p>Address: <span>123 Tech Avenue, <br />Silicon Valley, CA</span></p>
                        </div>
                        <SocialMediaIcons />
                    </div>
                </div>

                <div className="footer-container-2">
                    <div className="help-center">
                        <h4>Help Center</h4>
                        <p className="shipping">Shipping & Delivery</p>
                        <p>Returns & Refunds</p>
                        <p>Order Tracking</p>
                        <p>FAQs</p>
                        <p>Customer Service</p>
                    </div>
                    <div className="logo-N-copyright">
                        <FooterLogo />
                        <p className="copyright">2024 TechSport All right Reserved</p>
                    </div>
                    
                </div>
            </div>

            <div className="footer-on-laptop">
                <div className="logo-N-copyright">
                    <FooterLogo />
                        <p className="copyright">2024 TechSport All right Reserved</p>
                </div>

                <div className="footer-on-laptop-links">
                    <div className="quick-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Features</a></li>
                            <li className="best"><a href="#">Best Sellers</a></li>
                            <li><a href="#">Sale</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="help-center">
                        <h4>Customer Service</h4>
                        <p>Help Center</p>
                        <p>Shipping & Delivery</p>
                        <p>Returns & Refunds</p>
                        <p>Order Tracking</p>
                        <p>FAQs</p>
                    </div>

                    <div className="contact-N-icons">
                        <div className="contact-info">
                            <h4>Contact Information</h4>
                            <div className="body">
                                <p>Email: support@OpticTrend.com</p>
                                <p>Phone: +1-800-123-4567</p>
                                <p>Address: 123 Tech Avenue, Silicon Valley, CA</p>
                            </div>
                        </div>
                        <>
                            <SocialMediaIcons />
                        </>
                        
                    </div>
                </div>
        </div>

        </footer>
    )
}

export default Footer;