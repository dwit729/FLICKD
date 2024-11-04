import React from 'react'
import '../css/PopUp.css'
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";

function PopUp(props) {
  return (props.type === "success") ? (
    <div className='popup'>
        <div className="popup-inner">
            <CheckCircleOutlined className='text-green-600 text-6xl'/>
            <h1 className='message'>{props.messageText}</h1>
            <button className="okBtn" onClick={() => props.setTrigger(false)}>Okay</button>
        </div>
    </div>
  ) : (
    <div className='popup'>
        <div className="popup-inner">
            <CloseCircleOutlined className='text-red-600 text-6xl'/>
            <h1 className='message'>{props.messageText}</h1>
            <button className="okBtn" onClick={() => props.setTrigger(false)}>Okay</button>
        </div>
    </div>
  )
}

export default PopUp