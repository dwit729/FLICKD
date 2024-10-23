import React, { useState } from 'react';
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
                <button className="menu-icon" onClick={toggleSideNav}>☰</button>
                    <div className="auth-buttons">
                    <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Log in
                    </NavLink>
                    |
                    <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                    Sign up
                    </NavLink>
                    </div>
                    <div className="brand">FLiCKD</div>
                </div>
            </nav>

            <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSideNav}>x</button>
                <a href="#" className="side-nav-link">About Us</a>
                <a href="#" className="side-nav-link">Services</a>
                <a href="#" className="side-nav-link">Contact</a>
            </div>

            {isSideNavOpen && <div className="overlay" onClick={toggleSideNav}></div>}
        </>
    );
};

export default Navbar;
