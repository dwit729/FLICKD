import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/NavBar.css';

const Navbar = () => {

    const navigate = useNavigate();
    const [LoggedIn, setLoggedIn] = useState(false);
    const [User, setUser] = useState({});

    const [isSideNavOpen, setIsSideNavOpen] = useState(false);

    const handleLogOut = () => {
        sessionStorage.removeItem("userId")
        setLoggedIn(false);
        navigate('/')
        window.location.reload();
        
    }

    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };


    const fetchUser = async (userId) => {
        try {
            const response = await axios.get(`https://flickd-api.vercel.app/api/users/${userId}`);
            setUser(response.data);
        } catch (error) {
            
        }
    }

    const checkLoggedIn = () => {
        try {
            const userId = sessionStorage.getItem('userId');
            if(userId){
                setLoggedIn(true)
                fetchUser(userId)
            }
        } catch (error) {
            
        }
    }
    useEffect(() => {
       checkLoggedIn()
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                <button className="menu-icon" onClick={toggleSideNav}><FontAwesomeIcon icon={faBars} /></button>
                    {
                        LoggedIn?
                        <div className='auth-buttons'>Hello {User.firstName}</div>:
                        <div className="auth-buttons">
                        <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Log in
                        </NavLink>
                        |
                        <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active-link' : '')}>
                        Sign up
                        </NavLink>
                        </div>
                    }
                    <NavLink to="/" className="logo">FLiCKD</NavLink>
                </div>
            </nav>

            <div className={`side-nav ${isSideNavOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={toggleSideNav}>x</button>
                <NavLink to="/" className="side-nav-link">Home</NavLink>
                {LoggedIn && <NavLink className="side-nav-link" to="/profile">Profile</NavLink>}
                {LoggedIn && <NavLink className="side-nav-link" to="/Account_Settings">Account</NavLink>}
                <NavLink to="/search" className="side-nav-link">Search</NavLink>
                <NavLink to="/contact" className="side-nav-link">Contact</NavLink>
                {LoggedIn && <NavLink className="side-nav-link mt-40 text-red-400" onClick={handleLogOut} to="/">Logout</NavLink>}
            </div>

            {isSideNavOpen && <div className="overlay" onClick={toggleSideNav}></div>}
        </>
    );
};

export default Navbar;
