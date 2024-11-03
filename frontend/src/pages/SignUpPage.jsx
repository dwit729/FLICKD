import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import '../css/SignUp.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [Status, setStatus] = useState();
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
  
  const handleSignUp = async () => {
      try {
        const response = await axios.post("https://flickd-api.vercel.app/api/users/register", formData)

            setStatus(response)
            console.log(Status)
            navigate("/login")
       
       
      } catch (error) {
        console.log
      }
  }

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
        handleSignUp()
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
         
          <div className="form-actions">
            <button type="submit">Register</button>
            <a className='bg-blue-900' href="/login">Go to login</a>
          </div>
          <p className="text-red-500 text-center mt-5 hover:cursor-pointer" type="button" onClick={clearForm}>Clear Fields</p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
