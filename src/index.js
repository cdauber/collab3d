import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModelRenderer } from "./ModelRenderer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header/Header";
import { NotesColumn } from "./NotesColumn/NotesColumn";
import { DrawOver } from "./DrawOver/DrawOver";
import NOTES, { NoteModel, NoteCamera, NotePin } from "./notes.js";
import LZString from "lz-string";

const COLORS = ["#c4c4c4", "#ff7a7a", "#ffe279", "#ffc37c"];
export const CURSOR = {
  DEFAULT: "pointer",
  DRAWOVER: "drawover"
};

function addComment(notes, camera, controls, comment, drawing) {
  return [
    new NoteModel(
      1 +
        Math.max(
          ...notes.flatMap(({ id, thread }) => [
            id,
            ...thread.map(({ id }) => id)
          ])
        ),
      new NoteCamera(camera.position.toArray(), controls.target.toArray()),
      new NotePin(COLORS[Math.floor(Math.random() * COLORS.length)]),
      LZString.compressToEncodedURIComponent(JSON.stringify(drawing)),
      "Greg Gottesman",
      new Date().getTime(),
      comment
    ),
    ...notes
  ];
}
function addReply(notes, id, comment) {
  return notes.map(({ thread, ...note }) =>
    note.id === id
      ? {
          ...note,
          thread: [
            new NoteModel(
              1 +
                Math.max(
                  ...notes.flatMap(({ id, thread }) => [
                    id,
                    ...thread.map(({ id }) => id)
                  ])
                ),
              null,
              new NotePin(note.pin.color),
              null,
              "Greg Gottesman",
              new Date().getTime(),
              comment
            ),
            ...thread
          ]
        }
      : { thread, ...note }
  );
}
function deleteNote(id, notes) {
  return notes
    .filter(note => note.id !== id)
    .map(({ thread, ...note }) => ({
      thread: thread.filter(note => note.id !== id),
      ...note
    }));
}

function cameraPositionIs(camera, controls, position, focus) {
  return (
    camera.position
      .toArray()
      .every((p, i) => Math.abs(p - position[i]) < 1e-10) &&
    controls.target.toArray().every((t, i) => Math.abs(t - focus[i]) < 1e-10)
  );
}
function handleOrbitChange(
  camera,
  controls,
  selectedNote,
  setSelectedNote,
  setDrawing
) {
  if (
    selectedNote &&
    !cameraPositionIs(
      camera,
      controls,
      selectedNote.camera.position,
      selectedNote.camera.focus
    )
  ) {
    setSelectedNote(null);
    setDrawing(null);
  }
}

function MainPage() {
  const [camera, setCamera] = useState();
  const [controls, setControls] = useState();
  const [notes, setNotes] = useState(NOTES);
  const [selectedNote, setSelectedNote] = useState();
  const [cursor, setCursor] = useState(CURSOR.DEFAULT);
  const [drawing, setDrawing] = useState();

  return (
    <>
      <Header />
      <div id="main-area">
        <div id="variations-column"></div>
        <DrawOver
          drawing={drawing}
          onChange={
            cursor === CURSOR.DRAWOVER
              ? newDrawing => setDrawing(newDrawing)
              : null
          }
          className="draw-over"
        >
          <ModelRenderer
            className="renderer"
            cameraPosition={selectedNote && selectedNote.camera}
            onOrbitChange={() =>
              handleOrbitChange(
                camera,
                controls,
                selectedNote,
                setSelectedNote,
                setDrawing
              )
            }
            setCamera={camera => setCamera(camera)}
            setOrbitControls={controls => setControls(controls)}
          />
        </DrawOver>
        <NotesColumn
          notes={notes}
          selected={selectedNote && selectedNote.id}
          cursor={cursor}
          onSelect={selected => {
            setSelectedNote(selected);
            setDrawing(
              selected.drawOver &&
                JSON.parse(
                  LZString.decompressFromEncodedURIComponent(selected.drawOver)
                )
            );
          }}
          onDeselect={() => {
            setSelectedNote(null);
            setDrawing(null);
          }}
          onSubmitComment={comment => {
            setNotes(addComment(notes, camera, controls, comment, drawing));
            setDrawing(null);
            setCursor(CURSOR.DEFAULT);
          }}
          onCancel={() => {
            setDrawing(null);
            setCursor(CURSOR.DEFAULT);
          }}
          onSubmitReply={({ id }, comment) =>
            setNotes(addReply(notes, id, comment))
          }
          onResolveNote={id => {
            setNotes(deleteNote(id, notes));
            if (selectedNote && id === selectedNote.id) {
              setSelectedNote(null);
              setDrawing(null);
            }
          }}
          onAddDrawOver={() => {
            if (selectedNote) {
              setSelectedNote(null);
            }
            if (cursor === CURSOR.DRAWOVER) {
              setCursor(CURSOR.DEFAULT);
              setDrawing(null);
            } else {
              setCursor(CURSOR.DRAWOVER);
            }
          }}
          allowRedraw={drawing && drawing.length > 0}
          onRedraw={() => {
            if (selectedNote) {
              setSelectedNote(null);
            }
            setDrawing(null);
          }}
        />
      </div>
    </>
  );
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
