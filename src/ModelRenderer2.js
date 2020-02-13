import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useThree, extend, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

extend({ OrbitControls });

function Model() {
  const gltf = useLoader(GLTFLoader, 'models/gltf/microphone/scene.gltf');
  return <primitive object={gltf.scene} position={[0, 0, 0]} />
}

function Controls({ cameraPosition, onUpdate, setOrbitControls, ...props }) {
  const [controlsSet, setControlsSet] = useState(true);
  const {
    camera,
    gl: { domElement }
  } = useThree();
  const controls = useRef();
  
  useFrame(({ camera }) => {
    if (controlsSet) {
      setOrbitControls(controls.current);
      setControlsSet(false);
    }

    if (cameraPosition) {
      camera.position.set(...cameraPosition.position);
      camera.lookAt(0, 0, 0);
      controls.current.target.set(...cameraPosition.focus);
      controls.current.update();
      onUpdate();
    }
  });

  return <orbitControls ref={controls} args={[camera, domElement]} {...props} />
}

export function ModelRenderer2({
  cameraPosition,
  onUpdate,
  setCamera,
  setOrbitControls,
  ...props
}) {
  return <Canvas camera={{ fov: 60, near: 1, position: [-2, 0, -3] }}
    gl={{ outputEncoding: THREE.sRGBEncoding }}
    onCreated={({ gl, scene, camera }) => {
      gl.outputEncoding = THREE.sRGBEncoding;
      scene.background = new THREE.Color(0xfafafa);
      camera.lookAt(0, 0, 0);

      setCamera(camera);
    }}
    {...props}>
    <Controls cameraPosition={cameraPosition}
      onUpdate={onUpdate}
      setOrbitControls={setOrbitControls}
      minDistance={1}
      maxDistance={50}
    />
    <pointLight position={[10, 10, 10]} />
    <pointLight position={[-10, -10, -10]} />
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  </Canvas>;
}