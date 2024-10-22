import React, { useState } from 'react'
import './Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function LoginBox() {
        const [loginData, setloginData] = useState({});
  //   const dispatch = useDispatch();
    const navigate = useNavigate(); 
  
    const handleLogin = (event) => {
      AxiosInstance({
    url:"/users/login",
    method:"post",
    data:loginData
  }).then((res)=>{
    localStorage.setItem("token",res.data.token)
    navigate('/')
  })
  .catch((err)=>{})
    };
    const handleChange=(e)=>{
      setloginData({...loginData,[e.target.name]:e.target.value})
    }
    return (
      <div className="login-container">
        <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              value={loginData.email}
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