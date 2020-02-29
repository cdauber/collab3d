import React, { Suspense, useRef, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box3, Vector3, Color, sRGBEncoding } from "three";
import { connect } from "react-redux";
import { changeCamera } from "./redux/actions";
import { INITIAL_CAMERA_POSITION } from "./redux/store";

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

function ModelRenderer({ cameraPosition, onOrbitChange, ...props }) {
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
        <Model path="models/gltf/nike_shoe/scene.gltf" />
      </Suspense>
    </Canvas>
  );
}

export default connect(
  ({ comments, selectedCommentId }) => ({
    cameraPosition: comments.reduce(
      (acc, comment) =>
        comment.id === selectedCommentId ? comment.camera : acc,
      null
    )
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
      )
  })
)(ModelRenderer);
