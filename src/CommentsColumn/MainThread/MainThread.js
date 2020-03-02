import React, { useState } from "react";
import { connect } from "react-redux";
import { ConfirmResolve } from "../../ConfirmResolve/ConfirmResolve";
import {
  addComment,
  cancelComment,
  deselectComment,
  resolveComment,
  selectComment
} from "../../redux/actions";
import CommentInput from "../CommentInput/CommentInput";
import CommentsColumnHeader from "../CommentsColumnHeader/CommentsColumnHeader";
import MainComment from "../MainComment/MainComment";
import "./MainThread.css";

function MainThread({
  isCommenting,
  comments,
  onAddComment,
  onClickComment,
  onResolveComment,
  ...props
}) {
  const [resolveCommentId, setResolveCommentId] = useState();

  return (
    <div id="comment-column" {...props}>
      <div id="input-column">
        <CommentsColumnHeader headerText="Comments" />
        <CommentInput pinAttachable mainThread onClickSubmit={onAddComment} />
      </div>
      <div className={"scroll-column" + (isCommenting ? " focused" : "")}>
        {comments.map(comment => (
          <MainComment
            key={comment.id}
            comment={comment}
            onClick={() => onClickComment(comment)}
            onResolve={() => setResolveCommentId(comment.id)}
          />
        ))}
        {isCommenting && <div id="comment-vignette"></div>}
      </div>
      <ConfirmResolve
        isModalOpen={resolveCommentId}
        onCancel={() => setResolveCommentId(null)}
        onResolve={() => {
          onResolveComment(comments.find(({ id }) => id === resolveCommentId));
          setResolveCommentId(null);
        }}
      />
    </div>
  );
}

export default connect(
  ({ isCommenting, selectedCommentId, comments }) => ({
    isCommenting,
    selectedComment: comments.find(({ id }) => id === selectedCommentId),
    comments
  }),
  dispatch => ({
    onAddComment: comment => {
      dispatch(addComment(comment));
      dispatch(cancelComment());
    },
    selectComment: comment => dispatch(selectComment(comment)),
    deselectComment: () => dispatch(deselectComment()),
    resolveComment: comment => dispatch(resolveComment(comment))
  }),
  (
    { selectedComment, ...stateProps },
    { selectComment, deselectComment, resolveComment, ...dispatchProps },
    ownProps
  ) => ({
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    onClickComment: comment =>
      comment !== selectedComment ? selectComment(comment) : deselectComment(),
    onResolveComment: comment => {
      if (comment === selectedComment) {
        deselectComment();
      }
      resolveComment(comment);
    }
  })
)(MainThread);
