import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/login.css"

const Login = () => {
  const [mobile, mobileupdate] = useState('');
  const [password, passwordupdate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
   
    mobileupdate(''); 
    passwordupdate(''); 
    
  }, []);

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

   // const userDetails = { mobile, password };
    if(validate()){

    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }

      const users = await response.json();
      console.log(users)
      const foundUser = users.find((user) => user.mobile === mobile && user.pass === password);

      if (foundUser) {
        toast.success('Logged in successfully');
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
        navigate('/home');
      } else {
        toast.error('Invalid mobile number or password');
      }
    } catch (err) {
      toast.error('Error: ' + err.message);
    }
  };
  }
  const validate = () => {
    let result = true;
    if (mobile === '' || mobile === null) {
      result = false;
      toast.warning('Please Enter Mobile Number');
    }
    if (password === '' || password === null) {
      result = false;
      toast.warning('Please Enter Password');
    }
    return result;
  }
  return (
    <div className="container">
    <div className="form-container" style={{ marginTop: '100px' }}>
        <form onSubmit={handleSubmit} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>Mobile Number <span >*</span></label>
                <input value={mobile} onChange={e => mobileupdate(e.target.value)} className="input-field"></input>
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="input-field"></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Login</button> |
              <Link className="btn btn-success" to={'/'}><button>New User</button></Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;