import React from "react";
import { connect } from "react-redux";
import { unattachDrawOver } from "../../redux/actions";
import { CURSOR } from "../../redux/store";
import "./Comment.css";
import { TopRow } from "./TopRow/TopRow";

function Comment({
  comment: { text, drawOver, pin, ...comment },
  selected,
  redrawEnabled,
  onRedraw,
  onResolve,
  children,
  ...props
}) {
  return (
    <div className={"comment" + (selected ? " selected" : "")} {...props}>
      <div className="comment-content">
        <TopRow {...comment} redrawEnabled={redrawEnabled} />
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
        {redrawEnabled && (
          <button className="comment-flag-redo-button" onClick={onRedraw}>
            Redraw
          </button>
        )}
      </div>
    </div>
  );
}

export default connect(
  (
    { cursor, activeThreadId, selectedCommentId, drawing },
    { comment: { id } }
  ) => ({
    selected: id === selectedCommentId,
    redrawEnabled:
      id === activeThreadId && cursor === CURSOR.DRAWOVER && drawing
  }),
  dispatch => ({
    onRedraw: () => {
      dispatch(unattachDrawOver());
    }
  })
)(Comment);
