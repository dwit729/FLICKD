import React, { useState } from 'react';
import '../css/SignUp.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    passwordMismatch: false,
    passwordTooShort: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setErrors({ passwordMismatch: true, passwordTooShort: false });
      alert("Password does not match");
    } else if (formData.password.length < 6) {
      setErrors({ passwordMismatch: false, passwordTooShort: true });
      alert("Password must be at least 6 characters long");
    } else {
      setErrors({ passwordMismatch: false, passwordTooShort: false });
        //dito sa backend
      console.log('Signed up:', formData);
    }
  };

  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    setErrors({ passwordMismatch: false, passwordTooShort: false });
  };


  return (
    <div className="signup-container">
      <div className="form-box">
        <h2>FLiCKD</h2>
        <form onSubmit={handleSubmit}>
          { }
          <div className="form-row">
            <label>
              First Name:
              <input
              style={{color:"#3a4a5b"}}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                style={{color:"#3a4a5b"}}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-column">
            <label>
              Username:
              <input
                style={{color:"#3a4a5b"}}
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="form-column">
            <label>
              Password:
              <input
                style={{color:"#3a4a5b"}}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </label>
            
          </div>

          <div className="form-column">
            <label>
              Confirm Password:
              <input
              style={{color:"#3a4a5b"}}
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <p style={{textAlign:"center", color:"white"}}type="button" onClick={clearForm}>Clear Fields</p>

         
          <div className="form-actions">
            <button type="submit">Register</button>
            <a href="/login">Log in</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
