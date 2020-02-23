import React, { useState } from "react";
import { MainThread } from "./MainThread/MainThread";
import "./NotesColumn.css";
import { Thread } from "./Thread/Thread";

export function NotesColumn({
  notes,
  focusInput,
  onSelect,
  onSubmitReply,
  ...props
}) {
  const [activeThread, setActiveThread] = useState(null);

  if (
    activeThread &&
    (focusInput || notes.find(({ id }) => id === activeThread) === undefined)
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
        focusInput={focusInput}
        onSelect={onSelect}
        onReplyNote={({ id, ...note }) => {
          onSelect({ id, ...note });
          setActiveThread(id);
        }}
        {...props}
      />
      <Thread
        className={
          "active-thread" + (!activeThread ? " active-thread-inactive" : "")
        }
        note={notes.find(note => note.id === activeThread)}
        onReturn={() => setActiveThread(null)}
        onSubmitReply={onSubmitReply}
        {...props}
      />
    </div>
  );
}
