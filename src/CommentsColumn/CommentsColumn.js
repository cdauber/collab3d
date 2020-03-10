import React from "react";
import { connect } from "react-redux";
import "./CommentsColumn.css";
import MainThread from "./MainThread/MainThread";
import Thread from "./Thread/Thread";
import { useState } from "react";
import CommentsColumnHeader from "./CommentsColumnHeader/CommentsColumnHeader";
import { closeThread, cancelComment } from "../redux/actions";

function CommentsColumn({ activeThread, onClickShowHide, ...props }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div id="comments-row" className={isOpen ? "" : "closed"}>
      <CommentsColumnHeader
        headerText="Show comments"
        className={"comments-column-closed-label" + (isOpen ? "" : " closed")}
        onClick={() => setIsOpen(true)}
      />
      <div className={"comments-column-inside" + (isOpen ? "" : " closed")}>
        <MainThread
          className={
            "main-thread" + (activeThread ? " main-thread-inactive" : "")
          }
          {...props}
        />
        <Thread
          className={
            "active-thread" + (!activeThread ? " active-thread-inactive" : "")
          }
          comment={activeThread}
        />
      </div>
      <button
        className={"comments-column-close-button" + (isOpen ? "" : " closed")}
        onClick={() => {
          setIsOpen(!isOpen);
          onClickShowHide();
        }}
      >
        <img src="assets/right-arrow.svg" alt="Close sidebar icon" />
      </button>
    </div>
  );
}

export default connect(
  ({ activeThreadId, comments }) => ({
    activeThread: comments.find(({ id }) => id === activeThreadId)
  }),
  dispatch => ({
    onClickShowHide: () => {
      dispatch(cancelComment());
      dispatch(closeThread());
    }
  })
)(CommentsColumn);
