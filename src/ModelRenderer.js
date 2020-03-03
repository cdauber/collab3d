import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { Box3, Color, sRGBEncoding, Vector3 } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { changeCamera } from "./redux/actions";
import { cameraPositionEquals, INITIAL_CAMERA_POSITION } from "./redux/store";

extend({ OrbitControls });

function Model({ path, activeVariationIds, fallback, ...props }) {
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

function LoadingModel({ color = "orange", ...props }) {
  const mesh = useRef();
  const [loadingModel, setLoadingModel] = useState();

  useEffect(() => {
    if (!loadingModel) {
      (async () => {
        const gltf = await new Promise((resolve, reject) =>
          new GLTFLoader().load(
            "models/gltf/loading_model_2/Project Name.gltf",
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
    }
  });

  return loadingModel ? (
    <primitive ref={mesh} object={loadingModel.scene} {...props} />
  ) : null;
}

function ModelRenderer({
  cameraPosition,
  modelPath,
  onOrbitChange,
  activeVariationIds,
  ...props
}) {
  return (
    <Canvas
      camera={{ fov: 60, near: 1, position: INITIAL_CAMERA_POSITION }}
      onCreated={({ gl, scene }) => {
        if (gl) gl.outputEncoding = sRGBEncoding;
        if (scene) scene.background = new Color(0xfafafa);
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
        activeVariationIds={activeVariationIds}
        fallback={<LoadingModel />}
      />
    </Canvas>
  );
}

export default connect(
  ({ cameraPosition, activeVariationIds }) => ({
    cameraPosition,
    activeVariationIds
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
