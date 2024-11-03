import "../css/Button.css";

import React, {useState} from "react";
import { Input } from "antd";
import { 
  EyeInvisibleOutlined, 
  EyeTwoTone, 
  EditOutlined, 
  CloseCircleOutlined, 
  SaveOutlined } from "@ant-design/icons";

const AccountSettings = () => {
  const [access, setAccess] = useState(true)
  const [edit, setEdit] = useState(false)

  const handleAccess = () => {
    if(access) {setAccess(false); setEdit(true)} 
    else {setAccess(true); setEdit(false)}
  }

  const handleAccessButton = () => {
    return access ? 
    <button onClick={() => handleAccess()} className="button-primary"> 
      Edit &nbsp; 
    <EditOutlined /> 
    </button> :
    <button onClick={() => handleAccess()} className="button-complimentary"> 
      Cancel &nbsp; 
      <CloseCircleOutlined /> 
    </button>
  }

  const showSave = () => {
    return edit ? <button className="button-primary"> 
    Save &nbsp; 
    <SaveOutlined />
  </button> : "";
  }

  return (
    <div className="content-section">
      <div className="details-container">
        <h1 className="title">Account Settings</h1>

        <div className="text-field">
          <h3 className="subtitle">Username</h3>
          <Input placeholder="oWo111" disabled={access} />
        </div>

        <div className="text-field">
          <h3 className="subtitle">Password</h3>
          <Input.Password
            disabled={access}
            placeholder="123password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <div className="button-container">
          {handleAccessButton()}
          {showSave()}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
