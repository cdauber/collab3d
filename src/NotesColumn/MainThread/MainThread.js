import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea/lib";
import { Note } from "../../Note/Note";
import { ConfirmDelete } from "../../ConfirmDelete/ConfirmDelete";
import "./MainThread.css";

export function MainThread({
  notes,
  onSubmitComment,
  onSelect,
  onDeselect,
  onDeleteNote,
  onReplyNote,
  ...props
}) {
  const [selected, setSelected] = useState(null);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
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
          <span id="input-cancel" onClick={() => setInputComment("")}>
            Cancel
          </span>
          <span
            id="input-submit"
            onClick={() => {
              onSubmitComment(inputComment);
              setInputComment("");
            }}
          >
            Submit
          </span>
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
            onDelete={() => setDeleteNoteId(id)}
            onReply={comment => {
              setSelected(id);
              onReplyNote(id, comment);
            }}
            {...note}
          ></Note>
        ))}
      </div>
      <ConfirmDelete
        isModalOpen={deleteNoteId}
        onCancel={() => setDeleteNoteId(null)}
        onDelete={() => {
          onDeleteNote(deleteNoteId);
          setDeleteNoteId(null);
        }}
      />
    </div>
  );
}
