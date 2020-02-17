import React, { useState } from "react";
import "./Thread.css";
import { Note } from "../../Note/Note";
import TextareaAutosize from "react-autosize-textarea/lib";
import { ConfirmResolve } from "../../ConfirmDelete/ConfirmResolve";

export function Thread({
  note,
  onReturn,
  onSubmitReply,
  onResolveNote,
  ...props
}) {
  const [replyComment, setReplyComment] = useState(undefined);
  const [deleteNoteId, setDeleteNoteId] = useState(null);

  return note ? (
    <div id="thread-column" {...props}>
      <div id="back-to-comments-row" onClick={onReturn}>
        <i id="back-to-comments-icon" className="material-icons">
          chevron_left
        </i>
        Back to all comments
      </div>
      <Note
        selected
        onResolve={() => setDeleteNoteId(note.id)}
        showReply={false}
        {...note}
      >
        <TextareaAutosize
          id="reply-comment"
          placeholder="Add a reply"
          value={replyComment}
          onChange={event => setReplyComment(event.target.value)}
          onKeyPress={event => {
            if (event.key === "Enter") {
              event.preventDefault();
              onSubmitReply(note.id, replyComment);
              setReplyComment("");
            }
          }}
        />
      </Note>
      <div className="scroll-column">
        {note &&
          note.thread.map(note => (
            <Note
              key={note.id}
              white
              onResolve={() => setDeleteNoteId(note.id)}
              showReply={false}
              {...note}
            />
          ))}
      </div>
      <ConfirmResolve
        isModalOpen={deleteNoteId}
        onCancel={() => setDeleteNoteId(null)}
        onResolve={() => {
          onResolveNote(deleteNoteId);
          setDeleteNoteId(null);
        }}
      />
    </div>
  ) : null;
}
