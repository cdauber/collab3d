import React, { Suspense, useRef, useState, useEffect } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Box3, Vector3, Color, sRGBEncoding } from "three";

extend({ OrbitControls });

function Model({ setModelSize, ...props }) {
  const gltf = useLoader(GLTFLoader, "models/gltf/sneaker/scene.gltf");

  useEffect(() => {
    const maxVector = new Box3().setFromObject(gltf.scene).max;
    setModelSize(maxVector.length());
  }, [gltf, setModelSize]);

  return <primitive object={gltf.scene} position={[0, 0, 0]} {...props} />;
}

function Controls({ cameraPosition, modelSize, controls, ...props }) {
  function updateCamera(position, target, camera, controls) {
    camera.position.set(...position);
    controls.current.target.set(...target);
    controls.current.update();
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
        controls
      );
    }
  }, [camera, modelSize, controls]);

  useEffect(() => {
    if (cameraPosition) {
      updateCamera(
        cameraPosition.position,
        cameraPosition.focus,
        camera,
        controls
      );
    }
  }, [camera, cameraPosition, controls]);

  return (
    <orbitControls ref={controls} args={[camera, domElement]} {...props} />
  );
}

export function ModelRenderer({
  cameraPosition,
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
      />
      <ambientLight />
      <Suspense fallback={null}>
        <Model setModelSize={setModelSize} />
      </Suspense>
    </Canvas>
  );
}
