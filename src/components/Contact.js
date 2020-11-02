import React from "react";
import "./Contact.css";

export default function Contact(props) {
  const { name, avatar, online } = props; // another way
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="Profile pic" />
      <div className="status">
        <h4 className="name">{name}</h4>
        <span className={online ? "status-online" : "status-offline"}></span>
        <p className="status-text">{online ? "Online" : "Offline"}</p>
      </div>
    </div>
  );
}