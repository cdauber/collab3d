import React from "react";
import "./MainComment.css";
import Comment from "../Comment/Comment";
import { connect } from "react-redux";
import { openThread, selectComment, cancelComment } from "../../redux/actions";

function MainComment({
  comment: { thread, ...comment },
  onClickReply,
  ...props
}) {
  function replyLabel(thread) {
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

  return (
    <Comment comment={comment} {...props}>
      <button
        className="reply-button"
        onClick={event => {
          event.stopPropagation();
          onClickReply();
        }}
      >
        {replyLabel(thread)}
      </button>
    </Comment>
  );
}

export default connect(null, (dispatch, { comment }) => ({
  onClickReply: () => {
    dispatch(cancelComment());
    dispatch(selectComment(comment));
    dispatch(openThread(comment));
  }
}))(MainComment);
