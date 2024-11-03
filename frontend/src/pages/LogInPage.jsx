import React, {useState} from "react";
import "../css/LogIn.css";
import "../images/logo.jpg";
import PopUp from "../components/PopUp";
import axios from "axios";

const Login = () => {
  const [triggerPopup, setTriggerPopUp] = useState(false);
  const [formData, setFormData] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () =>{
      try {
        
      } catch (error) {
        
      }
  }

  return (
    <div className="login-container">
      <PopUp messageText={"Login failed!"} trigger={triggerPopup} type={"failed"} setTrigger={setTriggerPopUp} />

      <div className="login-box">
        <button className="close-btn">x</button>
        <div className="login-header">
          <h1 className="text-3xl font-bold">FLiCKD</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required onChange={handleChange} placeholder="Enter Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={handleChange} placeholder="Enter Password" />
          </div>
          
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <div className="login-footer">
          <a href="/signup" className="underline">Create an Account</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
