import React from "react";
import "./Comment.css";
import { connect } from "react-redux";
import { TopRow } from "./TopRow/TopRow";

function Comment({
  comment: { text, drawOver, pin, ...comment },
  selected,
  onResolve,
  children,
  ...props
}) {
  return (
    <div className={"comment" + (selected ? " selected" : "")} {...props}>
      <div className="comment-content">
        <TopRow {...comment} onResolve={onResolve} />
        <p className="comment-text">{text}</p>
        {children}
      </div>
      <div className="comment-flag-row">
        {drawOver && (
          <img
            className="comment-flag"
            src="assets/drawover-flag.svg"
            alt="Drawover flag"
          />
        )}
        {pin && (
          <img
            className="comment-flag"
            src="assets/pin-flag.svg"
            alt="Pin flag"
          />
        )}
      </div>
    </div>
  );
}

export default connect(
  ({ selectedCommentId }, { comment: { id } }) => ({
    selected: id === selectedCommentId
  }),
  dispatch => ({})
)(Comment);
