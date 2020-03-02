import React from "react";
import { connect } from "react-redux";
import { unattachDrawOver, unattachPin } from "../../redux/actions";
import { CURSOR } from "../../redux/store";
import "./CommentsColumnHeader.css";

function CommentsColumnHeader({
  headerText,
  iconImage,
  className,
  redrawEnabled,
  repinEnabled,
  onRedraw,
  onRepin,
  ...props
}) {
  return (
    <div
      className={
        "comments-column-header-row" + (className ? " " + className : "")
      }
      {...props}
    >
      <div>
        {iconImage && (
          <img
            className="comments-column-header-icon-image"
            src={iconImage}
            alt="Back icon"
          />
        )}
        <span className="comments-column-header-text">{headerText}</span>
      </div>
      {!iconImage && redrawEnabled && (
        <button
          className="comments-column-header-redo-button"
          onClick={onRedraw}
        >
          Redraw
        </button>
      )}
      {!iconImage && repinEnabled && (
        <button
          className="comments-column-header-redo-button"
          onClick={onRepin}
        >
          Repin
        </button>
      )}
    </div>
  );
}

export default connect(
  ({ cursor, drawing, pin }) => ({
    redrawEnabled: cursor === CURSOR.DRAWOVER && drawing,
    repinEnabled: cursor === CURSOR.PIN && pin
  }),
  dispatch => ({
    onRedraw: () => {
      dispatch(unattachDrawOver());
    },
    onRepin: () => {
      dispatch(unattachPin());
    }
  })
)(CommentsColumnHeader);
