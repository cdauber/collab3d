import React from "react";
import { connect } from "react-redux";
import "./CommentsColumn.css";
import MainThread from "./MainThread/MainThread";
import Thread from "./Thread/Thread";

function CommentsColumn({ activeThread, ...props }) {
  return (
    <div id="comments-row">
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
  );
}

export default connect(
  ({ activeThreadId, comments }) => ({
    activeThread: comments.find(({ id }) => id === activeThreadId)
  }),
  () => ({})
)(CommentsColumn);
