import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ModelRenderer2 } from "./ModelRenderer2";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Header from "./Header/Header";
import { Button } from "react-bootstrap";
import { NotesColumn } from "./NotesColumn/NotesColumn";

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

function MainPage() {
  const [cameraPosition, setCameraPosition] = useState({ position: [-2, 0, -3], focus: [0, 0, 0] });
  const [camera, setCamera] = useState(undefined);
  const [controls, setControls] = useState(undefined);
  const [notes, setNotes] = useState(notes1);

  return (
    <>
      <Header />
      <div id="main-area">
        <div id="variations-column">
          <Button
            onClick={() => setCameraPosition({
              position: [
                0.8876483038068422,
                0,
                0.46052197423015095,
                0,
                0.143698258438904,
                0.9500711177409453,
                -0.27697595880526665,
                0,
                -0.4375286268011064,
                0.3120334456984873,
                0.8433290161586208,
                0,
                -1.5926282414090294,
                1.135818886907916,
                3.0697639552267915,
                1
              ],
              focus: [0, 0, 0],
            })}
          >
            Position 1
            </Button>
          <Button
            onClick={() => setCameraPosition({
              position: [
                -0.9990864021979794,
                0,
                0.04273594439224533,
                0,
                0.026569622732542743,
                0.7832427130760378,
                0.6211480560712863,
                0,
                -0.033472617031648916,
                0.6217160544921511,
                -0.782527144254923,
                0,
                -0.1218421651361034,
                2.2630805983163875,
                -2.848441800760354,
                1
              ],
              focus: [0, 0, 0],
            })}
          >
            Position 2
            </Button>
          <Button
            onClick={() => setCameraPosition({
              position: [
                -0.992904594169215,
                0,
                -0.11891369508036442,
                0,
                0.11228505451656628,
                0.32921006243195794,
                -0.9375568256515217,
                0,
                0.03914758498142157,
                -0.944256710218967,
                -0.32687418343542496,
                0,
                0.14114862496109934,
                -3.404565985895425,
                -1.178561629001846,
                1
              ],
              focus: [0, 0, 0],
            })}
          >
            Position 3
            </Button>
        </div>
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
