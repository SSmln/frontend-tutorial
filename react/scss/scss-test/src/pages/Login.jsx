import React from 'react'
import Add from "../img/addAvatar.png"
import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from 'react-router-dom';


export const Login = () => {
  const [err,setErr] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const email = e.target[0] .value;
    const password = e.target[1].value;


    try{
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/")

    }
    catch(err){
        setErr(true);
    }
  };
  
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
            
                <input type="email" placeholder='email'/>
                <input type="password" placeholder= 'password'/>
                
                <button>Sign in</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You do have an account? <Link to="/Register">Register</Link></p>
        </div>
    </div>
  ) 
};

export default Login;
