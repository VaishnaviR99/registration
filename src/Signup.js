import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
 
const Signup = () => {
const [name, SetName]= useState("");
const [mobile, SetMobile]= useState("");
const [email, SetEmail]= useState("");
const [pass, SetPass]= useState("");

const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let details ={name,mobile,email,pass}
    console.log(details);

    fetch("http://localhost:8000/users",
     {
      method: "POST",
      headers:{ 'Content-Type': 'application/json'},
      body: JSON.stringify(details)})
   .then((res)=>{
       toast.success('Registered successfully')
       navigate('/login')

     }).catch((err)=>{
       toast.error('failed:'+err.message);
     });
  }
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h1>Register Now</h1>
            </div>
            <div>
              <label>Username<span>*</span></label>
              <input type="text" value={name} onChange={e=>SetName(e.target.value)} required />
            </div>
            <div>
              <label>Email<span>*</span></label>
              <input type="email" value={email} onChange={e=>SetEmail(e.target.value)} required/>
            </div>
            <div>
              <label>Mobile No.<span>*</span></label>
              <input type="number" value={mobile} onChange={e=>SetMobile(e.target.value)} required/>
            </div>
            <div>
              <label>Password<span>*</span></label>
              <input type="password" value={pass} onChange={e=>SetPass(e.target.value)} required />
            </div>
            <div>
              <button type='submit'>Submit</button>
              <button>Back</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup