import React from 'react';
import image1 from '../../images/5063406.jpg';
import'./Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
        <div className = "banner">
            <div className="banner-content">
                <h3 style={{color:'#EC4949'}}>DIGITAL HEALTH</h3>
                <h1 style={{fontWeight:'600'}}>Virtual urgent care</h1>
                <p>Get a diagnosis and treatment plan without leaving the comfort of home.<br/> By downloading the NYP Connect app, you can access <br/>world-class care from the teams at Columbia and Weill Cornell Medicine.</p> 
                <button className="btn btn-danger" ><a href="/Register "style={{color:"White",textDecoration:"none"}}>Register Now</a></button>
            </div>
            <div className="banner-img">
                    <img src={image1}  alt=""/>
            </div>
           
        </div>
       
    </div>
    );
};

export default Banner;