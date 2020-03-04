import React, { Suspense, useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box3, Vector3, Color, sRGBEncoding } from "three";
import { connect } from "react-redux";
import { changeCamera, placePin, setPinPosition } from "./redux/actions";
import { INITIAL_CAMERA_POSITION, CURSOR } from "./redux/store";

extend({ OrbitControls });

function Model({ path, ...props }) {
  const gltf = useLoader(GLTFLoader, path);

  useEffect(() => {
    var mroot = gltf.scene;

    //Rescale the object to normalized space
    var bbox = new Box3().setFromObject(mroot);
    mroot.scale.multiplyScalar(
      5 / Math.max(...bbox.getSize(new Vector3()).toArray())
    );

    //Centering Object
    bbox.setFromObject(mroot);
    mroot.position.copy(bbox.getCenter(new Vector3())).multiplyScalar(-1);
  }, [gltf]);

  return <primitive object={gltf.scene} {...props} />;
}

function Pin({ pinPosition, color = "red" }) {
  const mesh = useRef();
  if (!pinPosition) return null;

  let position = new Vector3(...pinPosition.position);
  let normal = new Vector3(...pinPosition.normal);

  let endVertex = position.clone();
  endVertex.addScaledVector(normal, 0.2); //length of pin

  var points = [position, endVertex];

  var pin = (
    <group>
      <line ref={mesh}>
        <geometry
          attach="geometry"
          vertices={points}
          verticesNeedUpdate={true}
        />
        <meshBasicMaterial attach="material" color="#7B7B7B" />
      </line>

      <mesh visible position={points[1]}>
        <sphereGeometry attach="geometry" args={[0.03, 16, 16]} />
        <meshStandardMaterial attach="material" color={color} />
      </mesh>
    </group>
  );
  if (mesh.current) {
    mesh.current.geometry.verticesNeedUpdate = true;
  }

  return pin;
}

function Controls({ cameraPosition, onOrbitChange, ...props }) {
  const controlsRef = useRef();
  useEffect(() => {
    const controls = controlsRef.current;

    if (cameraPosition) {
      const { position, focus } = cameraPosition;
      controls.object.position.set(...position);
      controls.target.set(...focus);
    }

    controls.addEventListener("change", onOrbitChange);
    controls.update();

    return () => controls.removeEventListener("change", onOrbitChange);
  }, [cameraPosition, controlsRef, onOrbitChange]);

  const {
    camera,
    gl: { domElement }
  } = useThree();
  return (
    <orbitControls ref={controlsRef} args={[camera, domElement]} {...props} />
  );
}

function ModelRenderer({
  cameraPosition,
  onOrbitChange,
  placePinClick,
  onPointerMove,
  pointerEventData,
  pinIsAttached,
  pinFollowCursor,
  pin,
  comments,
  ...props
}) {
  return (
    <Canvas
      camera={{ fov: 60, near: 1, position: INITIAL_CAMERA_POSITION }}
      onCreated={({ gl, scene }) => {
        gl.outputEncoding = sRGBEncoding;
        scene.background = new Color(0xfafafa);
      }}
      {...props}
    >
      <Controls
        cameraPosition={cameraPosition}
        minDistance={1}
        maxDistance={50}
        onOrbitChange={onOrbitChange}
      />
      <ambientLight />
      <Suspense fallback={null}>
        <Model
          path="models/gltf/nike_shoe/scene.gltf"
          onPointerMove={pinFollowCursor && onPointerMove}
          onClick={pinFollowCursor && placePinClick}
        />
        {pinIsAttached && <Pin pinPosition={pin} color="#E37FFA" />}
        {comments
          .filter(comment => comment.pin)
          .map(comment => (
            <Pin key={comment.id} pinPosition={comment.pin} />
          ))}
      </Suspense>
    </Canvas>
  );
}

export default connect(
  ({
    comments,
    selectedCommentId,
    activeCameraPosition,
    pointerEventData,
    pinIsAttached,
    cursor,
    pin
  }) => ({
    cameraPosition: comments.reduce(
      (acc, comment) =>
        comment.id === selectedCommentId ? comment.camera : acc,
      activeCameraPosition
    ),
    comments,
    pointerEventData,
    pinIsAttached,
    pinFollowCursor: cursor === CURSOR.PIN,
    pin
  }),
  dispatch => ({
    onOrbitChange: ({
      target: {
        object: { position },
        target: focus
      }
    }) =>
      dispatch(
        changeCamera({ position: position.toArray(), focus: focus.toArray() })
      ),
    onPointerMove: event =>
      dispatch(
        setPinPosition({
          position: event.point.toArray(),
          normal: event.face.normal.toArray()
        })
      ),
    placePinClick: () => dispatch(placePin())
  })
)(ModelRenderer);
