import React, {useState} from "react";
import "../css/LogIn.css";
import "../images/logo.jpg";
import PopUp from "../components/PopUp";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import axios from "axios";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  const [Loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "", password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) =>{
      e.preventDefault();
      setLoading(true)
      try {
        const response = await axios.post("https://flickd-api.vercel.app/api/users/login", formData);
        console.log(response.data)
        if(response.data.message == "Login successful"){
          setLoading(false)
           sessionStorage.setItem("userId", response.data.userId);
           messageApi.open({
            type: 'success',
            content: 'LOGIN SUCCESSFUL',
          });
          
          setTimeout(() => {
             navigate("/")
            window.location.reload();
          }, 500);
        }
       
      } catch (error) {
        setLoading(false)
        window.alert("Login Failed!")
      }
  }

  return (
    <>
    {contextHolder}
    <div className="login-container">
      <div className="login-box">
        <button className="close-btn">x</button>
        <div className="login-header">
          <h1 className="text-3xl font-bold">FLiCKD</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required onChange={handleChange} className="text-black" value={formData.username} placeholder="Enter Username" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required onChange={handleChange } className="text-black" value={formData.password} placeholder="Enter Password" />
          </div>
          
          <button type="submit" className="login-btn">
            {Loading? "Logging In..." : "Login"}
          </button>
        </form>
        <div className="login-footer">
          <a href="/signup" className="underline">Create an Account</a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
