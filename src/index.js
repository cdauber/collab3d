import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModelRenderer } from "./ModelRenderer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header/Header";
import { NotesColumn } from "./NotesColumn/NotesColumn";

const notes1 = [
  {
    id: 1,
    camera: { position: [0.5, 2, 3], focus: [0, 0, 0] },
    profileColor: "#c4c4c4",
    author: "Name of person #1",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    thread: [
      {
        id: 5,
        profileColor: "#c4c4c4",
        author: "Name of person #2",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
      },
      {
        id: 6,
        profileColor: "#c4c4c4",
        author: "Name of person #2",
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
      }
    ]
  },
  {
    id: 2,
    camera: { position: [2, 3, 0.5], focus: [0, 0, 0] },
    profileColor: "#c4c4c4",
    author: "Name of person #2",
    comment:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thread: []
  },
  {
    id: 3,
    camera: { position: [3, 0.5, 2], focus: [0, 0, 0] },
    profileColor: "#c4c4c4",
    author: "Name of person #3",
    comment:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thread: []
  },
  {
    id: 4,
    camera: { position: [-2, 0, -3], focus: [0, 0, 0] },
    profileColor: "#c4c4c4",
    author: "Name of person #4",
    comment:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thread: []
  }
];

const notes2 = [
  {
    id: 1,
    camera: { position: [0.5, 2, 3], focus: [0, 0, 0] },
    profileColor: "#ff7a7a",
    author: "Greg Gottesman",
    comment:
      "This is great feature to add. But have we thought about how it will work with the new intiative rolling out?",
    thread: []
  },
  {
    id: 2,
    camera: { position: [2, 3, 0.5], focus: [0, 0, 0] },
    profileColor: "#ffe279",
    author: "Ed Lazowska",
    comment:
      "I disagree with the design choice here. I believe that weather resistant material would be better used here.",
    thread: []
  },
  {
    id: 3,
    camera: { position: [3, 0.5, 2], focus: [0, 0, 0] },
    profileColor: "#ffc37c",
    author: 'Dawy "The Boulder" Johnson',
    comment:
      "Have we thought about the cool factor associated with adding a flap here?  I’ve seeing market research that it is popular with our target demo.",
    thread: []
  }
];

const colors = ["#c4c4c4", "#ff7a7a", "#ffe279", "#ffc37c"];

const addComment = (notes, camera, controls, comment) => [
  {
    id: 1 + Math.max(...notes.map(({ id }) => id)),
    camera: {
      position: camera.position.toArray(),
      focus: controls.target.toArray()
    },
    profileColor: colors[Math.floor(Math.random() * colors.length)],
    author: "Greg Gottesman",
    comment: comment,
    thread: []
  },
  ...notes
];

const addReply = (notes, id, comment) =>
  notes.map(({ thread, ...note }) =>
    note.id === id
      ? {
          ...note,
          thread: [
            ...thread,
            {
              id: 1 + Math.max(id, ...thread.map(({ id }) => id)),
              profileColor: note.profileColor,
              author: "Greg Gottesman",
              comment: comment
            }
          ]
        }
      : { thread, ...note }
  );

const deleteNote = (id, notes) =>
  notes
    .filter(note => note.id !== id)
    .map(({ thread, ...note }) => ({
      thread: thread.filter(note => note.id !== id),
      ...note
    }));

function MainPage() {
  const [cameraPosition, setCameraPosition] = useState({
    position: [-2, 0, -3],
    focus: [0, 0, 0]
  });
  const [camera, setCamera] = useState(undefined);
  const [controls, setControls] = useState(undefined);
  const [notes, setNotes] = useState(notes2);

  return (
    <>
      <Header />
      <div id="main-area">
        <div id="variations-column"></div>
        <ModelRenderer
          id="three-renderer"
          cameraPosition={cameraPosition}
          onUpdate={() => setCameraPosition(null)}
          setCamera={camera => setCamera(camera)}
          setOrbitControls={controls => setControls(controls)}
        />
        <NotesColumn
          notes={notes}
          onSubmitComment={comment =>
            setNotes(addComment(notes, camera, controls, comment))
          }
          onSubmitReply={(id, comment) =>
            setNotes(addReply(notes, id, comment))
          }
          onSelect={cameraPosition => setCameraPosition(cameraPosition)}
          onDeleteNote={id => setNotes(deleteNote(id, notes))}
        />
      </div>
    </>
  );
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
