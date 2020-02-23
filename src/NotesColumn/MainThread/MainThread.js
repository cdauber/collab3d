import React, { useState, useEffect, useRef } from "react";
import TextareaAutosize from "react-autosize-textarea/lib";
import { Note } from "../../Note/Note";
import { ConfirmResolve } from "../../ConfirmResolve/ConfirmResolve";
import "./MainThread.css";

export function MainThread({
  notes,
  selected,
  focusInput,
  onSubmitComment,
  onSelect,
  onDeselect,
  onResolveNote,
  onReplyNote,
  ...props
}) {
  const [resolveNoteId, setResolveNoteId] = useState();
  const [inputComment, setInputComment] = useState();

  return (
    <div id="notes-column" {...props}>
      <div id="input-column">
        <div id="input-label-row">
          <span id="input-label">Comments</span>
          {focusInput ? (
            <div id="comment-required-group">
              <div className="red-circle"></div>
              <span id="comment-required">Comment required</span>
            </div>
          ) : null}
        </div>
        <TextareaAutosize
          id="input-comment"
          placeholder={
            focusInput
              ? "Comment is required for pins and drawovers"
              : "Add a comment"
          }
          autoFocus={focusInput}
          value={inputComment}
          onChange={event => setInputComment(event.target.value)}
        />
        <div id="input-actions">
          <button
            id="input-cancel"
            className={inputComment ? "enabled" : ""}
            onClick={() => inputComment && setInputComment("")}
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
      <div className={"scroll-column" + (focusInput ? " focused" : "")}>
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
        {focusInput ? <div id="note-vignette"></div> : null}
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
