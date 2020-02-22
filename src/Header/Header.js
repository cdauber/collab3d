import React from "react";
import "./Header.css";
import { FaRegComment } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaNeuter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { RiPencilLine } from "react-icons/ri";

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
        <div className="button-row">
          <button
            className="topComment"
            onClick={() =>
              document.getElementById("myDropdown").classList.toggle("show")
            }
          >
            <FaRegComment className="iconComment" size="1.8em"></FaRegComment>
            <FaAngleDown className="iconAngle" size="1.3em"></FaAngleDown>
            <div id="myDropdown" class="dropdown-content">
              <span
                className="dpSpan"
                onClick={() =>
                  document.getElementById("checker1").classList.toggle("show")
                }
              >
                <FaCheck id="checker1" className="checker1" />
                <FaRegComment
                  className="iconComment"
                  size="1.8em"
                ></FaRegComment>{" "}
                Comment
              </span>
              <span
                className="dpSpan"
                onClick={() =>
                  document.getElementById("checker2").classList.toggle("show")
                }
              >
                <FaCheck id="checker2" className="checker2" />
                <FaNeuter className="iconPin" size="1.8em" /> Pin
              </span>
              <span
                className="dpSpan"
                onClick={() =>
                  document.getElementById("checker3").classList.toggle("show")
                }
              >
                <FaCheck id="checker3" className="checker3" />
                <RiPencilLine className="iconPen" size="1.8em" /> Drawover
              </span>
            </div>
          </button>
          <button className="AR" onClick={() => alert("more features to come")}>
            <span className="textAR">AR</span>
          </button>
          <button className="share" onClick={() => alert("share link copied")}>
            <span className="textShare">Share</span>
          </button>
          <img
            className="profile"
            alt="Greg"
            url
            src="https://assets.website-files.com/5d3152346d95065922960b3a/5db769036b1dff3418bffd20_Greg.jpg"
          ></img>
        </div>
      </div>
    );
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (
    !event.target.matches(".topComment") &&
    !event.target.matches(".iconComment") &&
    !event.target.matches(".iconAngle") &&
    !event.target.matches("dropdown-content")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var check1 = document.getElementsByClassName("checker1");
    var check2 = document.getElementsByClassName("checker2");
    var check3 = document.getElementsByClassName("checker3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
    for (i = 0; i < dropdowns.length; i++) {
      var openCheck1 = check1[i];
      if (openCheck1.classList.contains("show")) {
        openCheck1.classList.remove("show");
      }
    }
    for (i = 0; i < dropdowns.length; i++) {
      var openCheck2 = check2[i];
      if (openCheck2.classList.contains("show")) {
        openCheck2.classList.remove("show");
      }
    }
    for (i = 0; i < dropdowns.length; i++) {
      var openCheck3 = check3[i];
      if (openCheck3.classList.contains("show")) {
        openCheck3.classList.remove("show");
      }
    }
  }
};

export default Header;
