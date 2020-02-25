import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (     
    <div className="head">
      <div className="back-row">
        <span className="back">Back</span>
      </div>
      <div className="greeting-row">
        <span className="greeting">Prototype 2</span>
      </div>
      <div className="button-row" >
        <button className="AR"
            onClick={() => alert('more features to come')}>
            <span className="textAR">
              AR
            </span>
          </button>
          <button className="share"
            onClick={() => alert('share link copied')}>
            <span className="textShare">
              Share
            </span>
          </button>
        </div>
        <img className="profile"
             alt = "Greg"
             url src = "https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg"
        >           
        </img>      
    </div>);
  }
}

export default Header;
