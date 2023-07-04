import React from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Register = () => {

  const [err,setErr] = useState(false)
  const navigate = useNavigate()


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage , displayName);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db,"userChats", res.user.uid),{});
            navigate("/");
            
           
          } catch (err) {
            console.log(err);
            setErr(true);
            }
         });
        }
      );
    
    } catch(error)  {
        setErr(true);
      }
    };


  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" minLength= '6' placeholder= 'password'/>
                <input style={{display:"none"}} type='file' id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>add an avatar</span>
                </label>
                <button>Sign up</button>
                {err && <span>Something went Wrong</span>}
            </form>
            <p>You do have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
  )
}


export default Register

