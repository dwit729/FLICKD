import React from 'react';
import '../css/LogIn.css';
import '../images/logo.jpg'

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <button className="close-btn">x</button>
                <div className="login-header">
                <img src="logo.jpg" alt="Logo" className="login-logo" />
                    <h1>FLiCKD</h1>
                </div>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" placeholder="Enter Username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" placeholder="Enter Password" />
                    </div>
                    <button type="submit" className="login-btn">Log In</button>
                </form>
                <div className="login-footer">
                    <a href="#">Forgot Password?</a>
                    <a href="/signup">Create an Account</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
