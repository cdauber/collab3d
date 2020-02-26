import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModelRenderer2 } from "./ModelRenderer2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header/Header";
import { NotesColumn } from "./NotesColumn/NotesColumn";
import { Variations } from "./VariationsColumn/Variations";

const notes1 = [
  {
    id: 1,
    camera: { position: [0.5, 2, 3], focus: [0, 0, 0] },
    profileColor: '#c4c4c4',
    author: 'Name of person #1',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
  },
  {
    id: 2,
    camera: { position: [2, 3, 0.5], focus: [0, 0, 0] },
    profileColor: '#c4c4c4',
    author: 'Name of person #2',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    camera: { position: [3, 0.5, 2], focus: [0, 0, 0] },
    profileColor: '#c4c4c4',
    author: 'Name of person #3',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 4,
    camera: { position: [-2, 0, -3], focus: [0, 0, 0] },
    profileColor: '#c4c4c4',
    author: 'Name of person #4',
    comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const notes2 = [
  {
    id: 1,
    camera: { position: [0.5, 2, 3], focus: [0, 0, 0] },
    profileColor: '#ff7a7a',
    author: 'Greg Gottesman',
    comment: 'This is great feature to add. But have we thought about how it will work with the new intiative rolling out?',
  },
  {
    id: 2,
    camera: { position: [2, 3, 0.5], focus: [0, 0, 0] },
    profileColor: '#ffe279',
    author: 'Ed Lazowska',
    comment: 'I disagree with the design choice here. I believe that weather resistant material would be better used here.',
  },
  {
    id: 3,
    camera: { position: [3, 0.5, 2], focus: [0, 0, 0] },
    profileColor: '#ffc37c',
    author: 'Dawy "The Boulder" Johnson',
    comment: 'Have we thought about the cool factor associated with adding a flap here?  I’ve seeing market research that it is popular with our target demo.',
  },
];

const colors = ['#c4c4c4', '#ff7a7a', '#ffe279', '#ffc37c'];

/*
const shoes = [
  { name: 'shoe_model_panel', 
    label: 'Nike Zoom Prototype 1',
    items: [
      { name: 'shoe_1', label: 'shoe V1' },
      { name: 'shoe_2', label: 'shoe V1' },
      { name: 'shoe_3', label: 'shoe V1' },
      { name: 'shoe_4', label: 'shoe V1' },
    ],
  }
]
*/

function MainPage() {
  const [cameraPosition, setCameraPosition] = useState({ position: [-2, 0, -3], focus: [0, 0, 0] });
  const [camera, setCamera] = useState(undefined);
  const [controls, setControls] = useState(undefined);
  const [notes, setNotes] = useState(notes1);

  return (
    <>
      <Header />
      <div id="main-area">
        <Variations id="variations-column"
        />
        <ModelRenderer2 id="three-renderer"
          cameraPosition={cameraPosition}
          onUpdate={() => setCameraPosition(null)}
          setCamera={camera => setCamera(camera)}
          setOrbitControls={controls => setControls(controls)}
        />
        <NotesColumn notes={notes}
          onSubmitComment={comment => {
            setNotes([
              {
                id: 1 + Math.max(...notes.map(({ id }) => id)),
                camera: { position: camera.position.toArray(), focus: controls.target.toArray() },
                profileColor: colors[Math.floor(Math.random() * colors.length)],
                author: 'Greg Gottesman',
                comment: comment,
              },
              ...notes
            ]);
          }}
          onSelect={cameraPosition => setCameraPosition(cameraPosition)}
          onDeleteNote={id => setNotes(notes.filter(note => note.id !== id))}
        />
      </div>
    </>
  );
}

ReactDOM.render(<MainPage />, document.getElementById("root"));
