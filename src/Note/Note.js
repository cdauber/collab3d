import React from "react";
import "./Note.css";

export function addDays(date, days) {
  const result = new Date(date.valueOf());
  result.setDate(date.getDate() + days);
  return result;
}

function dateString(dateInMillis) {
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

function replyString(thread) {
  if (thread && thread.length > 0) {
    if (thread.length > 1) {
      return `${thread.length} Replies`;
    } else {
      return "1 Reply";
    }
  } else {
    return "Reply";
  }
}

function reduceToClassName(classObj) {
  return Object.keys(classObj)
    .reduce((acc, key) => (classObj[key] ? acc + key + " " : acc), "")
    .trimRight();
}

export function Note({
  selected,
  white,
  pin,
  drawOver,
  author,
  date,
  comment,
  thread,
  onResolve,
  onReply,
  showReply = true,
  ...props
}) {
  return (
    <div className={"wrapper" + (selected ? " selected" : "")}>
      <div className={selected ? "selected-bar" : ""}></div>
      <div className="corner-tag-group">
        <div
          className={reduceToClassName({
            "corner-tag": true,
            drawover: !!drawOver
          })}
        ></div>
        {drawOver && (
          <img className="icon" src="assets/pencil.svg" alt="pencil icon" />
        )}
      </div>
      <div className="note" {...props}>
        <div className="note-content">
          <div className="note-top-row">
            <img
              className="pin-color"
              alt=""
              style={{ backgroundColor: pin.color }}
            />
            <div className="note-top-column">
              <div className="author-row">
                <div className="author-name">{author}</div>
                <div>
                  <button
                    className={"resolve" + (thread ? " main-comment" : "")}
                    onClick={event => {
                      event.stopPropagation();
                      onResolve();
                    }}
                  >
                    Resolve
                  </button>
                  <button className="more-options-button">
                    <img src="assets/dots.svg" alt="more options icon" />
                  </button>
                </div>
              </div>
              <div className="note-date">{dateString(date)}</div>
            </div>
          </div>
          <p className="comment">{comment}</p>
          {showReply ? (
            <div className="reply-row">
              <button
                className="reply-button"
                onClick={event => {
                  event.stopPropagation();
                  onReply();
                }}
              >
                {replyString(thread)}
              </button>
              <button className="attachment-button">
                <img
                  className="attachement-icon"
                  src="assets/clip.svg"
                  alt="attachment icon"
                />
              </button>
            </div>
          ) : null}
        </div>
        {props.children}
      </div>
    </div>
  );
}
