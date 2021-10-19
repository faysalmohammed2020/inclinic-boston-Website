import React from 'react';
import { Button, Form } from 'react-bootstrap';
import'./Register.css';
import regimg from '../../images/register.jpg';
import { getAuth, signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { useState } from 'react';

initializeAuthentication();
const provider = new GoogleAuthProvider();

const Register = () => {
    const[user,setUser] =useState({})
    const[email,setEmail] =useState('');
    const[password,setPassword] =useState('');
    const[isLogin,setIsLogin] =useState(false);
    const auth = getAuth();
     const handleGoogleSignIn = () =>{
        
        signInWithPopup(auth, provider)
        .then((result) =>{
            const{displayName,email} = result.user;
            const loggeduser ={
                name: displayName,
                mail: email
            }
          setUser(loggeduser);
        })
          
        
    }
    const togglelogin = e =>{
        setIsLogin(e.target.checked)
    }
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordChange = e =>{
        setPassword(e.target.value)
    }

    const handleregistration = e =>{
        console.log(email,password)
        
        isLogin? userLogin(email,password) : createNewUser(email,password);
         e.preventDefault();
    }
     const userLogin =(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            
        })
     }
    const createNewUser =(email,password) =>{
        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            
        })
    }
    return (
        <div className="register-container">
           <div className ="register-img">
            <img src ={regimg}  alt=""/>
           </div>
    <div className="register-form">
<Form onSubmit={handleregistration}>
    <h3 className="text-white">Please {isLogin ? "Login" : "Register"}</h3>
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control type="email" placeholder="Enter email"  onBlur={handleEmailChange}/>
    </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Control type="password" placeholder="Password" onBlur={handlePasswordChange}/>
  </Form.Group>
  <Form.Group  className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onChange={togglelogin} type="checkbox" label="Already Registered? " />
  </Form.Group>
  <Button variant="danger" type="submit" id="Submit-btn"  >
  {isLogin ? "Login" : "Register"}
  </Button>  or
   <Button variant="danger" type="submit" id="login-btn-google" onClick ={handleGoogleSignIn}>
    Login with google
  </Button>

</Form>
       </div>
       </div>
    );
};

export default Register;