import React from 'react';
import contactimg from '../../images/contact.jpg';
import './Contact.css'
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className="contact-container">
            <div className ="contact-img">
            <img src ={contactimg} alt="Logo"/>
           </div> 
            <div className="contact-form">
    
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit" id="Submit-btn">
        Message
      </Button>
      
      
      
    </Form>
            
        </div>
        </div>
        </div>
    );
};

export default Contact;