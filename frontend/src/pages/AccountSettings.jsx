import "../css/Button.css";
import "../css/AccountSettings.css";

import PopUp from "../components/PopUp";
import { Button, Checkbox, message } from "antd";

import React, { useState, useEffect } from "react";
import { Input } from "antd";
import axios from 'axios';
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  EditOutlined,
  CloseCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const AccountSettings = () => {

  const [UpdatePassword, setUpdatePassword] = useState();
  const [User, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
  });
  const [Loaded, setLoaded] = useState(false);


  const fetchUser = async () => {
    const id = sessionStorage.getItem("userId")
    console.log(id)
    try {
        const response = await axios.get(`https://flickd-api.vercel.app/api/users/${id}`);
        setUser(response.data);
        setLoaded(true)
    } catch (error) {
        console.log(error)
    }

  console.log(Loaded)
  }


  useEffect(() => {
    fetchUser();
  }, []);


  const [messageApi, contextHolder] = message.useMessage();
  const [access, setAccess] = useState(true);
  const [edit, setEdit] = useState(false);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleAccess = () => {
    if (access) {
      setAccess(false);
      setEdit(true);
    } else {
      setAccess(true);
      setEdit(false);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...User,
      [name]: value,
    });
  };

  const handleAccessButton = () => {
    return access ? (
      <button
        type="button"
        onClick={() => handleAccess()}
        className="button-primary"
      >
        Edit &nbsp;
        <EditOutlined />
      </button>
    ) : (
      <button
        type="button"
        onClick={() => handleAccess()}
        className="button-complimentary"
      >
        Cancel &nbsp;
        <CloseCircleOutlined />
      </button>
    );
  };

  const showSave = () => {
    return edit ? (
      <>
        <button type="submit" className="button-primary">
          Save &nbsp;
          <SaveOutlined />
        </button>
        <PopUp open={isPopUpOpen} onClose={() => setIsPopUpOpen(false)}>
          <div className="text-center w-56">
            <CloseCircleOutlined className="mx-auto text-red-500 text-6xl font-bold" />
            <div className="mx-auto my-4 w-48">
              <h3 className="text-m font-black text-gray-800">
                Save Unsuccessful!
              </h3>
              <p className="text-sm text-gray-500">
                Please fill out the forms properly!
              </p>
              <button 
              type="button" 
              className="
              border-gray-600 border-2 border-solid hover:text-gray-900
              rounded-md w-full text-black my-3 hover:border-gray-900" 
              onClick={() => setIsPopUpOpen(false)}>
                Okay!
              </button>
            </div>
          </div>
        </PopUp>
      </>
    ) : (
      ""
    );
  };


  const updateUser = async (formData) => {
      const id = sessionStorage.getItem("userId")
      try {
        const response = await axios.put(`https://flickd-api.vercel.app/api/users/${id}`, formData);
        if(response.data.message == "Old password is incorrect"){
         
        }
        else{
          messageApi.open({
            type: 'success',
            content: 'User Updated',
          });

          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (error) {
        messageApi.open({
          type: 'error',
          content: 'Update Error',
        });
      }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const values = [...formData.values()];
    const isEmpty = values.includes("");

    if (isEmpty) {
      // alert("Please fill-up the fields properly!");
      setIsPopUpOpen(true);
      return;
    }
    else{
      updateUser(data)
    }

    console.log(data);
  };

  return (
    <>
      {contextHolder}
      {Loaded?
        <div className="content-section">
      <form className="details-container" onSubmit={handleSubmit}>
        <h1 className="title mt-10">Account Settings</h1>

        <div className="field-container">
          <div className="text-field">
            <h3 className="subtitle">First name</h3>
            <Input
              value={User.firstName}
              onChange={handleChange}
              name="firstName"
              size="large"
              placeholder="John"
              disabled={access}
            />
          </div>

          <div className="text-field">
            <h3 className="subtitle">Last name</h3>
            <Input
              value={User.lastName}
              onChange={handleChange}
              name="lastName"
              size="large"
              placeholder="Doe"
              disabled={access}
            />
          </div>
        </div>

        <div className="text-field">
          <h3 className="subtitle">Username</h3>
          <Input
            value={User.username}
            onChange={handleChange}
            name="username"
            placeholder="oWo111"
            disabled={access}
            size="large"
          />
        </div>

        {!access &&
          <div>
          <div className="text-field">
          <h3 className="subtitle">Input Password to Update</h3>
          <Input.Password
            name="oldPassword"
            onChange={handleChange}
            size="large"
            disabled={access}
            placeholder="123password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
          </div>
            <Checkbox checked={UpdatePassword} onChange={(e) => {
              setUpdatePassword(e.target.checked);
            }} className="font-bold text-base mb-5">Update Password?</Checkbox>

          </div>
        }
          {
            UpdatePassword &&
            <div className="text-field">
            <h3 className="subtitle">New Password</h3>
            <Input.Password
              onChange={handleChange}
              name="newPassword"
              size="large"
              disabled={access}
              placeholder="123password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
            </div>
          }

        <div className="button-container">
          {handleAccessButton()}
          {showSave()}
        </div>
      </form>
        </div>
       :
       <h1 className="mt-20 text-center text-bold">LOADING...</h1>
      }
    </>
  );
};

export default AccountSettings;
