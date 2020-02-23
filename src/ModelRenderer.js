import React, { Suspense, useRef, useState, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box3, Vector3, Color, sRGBEncoding } from "three";

extend({ OrbitControls });

function Model({ setModelSize, ...props }) {
  const gltf = useLoader(GLTFLoader, "models/gltf/nike_shoe/scene.gltf");

  useEffect(() => {
    //const maxVector = new Box3().setFromObject(gltf.scene).max;
    //setModelSize(maxVector.length());

    //Centering Object
    var mroot = gltf.scene;
    var bbox = new Box3().setFromObject(mroot);
    var cent = bbox.getCenter(new Vector3());
    var size = bbox.getSize(new Vector3());

    //Rescale the object to normalized space
    var maxAxis = Math.max(size.x, size.y, size.z);
    mroot.scale.multiplyScalar(5.0 / maxAxis);
    bbox.setFromObject(mroot);
    bbox.getCenter(cent);
    bbox.getSize(size);
    mroot.position.copy(cent).multiplyScalar(-1);
  }, [gltf, setModelSize]);

  return <primitive object={gltf.scene} {...props} />;
}

function Controls({
  cameraPosition,
  modelSize,
  controls,
  onOrbitChange,
  ...props
}) {
  function updateCamera(
    position,
    target,
    camera,
    controls,
    updateEventListener = false,
    onOrbitChange
  ) {
    camera.position.set(...position);
    controls.target.set(...target);
    if (updateEventListener) {
      controls.addEventListener("change", onOrbitChange);
    }
    controls.update();
  }

  const {
    camera,
    gl: { domElement }
  } = useThree();

  useEffect(() => {
    if (modelSize) {
      updateCamera(
        new Vector3(1, 0.5, 1).setLength(2 * modelSize).toArray(),
        [0, 0, 0],
        camera,
        controls.current
      );
    }
  }, [camera, modelSize, controls]);

  useEffect(() => {
    if (cameraPosition) {
      updateCamera(
        cameraPosition.position,
        cameraPosition.focus,
        camera,
        controls.current,
        true,
        onOrbitChange
      );
    }
  }, [camera, cameraPosition, controls, onOrbitChange]);

  useEffect(() => {
    const ref = controls.current;
    if (controls.current) {
      ref.addEventListener("change", onOrbitChange);
    }

    return () => ref.removeEventListener("change", onOrbitChange);
  }, [controls, onOrbitChange]);

  return (
    <orbitControls ref={controls} args={[camera, domElement]} {...props} />
  );
}

export function ModelRenderer({
  cameraPosition,
  onOrbitChange,
  setCamera,
  setOrbitControls,
  ...props
}) {
  const [modelSize, setModelSize] = useState(undefined);

  const controls = useRef();
  useEffect(() => {
    setOrbitControls(controls.current);
  }, [controls, setOrbitControls]);

  return (
    <Canvas
      camera={{ fov: 60, near: 1 }}
      onCreated={({ gl, scene, camera }) => {
        gl.outputEncoding = sRGBEncoding;
        scene.background = new Color(0xfafafa);

        setCamera(camera);
      }}
      {...props}
    >
      <Controls
        cameraPosition={cameraPosition}
        modelSize={modelSize}
        controls={controls}
        minDistance={1}
        maxDistance={modelSize ? 5 * modelSize : 50}
        onOrbitChange={onOrbitChange}
      />
      <ambientLight />
      <Suspense fallback={null}>
        <Model setModelSize={setModelSize} />
      </Suspense>
    </Canvas>
  );
}
