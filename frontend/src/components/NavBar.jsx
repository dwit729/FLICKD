import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import '../css/NavBar.css';

const Navbar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                <button className="menu-icon" onClick={toggleSideNav}><FontAwesomeIcon icon={faBars} /></button>
                    <div className="auth-buttons">
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Log in
                    </NavLink>
                    |
                    <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Sign up
                    </NavLink>
                    </div>
                    <div className="logo">FLiCKD</div>
                </div>
            </nav>

            <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSideNav}>x</button>
                <a href="aboutus" className="side-nav-link">About Us</a>
                <a href="#" className="side-nav-link">Services</a>
                <a href="contact" className="side-nav-link">Contact</a>
            </div>

            {isSideNavOpen && <div className="overlay" onClick={toggleSideNav}></div>}
        </>
    );
};

export default Navbar;
