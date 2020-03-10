import React from "react";
import { author } from "../redux/store";
import "./Header.css";

function Header({ eyeOpen, onClickEye }) {
  return (
    <div className="head">
      <button className="back-button">Back</button>
      <div className="button-row">
        <img
          className="profile"
          alt={author.name}
          src={author.profilePicture}
        />
        <button className="AR" onClick={() => alert("more features to come")}>
          AR
        </button>
        <button className="share" onClick={() => alert("share link copied")}>
          Share
        </button>
        <button className="eye" onClick={onClickEye}>
          <img
            src={`assets/eye-${eyeOpen ? "open" : "closed"}.svg`}
            alt="Show/hide pins icon"
          />
        </button>
      </div>
      <div className="greeting-row">
        <span>Nike Zoom Prototype 1</span>
      </div>
    </div>
  );
}

export default Header;
