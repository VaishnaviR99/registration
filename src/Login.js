import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  const [username, checkUsername] = useState();
  const [password, checkPassword] = useState();

  const proceedLogin = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <div>
        <form onsubmit={proceedLogin} >
          <div>
            <h1>User Login</h1>
          </div>

          <div>
            <label>User Name<span>*</span></label>
            <input type="text" value={username} onChange={(e)=>{checkUsername(e.target.value)}}/>
          </div>

          <div>
            <label>Password <span>*</span></label>
            <input type="password"  value={password} onChange={(e)=>{checkPassword(e.target.value)}}/>
          </div>

          <div>
            <button type='submit'> Login</button>
            <Link to={'/signup'} >New User</Link>
          </div>



        </form>
      </div>
    </div>
  )
}

export default Login