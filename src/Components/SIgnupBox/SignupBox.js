

import React, { useState } from 'react'



function SignupBox() {
      const [signupData, setSignupData] = useState({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate(); 

  const handleSignUp = (event) => {

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
            value={signupData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">mob</label>
          <input
            type="number"
            name='mob'
            className="form-control"
            value={signupData.mob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">email</label>
          <input
            type="email"
 name='email'
            className="form-control"
  value={signupData.email}
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
            value={signupData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"> Confirm Password</label>
          <input
            type="password"
            name="cnfPassword"
            className="form-control"
            value={signupData.cnfPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-primary" onClick={handleSignUp}>Login</button>
    </div>
  );
}

export default SignupBox