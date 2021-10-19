import React from 'react';
import { Button, Form } from 'react-bootstrap';
import'./Register.css';
import regimg from '../../images/register.jpg'

const Register = () => {
    return (
        <div className="register-container">
           <div className ="register-img">
            <img src ={regimg} />
           </div>
    <div className="register-form">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="danger" type="submit" id="Submit-btn">
    Register
  </Button>  or
   <Button variant="danger" type="submit" id="login-btn-google">
    Login with google
  </Button>

</Form>
       </div>
       </div>
    );
};

export default Register;