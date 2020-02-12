import React, { useState } from 'react';
import './NotesColumn.css';
import { Note } from '../Note/Note';

const notes1 = [
  {
    id: 1,
    camera: [0.5, 2, 3],
    title: 'Title of Comment #1',
    profileColor: '#c4c4c4',
    author: 'Name of person #1',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    id: 2,
    camera: [2, 3, 0.5],
    title: 'Title of Comment #2',
    profileColor: '#c4c4c4',
    author: 'Name of person #2',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    camera: [3, 0.5, 2],
    title: 'Title of Comment #3',
    profileColor: '#c4c4c4',
    author: 'Name of person #3',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    camera: [-2, 0, -3],
    title: 'Title of Comment #4',
    profileColor: '#c4c4c4',
    author: 'Name of person #4',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const notes2 = [
  {
    id: 1,
    camera: [0.5, 2, 3],
    title: 'Great idea!',
    profileColor: '#ff7a7a',
    author: 'Greg Gottesman',
    comment: 'This is great feature to add. But have we thought about how it will work with the new intiative rolling out?',
  },
  {
    id: 2,
    camera: [2, 3, 0.5],
    title: 'Weather material',
    profileColor: '#ffe279',
    author: 'Ed Lazowska',
    comment: 'I disagree with the design choice here. I believe that weather resistant material would be better used here.',
  },
  {
    id: 3,
    camera: [3, 0.5, 2],
    title: 'Production costs',
    profileColor: '#ffc37c',
    author: 'Dawy "The Boulder" Johnson',
    comment: 'Have we thought about the cool factor associated with adding a flap here?  I’ve seeing market research that it is popular with our target demo.',
  },
];

export function NotesColumn({ setCameraPosition }) {
  const [notes, setNotes] = useState(notes1);
  const [selected, setSelected] = useState(null);

  return <div id="notes-column">
      {
        notes.map(({ id, camera, ...note }, index) =>
          <Note key={id}
            selected={id === selected}
            white={index % 2 === 1}
            onClick={() => {
              setCameraPosition(camera);
              setSelected(id)
            }}
            onDelete={() => setNotes(notes.filter(note => note.id !== id))}
            {...note}>
          </Note>
        )
      }
    </div>;
}
