import React from "react";
import calculation from "../images/calculation.svg";
import measering from "../images/measering.svg";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navigation">
            <Link to="/" className="logo__link">_________</Link>
            <div className="links">
                <Link to="/services" className="link">Services</Link>
                <Link to="/products" className="link">Products</Link>
                <Link to="/about-us"className="link">About us</Link>
                <Link to="/portfolio" className="link">Portfolio</Link>
                <Link to="/faq" className="link">FAQ</Link>
                <Link to="/contacts" className="link">Contacts</Link>
            </div>
            <div className="wrapper">
                <div className="request__link">
                    <img src={measering} alt="meas" className="measering__image"/>
                    <Link to="/make-request" className="link">Make request</Link>
                </div>
                <div className="calculation__link">
                    <img src={calculation} alt="calc"/>
                    <Link to="/calculation" className="link">Calculation</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;