import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="head">
        <div className="greeting-row">
          <span className="greeting">Welcome Greg!</span>
        </div>
        <div className="button-row">
          <div className="buttons">
            <button
              className="share"
              onClick={() => alert("share link copied")}
            >
              <span className="textShare">Share</span>
            </button>
            <button
              className="AR"
              onClick={() => alert("more features to come")}
            >
              <span className="textAR">AR</span>
            </button>
          </div>
          <img
            className="profile"
            alt="Greg"
            src="https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg"
          />
        </div>
      </div>
    );
  }
}

export default Header;
