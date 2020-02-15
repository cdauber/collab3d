import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (<div className="head">
      <div className="greeting-row">
        <span className="greeting">Welcome Username!</span>
      </div>
      <div className="button-row">
        <div className="buttons">
          <button
            className="share"
            onClick={() => alert('share link copied')}>
            <span className="text1">
              Share
         </span>
          </button>
          <button
            className="AR"
            onClick={() => alert('more features to come')}>
            <span className="text2">
              AR
         </span>
          </button>
        </div>
        <button
          className="profile"
          onClick={() => alert('profile')}>

        </button>
      </div>
    </div>);
  }
}

export default Header;