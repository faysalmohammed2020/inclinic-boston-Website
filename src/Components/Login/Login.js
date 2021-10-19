
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import'./Login.css';
import loginimg from '../../images/login.jpg'

const Login = () => {
    return (
       <div className="login-container">
           <div className ="login-img">
            <img src ={loginimg} />
           </div>
    <div className="login-form">
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" id="Submit-btn">
    Login
  </Button> or
   <Button variant="primary" type="submit" id="login-btn-google">
    Login with google
  </Button>
</Form>
       </div>
       </div>
    );
};

 export default Login;