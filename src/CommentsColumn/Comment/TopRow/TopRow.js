import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import { ProfileIcon } from "./ProfileIcon/ProfileIcon";
import "./TopRow.css";

export function addDays(date, days) {
  const result = new Date(date.valueOf());
  result.setDate(date.getDate() + days);
  return result;
}

function relativeDateString(dateInMillis) {
  const today = new Date();
  const date = new Date(dateInMillis);

  if (today.toDateString() === date.toDateString()) {
    return `${date.toLocaleTimeString(navigator.language, {
      timeStyle: "short"
    })} Today`;
  } else if (today.toDateString() === addDays(date, 1).toDateString()) {
    return "Yesterday";
  } else {
    return date.toLocaleDateString(navigator.language, { dateStyle: "medium" });
  }
}

export function TopRow({
  profilePicture,
  author,
  date,
  redrawEnabled,
  onRedraw,
  onResolve
}) {
  const [closeMenu, setCloseMenu] = useState(false);

  useEffect(() => {
    if (closeMenu) {
      setCloseMenu(false);
    }
  }, [closeMenu, setCloseMenu]);

  return (
    <div className="comment-top-row">
      <ProfileIcon src={profilePicture} author={author} />
      <div className="comment-top-column">
        <div className="author-name">{author}</div>
        <div className="comment-date">{relativeDateString(date)}</div>
      </div>
      {redrawEnabled && (
        <button
          className="top-row-redo-button"
          onClick={onRedraw}
        >
          Redraw
        </button>
      )}
      <Popup
        className="top-row-popup"
        trigger={
          <button className="small-icon-button">
            <img src="assets/dots.svg" alt="More options icon" />
          </button>
        }
        position="bottom right"
        on="click"
        closeOnDocumentClick
        closeOnEscape
        disabled={closeMenu}
        arrow={false}
      >
        <div className="top-row-menu">
          <div className="top-row-menu-options-row">
            Options
            <button className="small-icon-button">
              <img
                src="assets/close.svg"
                alt="Close menu icon"
                onClick={() => setCloseMenu(true)}
              />
            </button>
          </div>
          <div
            onClick={() => {
              setCloseMenu(true);
              onResolve();
            }}
          >
            Resolve
          </div>
          <div onClick={() => setCloseMenu(true)}>Edit</div>
          <div
            onClick={() => {
              setCloseMenu(true);
              onResolve();
            }}
          >
            Delete
          </div>
        </div>
      </Popup>
    </div>
  );
}
