import React from 'react';
import'./Header.css';
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
        <div className = "Header">
        <div className="logo">
            <img src={logo} alt="logo" />
            </div>
           <div className="Header-nav">
           <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Home">Home</NavLink>
            <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/About">About</NavLink>
            <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Login">Login</NavLink>
            <NavLink activeStyle={{
       fontWeight: "bold",
       color: "white",
       background: '#FF284F',
       padding:'10px',
       borderRadius:'10px'
       }}
        to="/Register">Register</NavLink>
           </div>
        </div>
        </div>
    );
};

export default Header;