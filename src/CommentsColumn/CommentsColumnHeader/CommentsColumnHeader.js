import React from "react";
import "./CommentsColumnHeader.css";

export function CommentsColumnHeader({
  headerText,
  iconImage,
  className,
  ...props
}) {
  return (
    <div
      className={
        "comments-column-header-row" + (className ? " " + className : "")
      }
      {...props}
    >
      {iconImage && (
        <img
          className="comments-column-header-icon-image"
          src={iconImage}
          alt="Back icon"
        />
      )}
      <span className="comments-column-header-text">{headerText}</span>
    </div>
  );
}
