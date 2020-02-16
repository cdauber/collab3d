import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModelRenderer } from "./ModelRenderer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header/Header";
import { NotesColumn } from "./NotesColumn/NotesColumn";
import { addDays } from "./Note/Note";

const NOTES = [
  {
    id: 1,
    camera: {
      position: [2.67002707256112, 10.68010829024448, 16.02016243536672],
      focus: [0, 0, 0]
    },
    pin: {
      color: "#ff7a7a"
    },
    author: "Greg Gottesman",
    date: new Date().getTime(),
    comment:
      "This is great feature to add. But have we thought about how it will work with the new intiative rolling out?",
    thread: []
  },
  {
    id: 2,
    camera: {
      position: [10.680108290244483, 16.020162435366725, 2.670027072561121],
      focus: [0, 0, 0]
    },
    pin: {
      color: "#ffe279"
    },
    author: "Ed Lazowska",
    date: addDays(new Date(), -1).getTime(),
    comment:
      "I disagree with the design choice here. I believe that weather resistant material would be better used here.",
    thread: []
  },
  {
    id: 3,
    camera: {
      position: [16.02016243536672, 2.67002707256112, 10.68010829024448],
      focus: [0, 0, 0]
    },
    pin: {
      color: "#ffc37c"
    },
    author: 'Dawy "The Boulder" Johnson',
    date: addDays(new Date(), -2).getTime(),
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
    pin: { color: colors[Math.floor(Math.random() * colors.length)] },
    author: "Greg Gottesman",
    date: new Date().getTime(),
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
              pin: { color: note.pin.color },
              author: "Greg Gottesman",
              date: new Date().getTime(),
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
  const [cameraPosition, setCameraPosition] = useState(undefined);
  const [camera, setCamera] = useState(undefined);
  const [controls, setControls] = useState(undefined);
  const [notes, setNotes] = useState(NOTES);

  return (
    <>
      <Header />
      <div id="main-area">
        <div id="variations-column"></div>
        <ModelRenderer
          id="three-renderer"
          cameraPosition={cameraPosition}
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
          onDeselect={() => setCameraPosition(null)}
          onResolveNote={id => setNotes(deleteNote(id, notes))}
        />
      </div>
    </>
  );
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
