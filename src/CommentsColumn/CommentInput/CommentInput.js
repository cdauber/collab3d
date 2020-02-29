import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea/lib";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";
import {
  attachDrawOver,
  attachFile,
  attachPin,
  beginComment,
  cancelComment,
  deselectComment,
  unattachDrawOver,
  unattachFile,
  unattachPin
} from "../../redux/actions";
import "./CommentInput.css";

function CommentInput({
  pinAttachable = false,
  mainThread = false,
  fileIsAttached,
  drawOverIsAttached,
  pinIsAttached,
  cancelEnabled,
  submitEnabled,
  onFocusTextArea,
  onBlurTextArea,
  onClickAttachFile,
  onClickAttachDrawOver,
  onClickAttachPin,
  onClickCancel,
  onClickSubmit = () => {},
  ...props
}) {
  const [inputComment, setInputComment] = useState();

  return (
    <div className="comment-input-column" {...props}>
      <TextareaAutosize
        className="comment-input-text-area"
        placeholder="Add a comment"
        value={inputComment}
        onChange={event => setInputComment(event.target.value)}
        onFocus={onFocusTextArea}
        onBlur={() => onBlurTextArea(inputComment)}
      />
      <div className="comment-input-actions-row">
        <div className="comment-input-icon-actions">
          <button
            className={
              "comment-input-icon-action-button" +
              (fileIsAttached ? " active" : "")
            }
            data-tip="Attach file"
            onClick={() => onClickAttachFile(inputComment)}
          >
            <img src="assets/clip.svg" alt="File attachment icon" />
          </button>
          <button
            className={
              "comment-input-icon-action-button" +
              (drawOverIsAttached ? " active" : "")
            }
            data-tip="Drawover"
            onClick={() => onClickAttachDrawOver(inputComment)}
          >
            <img src="assets/pencil.svg" alt="File attachment icon" />
          </button>
          {pinAttachable && (
            <button
              className={
                "comment-input-icon-action-button" +
                (pinIsAttached ? " active" : "")
              }
              data-tip="Pin"
              onClick={() => onClickAttachPin(inputComment)}
            >
              <img src="assets/pin.svg" alt="File attachment icon" />
            </button>
          )}
          <ReactTooltip
            className="comment-input-tooltip"
            place="bottom"
            effect="solid"
          />
        </div>
        <div className="comment-input-text-actions">
          <button
            className="comment-input-text-action-button comment-input-cancel-button"
            disabled={
              !(cancelEnabled || (inputComment && inputComment.length > 0))
            }
            onClick={() => {
              setInputComment("");
              onClickCancel();
            }}
          >
            Cancel
          </button>
          <button
            className="comment-input-text-action-button comment-input-submit-button"
            disabled={
              !(submitEnabled || (inputComment && inputComment.length > 0))
            }
            onClick={() => {
              onClickSubmit(inputComment || "");
              setInputComment("");
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  const {
    deselectComment,
    beginComment,
    attachFile,
    unattachFile,
    attachDrawOver,
    unattachDrawOver,
    attachPin,
    unattachPin,
    cancelComment
  } = dispatchProps;

  return {
    ...ownProps,
    ...stateProps,
    onFocusTextArea: () => {
      if (stateProps.isCommenting) {
        if (stateProps.mainThread) {
          deselectComment();
        }
        beginComment();
      }
    },
    onBlurTextArea: comment =>
      !stateProps.fileIsAttached &&
      !stateProps.drawOverIsAttached &&
      !stateProps.pinIsAttached &&
      (!comment || comment.length === 0) &&
      cancelComment(),
    onClickAttachFile: comment => {
      if (stateProps.fileIsAttached) {
        if (
          !stateProps.drawOverIsAttached &&
          !stateProps.pinIsAttached &&
          (!comment || comment.length === 0)
        ) {
          cancelComment();
        } else {
          unattachFile();
        }
      } else {
        if (!stateProps.cancelEnabled) {
          if (ownProps.mainThread) {
            deselectComment();
          }
          beginComment();
        }
        attachFile();
      }
    },
    onClickAttachDrawOver: comment => {
      if (stateProps.drawOverIsAttached) {
        if (
          !stateProps.fileIsAttached &&
          !stateProps.pinIsAttached &&
          (!comment || comment.length === 0)
        ) {
          cancelComment();
        } else {
          unattachDrawOver();
        }
      } else {
        if (!stateProps.cancelEnabled) {
          if (ownProps.mainThread) {
            deselectComment();
          }
          beginComment();
        }
        attachDrawOver();
      }
    },
    onClickAttachPin: comment => {
      if (stateProps.pinIsAttached) {
        if (
          !stateProps.fileIsAttached &&
          !stateProps.drawOverIsAttached &&
          (!comment || comment.length === 0)
        ) {
          cancelComment();
        } else {
          unattachPin();
        }
      } else {
        if (!stateProps.cancelEnabled) {
          if (ownProps.mainThread) {
            deselectComment();
          }
          beginComment();
        }
        attachPin();
      }
    },
    onClickCancel: () => cancelComment()
  };
}

export default connect(
  ({
    isCommenting,
    fileIsAttached,
    file,
    drawOverIsAttached,
    drawing,
    pinIsAttached,
    pin
  }) => ({
    fileIsAttached,
    drawOverIsAttached,
    pinIsAttached,
    cancelEnabled: isCommenting,
    submitEnabled:
      (fileIsAttached && file) ||
      (drawOverIsAttached && drawing) ||
      (pinIsAttached && pin)
  }),
  {
    deselectComment,
    beginComment,
    attachFile,
    unattachFile,
    attachDrawOver,
    unattachDrawOver,
    attachPin,
    unattachPin,
    cancelComment
  },
  mergeProps
)(CommentInput);
