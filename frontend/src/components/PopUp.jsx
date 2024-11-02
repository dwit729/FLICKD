import React from 'react'
import '../css/PopUp.css'
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

function PopUp(props) {
  return (props.trigger) && (props.type === "success") ? (
    <div className='popup'>
        <CheckOutlined className='icon-logo success'/>
        <div className="popup-inner">
            <button className="okBtn" onClick={() => props.setTrigger(false)}>Okay</button>
            <h1 className='message'>{props.messageText}</h1>
        </div>
    </div>
  ) : (props.trigger) && (props.type === "failed") ? (
    <div className='popup'>
        <CloseOutlined className='icon-logo failed'/>
        <div className="popup-inner">
            <button className="okBtn" onClick={() => props.setTrigger(false)}>Okay</button>
            <h1 className='message'>{props.messageText}</h1>
        </div>
    </div>
  ) : "";
}

export default PopUp