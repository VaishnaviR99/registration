import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "../styles/signup.css"

const Signup = () => {
  const [name, SetName] = useState("");
  const [mobile, SetMobile] = useState("");
  
  const [pass, SetPass] = useState("");

  const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    
    if (name === null || name === '') {
        isproceed = false;
        errormessage += ' Fullname';
    }
    if (pass === null || pass === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    
    if (mobile === null || mobile === '') {
      isproceed = false;
      errormessage += ' Email';
  }


    if(!isproceed){
        toast.warning(errormessage)
    }
    
    return isproceed;
}


  const handleSubmit = async (e) => {
    e.preventDefault();

    let details = { name, mobile,  pass, "tasks":"" }
    console.log(details);

    if (IsValidate()) {

    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(details),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Request failed with status " + res.status);
        }
        toast.success("Registered successfully");
        navigate("/login");
      })
      .catch((err) => {
        toast.error("Error: " + err.message);
      });
    }
  }
  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <h1>Register Now</h1>
            </div>
            <div>
              <label>Username<span>*</span></label>
              <input type="text" className="input-field" value={name} onChange={(e) => SetName(e.target.value)} required />
            </div>
            
            <div>
              <label>Mobile No.<span>*</span></label>
              <input type="number" className="input-field" value={mobile} onChange={(e) => SetMobile(e.target.value)} required />
            </div>
            <div>
              <label>Password<span>*</span></label>
              <input type="password" className="input-field" value={pass} onChange={(e) => SetPass(e.target.value)} required />
            </div>
            <div>
              <button type="submit">Submit</button>
             <Link to={'/login'}>Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

  


export default Signup