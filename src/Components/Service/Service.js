import React from 'react';
import'./Service.css';

const Service = (props) => {
    const{name,role,img} =props.service;
    return (
    <div className="Service-container">
        <div className="card" >
            <img src={img} className="card-img-top " alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{role}</p>
                   
                <a href="#" className="btn btn-danger">Appointment Now</a>
                </div>
        </div>
</div>
    );
};

export default Service;