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
      position: [3.6724893617668513, 0.10448181831762553, -0.10443959458119491],
      focus: [0, 0, 0]
    },
    pin: {
      color: "#ff7a7a"
    },
    author: "Palvi Mehta",
    date: new Date().getTime(),
    comment:
      "I dont like how the openings end before the bottom of the black canvas, what can we do about this?",
    thread: []
  },
  {
    id: 2,
    camera: {
      position: [-0.2391278466290959, 0.2413250726086689, 1.7599386342780603],
      focus: [0, 0, 0]
    },
    pin: {
      color: "#ffe279"
    },
    author: "Ed Lazowska",
    date: addDays(new Date(), -1).getTime(),
    comment:
      "I'm really proud of the lacing design here, do we think it will be too complicated?",
    thread: []
  },
  {
    id: 3,
    camera: {
      position: [
        1.2556252511652628,
        -1.8845128318655633,
        -0.006335531414734807
      ],
      focus: [1.2637327202535016, 0, -0.09982552431336995]
    },
    pin: {
      color: "#ffc37c"
    },
    author: " Kabir Shahani",
    date: addDays(new Date(), -2).getTime(),
    comment:
      "I love the differnent fonts, but make the nike and zoom closer together in size",
    thread: []
  }
];

const colors = ["#c4c4c4", "#ff7a7a", "#ffe279", "#ffc37c"];

const addComment = (notes, camera, controls, comment) => [
  {
    id:
      1 +
      notes.flatMap(({ id, thread }) => [id, ...thread.map(({ id }) => id)]),
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
            {
              id:
                1 +
                Math.max(
                  notes.flatMap(({ id, thread }) => [
                    id,
                    ...thread.map(({ id }) => id)
                  ])
                ),
              pin: { color: note.pin.color },
              author: "Greg Gottesman",
              date: new Date().getTime(),
              comment: comment
            },
            ...thread
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
