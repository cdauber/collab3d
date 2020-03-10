import React, { useState } from "react";
import { connect } from "react-redux";
import { ConfirmResolve } from "../../ConfirmResolve/ConfirmResolve";
import {
  addReply,
  cancelComment,
  closeThread,
  deselectComment,
  resolveComment,
  resolveReply,
  selectComment
} from "../../redux/actions";
import Comment from "../Comment/Comment";
import CommentInput from "../CommentInput/CommentInput";
import CommentsColumnHeader from "../CommentsColumnHeader/CommentsColumnHeader";
import "./Thread.css";

function Thread({
  comment,
  isCommenting,
  onReturn,
  onClickComment,
  onClickReply,
  onAddReply,
  onResolveComment,
  ...props
}) {
  const [resolveCommentId, setResolveCommentId] = useState();

  return comment ? (
    <div id="thread-column" {...props}>
      <CommentsColumnHeader
        className="thread-column-header"
        iconImage="assets/left-arrow.svg"
        headerText="Back to all comments"
        onClick={onReturn}
      />
      <Comment
        comment={comment}
        onClick={() => onClickComment(comment)}
        onResolve={() => setResolveCommentId(comment.id)}
      >
        <CommentInput
          onClick={e => e.stopPropagation()}
          onClickSubmit={text => onAddReply(comment, text)}
        />
      </Comment>
      <div className="scroll-column">
        {comment &&
          comment.thread.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              onClick={() => onClickReply(reply)}
              onResolve={() => setResolveCommentId(reply.id)}
            />
          ))}
        {isCommenting && <div id="reply-vignette"></div>}
      </div>
      <ConfirmResolve
        isModalOpen={resolveCommentId}
        onCancel={() => setResolveCommentId(null)}
        onResolve={() => {
          onResolveComment(
            [comment, ...comment.thread].find(
              ({ id }) => id === resolveCommentId
            )
          );
          setResolveCommentId(null);
        }}
      />
    </div>
  ) : null;
}

function mergeProps(
  { selectedComment, ...stateProps },
  dispatchProps,
  ownProps
) {
  const {
    selectComment,
    deselectComment,
    resolveComment,
    resolveReply,
    ...restOfDispatchProps
  } = dispatchProps;

  return {
    ...ownProps,
    ...stateProps,
    ...restOfDispatchProps,
    onClickComment: comment => {
      if (!stateProps.isCommenting && comment !== selectedComment) {
        selectComment(comment);
      }
    },
    onClickReply: comment =>
      comment !== selectedComment ? selectComment(comment) : deselectComment(),
    onResolveComment: comment => {
      if (comment === selectedComment) {
        deselectComment();
      }
      if (comment === ownProps.comment) {
        resolveComment(comment);
      } else {
        resolveReply(ownProps.comment, comment);
      }
    }
  };
}

export default connect(
  ({ isCommenting, selectedCommentId, comments }) => ({
    isCommenting,
    selectedComment: comments
      .flatMap(comment => [comment, ...comment.thread])
      .find(({ id }) => id === selectedCommentId)
  }),
  dispatch => ({
    onReturn: () => {
      dispatch(cancelComment());
      dispatch(closeThread());
    },
    selectComment: comment => dispatch(selectComment(comment)),
    deselectComment: () => dispatch(deselectComment()),
    resolveComment: comment => dispatch(resolveComment(comment)),
    resolveReply: (comment, reply) => dispatch(resolveReply(comment, reply)),
    onAddReply: (comment, text) => {
      dispatch(addReply(comment, text));
      dispatch(cancelComment());
    }
  }),
  mergeProps
)(Thread);
