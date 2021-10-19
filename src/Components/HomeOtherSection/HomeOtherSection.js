import React from 'react';
import img1 from '../../images/about.jpg';
import img2 from '../../images/homesection.svg'
import './HomeOtherSection.css';

const HomeOtherSection = () => {
    return (
        <div>
            <div className ="Homeabout-container">
            <div className ="Homeabout-img">
            <img src ={img1} alt=""/>
            </div>
            <div className ="Homeabout-content">
             <h3 style ={{color:'#F04949'}}>About The Doctors</h3>
             <h1 style ={{fontWeight:'600'}}>Get Best and Amazing Experice With Our Professional Doctors</h1>
             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
             <button className="btn btn-danger" ><a href="/Register "style={{color:"White",textDecoration:"none"}}>Register Now</a></button>


             
            </div>
        </div>
        <div className="homeothersection-container">
                 
                 <div className="homeothersection-content ">
                   <h1 style ={{fontWeight:'600'}}>Convenient, quality medical care<br/> in the heart of NYC</h1>
                   <p>London’s favourite private GP service providing excellence in care at two Central<br/> London locations since 1998. Let the Harley Street Health Centre take care of you.</p>
                 </div>
                 <div className="homeothersection-img ">
                      <img  src={ img2 } alt=""/>
                 </div>

             </div>
        </div>
    );
};

export default HomeOtherSection;