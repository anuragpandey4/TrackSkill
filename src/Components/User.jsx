import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
// script.js
import "nes.css/css/nes.min.css";
import "./CSS/User.css";
import Skills from "./Skills";

const User = () => {
  const [userName, setUserName] = useState("Your Name");
  // const [userTextIcon, setUserTextIcon] = useState("U");
  const userNameRef = useRef(null);

  const edit = () => {
    setUserName(userNameRef.current.value);
    userNameRef.current.value = "";
    localStorage.setItem("userName", userName);
  };

  useEffect(() => {
    setUserName(localStorage.getItem("userName"));
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      edit();
    }
  };

  return (
    <div className="container">
      <div className="user-container is-dark">
        <div className="user-text-icon">{userName && userName[0]}</div>
        <div className="user-name">
          <input
            onKeyDown={handleKeyDown}
            ref={userNameRef}
            type="text submit"
            placeholder={userName}
            className="nes-input user-name-input"
          />
        </div>
        <div
          onClick={() => {
            edit();
          }}
          className="nes-btn is-warning edit-btn"
        >
          Edit
          {/* <i class="snes-jp-logo"></i> */}
        </div>
      </div>
      <h1 className="header">
        <a href="#" class="nes-badge header-container">
          <span class="is-primary">Skills Tracker</span>
        </a>
        <i class="nes-ash"></i>
      </h1>
      <Skills setUserName={setUserName} />
    </div>
  );
};

export default User;
