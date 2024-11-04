import React from "react";
import "../css/PopUp.css";
import { CheckCircleOutlined, CloseOutlined } from "@ant-design/icons";

function PopUp({ open, onClose, children }) {
  // return (props.type === "success") ? (
  //   <div className='popup'>
  //       <div className="popup-inner">
  //           <CheckCircleOutlined className='text-green-600 text-6xl'/>
  //           <h1 className='message'>{props.messageText}</h1>
  //           <button className="okBtn" onClick={() => props.setTrigger(false)}>Okay</button>
  //       </div>
  //   </div>
  // ) : (
  //   <div className='popup'>
  //       <div className="popup-inner">
  //           <CloseCircleOutlined className='text-red-600 text-6xl'/>
  //           <h1 className='message'>{props.messageText}</h1>
  //           <button className="okBtn" onClick={() => props.setTrigger(false)}>Okay</button>
  //       </div>
  //   </div>
  // )

  return (
    <div
      className={`
      fixed inset-0 flex justify-center items-center
      transition-colors
      ${open ? "visible bg-black/20" : "invisible"}
    `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-contrast rounded-xl shadow p-6 transition-all
          ${open ? "scale-150 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          type="button"
          onClick={onClose}
          className="
          absolute top-2 right-2 p-1 text-gray-400 text-1x rounded-lg
          bg-contrast hover:bg-gray-50 hover:text-gray-600
          ">

          <CloseOutlined />
        </button>
        {children}
      </div>
    </div>
  );
}

export default PopUp;
