import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { Box3, Color, sRGBEncoding, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { changeCamera, placePin, setPinPosition } from "./redux/actions";
import { cameraPositionEquals, CURSOR } from "./redux/store";

extend({ OrbitControls });

function Model({ path, fallback, ...props }) {
  const [model, setModel] = useState();

  useEffect(() => {
    if (!model) {
      (async () => {
        const gltf = await new Promise((resolve, reject) =>
          new GLTFLoader().load(path, resolve, undefined, reject)
        );
        var mroot = gltf.scene;

        //Rescale the object to normalized space
        var bbox = new Box3().setFromObject(mroot);
        mroot.scale.multiplyScalar(
          5 / Math.max(...bbox.getSize(new Vector3()).toArray())
        );

        //Centering Object
        bbox.setFromObject(mroot);
        mroot.position.copy(bbox.getCenter(new Vector3())).multiplyScalar(-1);

        setModel(gltf);
      })();
    }
  }, [path, model]);

  return model ? <primitive object={model.scene} {...props} /> : fallback;
}

function Pin({ pinPosition, color = "red" }) {
  const mesh = useRef();

  useEffect(() => {
    if (mesh.current) {
      mesh.current.geometry.verticesNeedUpdate = true;
    }
  });

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

  return pin;
}

function Controls({ cameraPosition, onOrbitChange, ...props }) {
  const controlsRef = useRef();

  useFrame(() => {
    const controls = controlsRef.current;
    if (
      cameraPosition &&
      !cameraPositionEquals(cameraPosition, {
        position: controls.object.position.toArray(),
        focus: controls.target.toArray()
      })
    ) {
      const { position, focus } = cameraPosition;
      controls.object.position.set(...position);
      controls.target.set(...focus);
      controls.update();
    }
  });

  useEffect(() => {
    const controls = controlsRef.current;
    controls.addEventListener("change", onOrbitChange);
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

function LoadingModel({ color = "orange", position, ...props }) {
  const mesh = useRef();
  const [loadingModel, setLoadingModel] = useState();

  useEffect(() => {
    if (!loadingModel) {
      (async () => {
        const gltf = await new Promise((resolve, reject) =>
          new GLTFLoader().load(
            "models/gltf/vivid3d_loader/scene.gltf",
            resolve,
            undefined,
            reject
          )
        );
        gltf.scene.scale.setLength(13);
        setLoadingModel(gltf);
      })();
    }
  }, [loadingModel, setLoadingModel]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y -= 0.03;
      mesh.current.position.set(...position);
    }
  });

  return loadingModel ? (
    <primitive ref={mesh} object={loadingModel.scene} {...props} />
  ) : null;
}

function ModelRenderer({
  cameraPosition,
  comments,
  modelPath,
  pinIsAttached,
  pinFollowCursor,
  pin,
  showPins,
  onOrbitChange,
  placePinClick,
  onPointerMove,
  ...props
}) {
  return (
    <Canvas
      camera={{ fov: 60, near: 1 }}
      onCreated={({ gl, scene }) => {
        if (gl) gl.outputEncoding = sRGBEncoding;
        if (scene) scene.background = new Color(0xe5e5e5);
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
      <Model
        path={modelPath}
        fallback={<LoadingModel position={cameraPosition.focus} />}
        onPointerMove={pinFollowCursor && onPointerMove}
        onClick={pinFollowCursor && placePinClick}
      />
      {pinIsAttached && <Pin pinPosition={pin} color="#E37FFA" />}
      {showPins &&
        comments
          .filter(comment => comment.pin)
          .map(comment => <Pin key={comment.id} pinPosition={comment.pin} />)}
    </Canvas>
  );
}

export default connect(
  ({ cameraPosition, comments, pinIsAttached, cursor, pin, showPins }) => ({
    cameraPosition,
    comments,
    pinIsAttached,
    pinFollowCursor: cursor === CURSOR.PIN,
    pin,
    showPins
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
