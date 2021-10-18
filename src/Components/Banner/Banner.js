import React from 'react';
import image1 from '../../images/5063406.jpg';
import'./Banner.css';

const Banner = () => {
    return (
        <div className = "banner">
            <div>
                <h3>DIGITAL HEALTH</h3>
                <h1>Virtual urgent care</h1>
                <p>Get a diagnosis and treatment plan without leaving the comfort of home.<br/> By downloading the NYP Connect app, you can access world-class care from the teams at Columbia and Weill Cornell Medicine.</p> 
            </div>
            <div>
                    <img src={image1} style={{width:'350px'}}/>
            </div>
        </div>
    );
};

export default Banner;