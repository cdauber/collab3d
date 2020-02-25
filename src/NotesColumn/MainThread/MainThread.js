import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea/lib";
import { Note } from "../../Note/Note";
import { ConfirmResolve } from "../../ConfirmResolve/ConfirmResolve";
import "./MainThread.css";
import { CURSOR } from "../../index";

export function MainThread({
  notes,
  selected,
  cursor,
  onSubmitComment,
  onCancel,
  onSelect,
  onDeselect,
  onResolveNote,
  onReplyNote,
  allowRedraw,
  onRedraw,
  ...props
}) {
  const [resolveNoteId, setResolveNoteId] = useState();
  const [inputComment, setInputComment] = useState();

  return (
    <div id="notes-column" {...props}>
      <div id="input-column">
        <div id="input-label-column">
          <div id="input-label-row">
            <span id="input-label">
              {cursor === CURSOR.DEFAULT
                ? "Comments"
                : `${cursor.substr(0, 1).toUpperCase()}${cursor.substr(1)}s`}
            </span>
            {cursor === CURSOR.DRAWOVER && allowRedraw && (
              <button id="redraw-button" onClick={onRedraw}>
                Redraw
              </button>
            )}
          </div>
          {cursor !== CURSOR.DEFAULT && (
            <div id="add-comment-row">
              <span id="add-comment-label">Add a comment</span>
              <div id="comment-required-group">
                <div className="red-circle"></div>
                <span id="comment-required">Comment required</span>
              </div>
            </div>
          )}
        </div>
        <TextareaAutosize
          id="input-comment"
          placeholder={
            cursor !== CURSOR.DEFAULT
              ? `Comment is required for ${cursor}s`
              : "Add a comment"
          }
          autoFocus={cursor !== CURSOR.DEFAULT}
          value={inputComment}
          onChange={event => setInputComment(event.target.value)}
        />
        <div id="input-actions">
          <button
            id="input-cancel"
            className={
              inputComment || cursor !== CURSOR.DEFAULT ? "enabled" : ""
            }
            onClick={() => {
              setInputComment("");
              onCancel();
            }}
          >
            Cancel
          </button>
          <button
            id="input-submit"
            className={inputComment ? "enabled" : ""}
            onClick={() => {
              if (inputComment) {
                onSubmitComment(inputComment);
                setInputComment("");
              }
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div
        className={
          "scroll-column" + (cursor !== CURSOR.DEFAULT ? " focused" : "")
        }
      >
        {notes.map(({ id, camera, ...note }, index) => (
          <Note
            key={id}
            selected={id === selected}
            white={index % 2 === 1}
            onClick={() => {
              if (selected === id) {
                onDeselect();
              } else {
                onSelect({ id, camera, ...note });
              }
            }}
            onResolve={() => setResolveNoteId(id)}
            onReply={comment => {
              onReplyNote({ id, camera, ...notes }, comment);
            }}
            {...note}
          ></Note>
        ))}
        {cursor !== CURSOR.DEFAULT && <div id="note-vignette"></div>}
      </div>
      <ConfirmResolve
        isModalOpen={resolveNoteId}
        onCancel={() => setResolveNoteId(null)}
        onResolve={() => {
          onResolveNote(resolveNoteId);
          setResolveNoteId(null);
        }}
      />
    </div>
  );
}
