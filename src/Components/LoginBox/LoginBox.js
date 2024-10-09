import React, { useState } from 'react'
import './Login.css'
import { AxiosInstance } from '../../Config/AxiosInsatnce';
import { Navigate, useNavigate } from 'react-router-dom';

function LoginBox() {
        const [loginData, setloginData] = useState({});
  //   const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const handleLogin = (event) => {
        AxiosInstance.post(`${process.env.REACT_APP_API_URL}/users/login`,loginData).then((res)=>{
if(res.data.token){
    localStorage.setItem('token', res.data.token)
    navigate('/')
}
        })
        .catch(err=>{
          console.log(err);
          
        })
          };
          const handleChange=(e)=>{
            setloginData({...loginData,[e.target.name]:e.target.value})
          }
    return (
      <div className="login-container">
        <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="username">email</label>
            <input
              type="text"
              id="username"
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