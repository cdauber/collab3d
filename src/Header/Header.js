import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [eyeOpen, setEyeOpen] = useState(true);

  return (
    <div className="head">
      <button className="back-button">Back</button>
      <div className="button-row">
        <img
          className="profile"
          alt="Greg"
          src="https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg"
        />
        <button className="AR" onClick={() => alert("more features to come")}>
          AR
        </button>
        <button className="share" onClick={() => alert("share link copied")}>
          Share
        </button>
        <button className="eye" onClick={() => setEyeOpen(!eyeOpen)}>
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
