import React, { useState } from 'react';
import './NotesColumn.css';
import { Note } from '../Note/Note';
import { ConfirmDelete } from '../ConfirmDelete/ConfirmDelete';
import TextareaAutosize from 'react-autosize-textarea';

export function NotesColumn({ notes, onSelect, onSubmitComment, onDeleteNote }) {
  const [selected, setSelected] = useState(null);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
  const [inputComment, setInputComment] = useState(undefined);

  return <div id="notes-column">
      <div id="input-column">
        <span id="input-label">
          Comments
        </span>
        <TextareaAutosize id="input-comment"
          placeholder="Add a comment"
          value={inputComment}
          onChange={event => setInputComment(event.target.value)}
        />
        <div id="input-actions">
          <span id="input-cancel" onClick={() => setInputComment('')}>Cancel</span>
          <span id="input-submit"
            onClick={() => {
              onSubmitComment(inputComment);
              setInputComment('');
            }}
          >
            Submit
          </span>
        </div>
      </div>
      {
          notes.map(({ id, camera, ...note }, index) =>
            <Note key={id}
              selected={id === selected}
              white={index % 2 === 1}
              onClick={() => {
                if (selected === id) {
                  setSelected(null);
                } else {
                  onSelect(camera);
                  setSelected(id);
                }
              }}
              onDelete={() => setDeleteNoteId(id)}
              {...note}>
            </Note>
          )
      }
      <ConfirmDelete isModalOpen={deleteNoteId}
        onCancel={() => setDeleteNoteId(null)}
        onDelete={() => {
          onDeleteNote(deleteNoteId);
          setDeleteNoteId(null);
        }}
      />
    </div>;
}
