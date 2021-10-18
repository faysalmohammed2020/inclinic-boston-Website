import React from 'react';
import'./Header.css';
import logo from '../../images/logo.svg'

const Header = () => {
    return (
        <div>
            
        <div className = "Header">
        <div className="logo">
            <img src={logo} alt="logo" />
            </div>
           <div className="Header-nav">
           <a href="/Home">Home</a>
            <a href="/Home">About</a>
            <a href="/Home">Login</a>
            <a href="/Home">Register</a>
           </div>
        </div>
        </div>
    );
};

export default Header;