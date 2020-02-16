import React, { useState } from "react";
import { MainThread } from "./MainThread/MainThread";
import "./NotesColumn.css";
import { Thread } from "./Thread/Thread";

export function NotesColumn({
  notes,
  onSelect,
  onDeselect,
  onSubmitComment,
  onSubmitReply,
  ...props
}) {
  const [activeThread, setActiveThread] = useState(null);
  const [lastActiveThread, setLastActiveThread] = useState(null);

  if (
    activeThread &&
    notes.find(({ id }) => id === activeThread) === undefined
  ) {
    setActiveThread(null);
  }

  return (
    <div id="notes-row">
      <MainThread
        className={
          "main-thread" + (activeThread ? " main-thread-inactive" : "")
        }
        notes={notes}
        onSelect={onSelect}
        onDeselect={onDeselect}
        onSubmitComment={onSubmitComment}
        onReplyNote={id => {
          onSelect(notes.find(note => note.id === id).camera);
          setActiveThread(id);
          setLastActiveThread(id);
        }}
        {...props}
      />
      <Thread
        className={
          "active-thread" + (!activeThread ? " active-thread-inactive" : "")
        }
        note={notes.find(note => note.id === lastActiveThread)}
        onReturn={() => setActiveThread(null)}
        onSubmitReply={onSubmitReply}
        {...props}
      />
    </div>
  );
}
