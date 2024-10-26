import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const AccountSettings = () => {
  return (
    <div className="content-section">
      <div className="details-container">
        <h1 className="title">Account Settings</h1>

        <div className="text-field">
          <h3 className="subtitle">Username</h3>
          <Input placeholder="oWo111" />
        </div>

        <div className="text-field">
          <h3 className="subtitle">Password</h3>
          <Input.Password
            placeholder="123password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </div>

        <button className="button-compliment">Get Started - It's free!</button>
      </div>
    </div>
  );
};

export default AccountSettings;
