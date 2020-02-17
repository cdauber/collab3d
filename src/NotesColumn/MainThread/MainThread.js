import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea/lib";
import { Note } from "../../Note/Note";
import { ConfirmResolve } from "../../ConfirmDelete/ConfirmResolve";
import "./MainThread.css";

export function MainThread({
  notes,
  onSubmitComment,
  onSelect,
  onDeselect,
  onResolveNote,
  onReplyNote,
  ...props
}) {
  const [selected, setSelected] = useState(null);
  const [resolveNoteId, setResolveNoteId] = useState(null);
  const [inputComment, setInputComment] = useState(undefined);

  return (
    <div id="notes-column" {...props}>
      <div id="input-column">
        <span id="input-label">Comments</span>
        <TextareaAutosize
          id="input-comment"
          placeholder="Add a comment"
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
      <div className="scroll-column">
        {notes.map(({ id, camera, ...note }, index) => (
          <Note
            key={id}
            selected={id === selected}
            white={index % 2 === 1}
            onClick={() => {
              if (selected === id) {
                onDeselect();
                setSelected(null);
              } else {
                onSelect(camera);
                setSelected(id);
              }
            }}
            onResolve={() => setResolveNoteId(id)}
            onReply={comment => {
              setSelected(id);
              onReplyNote(id, comment);
            }}
            {...note}
          ></Note>
        ))}
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
