import React, { useState } from 'react'
import './Login.css'

function LoginBox() {
        const [loginData, setloginData] = useState({});
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate(); 
  
    const handleLogin = (event) => {
  
    };
    const handleChange=(e)=>{
  
    }
    return (
      <div className="login-container">
        <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={loginData.username}
              onChange={handleChange}
              required
            />
          </div>

     
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-primary" onClick={handleLogin}>Login</button>
      </div>
    );
  }

export default LoginBox