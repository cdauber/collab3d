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

export function Note({
  selected,
  white,
  pin,
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
    <div className="wrapper">
      <div className={selected ? "selected-bar" : ""}></div>
      <div className={"note" + (selected ? " selected" : "")} {...props}>
        <div className={"note-content" + (selected ? " selected" : "")}>
          <div className="note-top-row">
            <div
              className="pin-color"
              alt=""
              style={{ backgroundColor: pin.color }}
            />
            <div className="note-top-column">
              <div className="author-row">
                <div className="author-name">{author}</div>
                <button
                  className={"resolve" + (thread ? " main-comment" : "")}
                  onClick={event => {
                    event.stopPropagation();
                    onResolve();
                  }}
                >
                  Resolve
                </button>
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
            </div>
          ) : null}
        </div>
        {props.children}
      </div>
    </div>
  );
}
