import "../css/Button.css";
import "../css/AccountSettings.css";

import React, { useState } from "react";
import { Input } from "antd";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  EditOutlined,
  CloseCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";

const AccountSettings = () => {
  const [access, setAccess] = useState(true);
  const [edit, setEdit] = useState(false);

  const handleAccess = () => {
    if (access) {
      setAccess(false);
      setEdit(true);
    } else {
      setAccess(true);
      setEdit(false);
    }
  };

  const handleAccessButton = () => {
    return access ? (
      <button type="button" onClick={() => handleAccess()} className="button-primary">
        Edit &nbsp;
        <EditOutlined />
      </button>
    ) : (
      <button type="button" onClick={() => handleAccess()} className="button-complimentary">
        Cancel &nbsp;
        <CloseCircleOutlined />
      </button>
    );
  };

  const showSave = () => {
    return edit ? (
      <button type="submit" className="button-primary">
        Save &nbsp;
        <SaveOutlined />
      </button>
    ) : (
      ""
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const values = [...formData.values()];
    const isEmpty = values.includes('');

    if(isEmpty) {
      alert("Please fill-up the fields properly!");
      return;
    }

    console.log(data)
  };

  return (
    <div className="content-section">
      <form className="details-container" onSubmit={handleSubmit}>
        <h1 className="title">Account Settings</h1>

        <div className="field-container">
          <div className="text-field">
            <h3 className="subtitle">First name</h3>
            <Input name="firstName" size="large" placeholder="John" disabled={access} />
          </div>

          <div className="text-field">
            <h3 className="subtitle">Last name</h3>
            <Input name="lastName" size="large" placeholder="Doe" disabled={access} />
          </div>
        </div>

        <div className="text-field">
          <h3 className="subtitle">Email</h3>
          <Input name="email" size="large" placeholder="john_doe111@email.com" disabled={access} />
        </div>

        <div className="text-field">
          <h3 className="subtitle">Username</h3>
          <Input name="username" placeholder="oWo111" disabled={access} size="large" />
        </div>

        <div className="text-field">
          <h3 className="subtitle">Password</h3>
          <Input.Password
            name="password"
            size="large"
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
      </form>
    </div>
  );
};

export default AccountSettings;
